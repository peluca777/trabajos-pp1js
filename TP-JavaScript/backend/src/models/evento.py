from pydantic import BaseModel, Field
from typing import Annotated

# Para CREAR y EDITAR (sin id, el id lo asigna el sistema)
class EventoBase(BaseModel):
    nombre: Annotated[str, Field(min_length=2, max_length=100, description="Nombre del evento")]
    artista: Annotated[str, Field(min_length=2, max_length=100, description="Artista o banda")]
    lugar: Annotated[str, Field(min_length=2, description="Lugar del evento")]
    precio: Annotated[float, Field(gt=0, description="Precio de la entrada")]

# Para RESPUESTAS (incluye id)
class Evento(EventoBase):
    id: Annotated[int, Field(description="ID único del evento")]