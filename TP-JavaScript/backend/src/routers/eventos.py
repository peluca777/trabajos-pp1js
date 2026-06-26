from fastapi import APIRouter, HTTPException, Path
from typing import Annotated
from src.models.evento import Evento, EventoBase
router = APIRouter(prefix="/eventos", tags=["Eventos"])

eventos_db: list[Evento] = [
    Evento(id=1, nombre="Lollapalooza 2026", artista="Varios", lugar="Hipódromo Palermo", precio=45000),
    Evento(id=2, nombre="This Was Our Life", artista="Megadeth", lugar="Tecnopolis", precio=80000),
    Evento(id=3, nombre="The Last Will and Testament", artista="Opeth", lugar="Teatro Gran Rivadavia", precio=15000),
]

@router.get("/", response_model=list[Evento])
def get_eventos():
    return eventos_db

@router.get("/{evento_id}", response_model=Evento, responses={404: {"description": "Evento no encontrado"}})
def get_evento(evento_id: Annotated[int, Path(description="ID del evento", ge=1)]):
    for evento in eventos_db:
        if evento.id == evento_id:
            return evento
    raise HTTPException(status_code=404, detail="Evento no encontrado")

@router.post("/", response_model=Evento, status_code=201)
def crear_evento(evento: EventoBase):
    nuevo_id = max((e.id for e in eventos_db), default=0) + 1
    nuevo = Evento(id=nuevo_id, **evento.model_dump())
    eventos_db.append(nuevo)
    return nuevo

@router.put("/{evento_id}", response_model=Evento, responses={404: {"description": "Evento no encontrado"}})
def editar_evento(evento_id: Annotated[int, Path(description="ID del evento", ge=1)], datos: EventoBase):
    for i, evento in enumerate(eventos_db):
        if evento.id == evento_id:
            eventos_db[i] = Evento(id=evento_id, **datos.model_dump())
            return eventos_db[i]
    raise HTTPException(status_code=404, detail="Evento no encontrado")

@router.delete("/{evento_id}", responses={404: {"description": "Evento no encontrado"}})
def eliminar_evento(evento_id: Annotated[int, Path(description="ID del evento", ge=1)]):
    for i, evento in enumerate(eventos_db):
        if evento.id == evento_id:
            eventos_db.pop(i)
            return {"mensaje": "Evento eliminado"}
    raise HTTPException(status_code=404, detail="Evento no encontrado")
