const personas = [{"id":1,"first_name":"Jillane","last_name":"Mithon","email":"jmithon0@fc2.com","gender":"Female","ip_address":"244.137.164.23"},
{"id":2,"first_name":"Pier","last_name":"Cluney","email":"pcluney1@flickr.com","gender":"Female","ip_address":"206.221.95.116"},
{"id":3,"first_name":"Alphard","last_name":"Dennes","email":"adennes2@cnn.com","gender":"Male","ip_address":"252.128.17.248"},
{"id":4,"first_name":"Libbi","last_name":"Logie","email":"llogie3@stumbleupon.com","gender":"Female","ip_address":"90.234.112.99"},
{"id":5,"first_name":"Flynn","last_name":"Hunday","email":"fhunday4@tiny.cc","gender":"Male","ip_address":"153.238.45.36"},
{"id":6,"first_name":"Jacquelin","last_name":"Syphas","email":"jsyphas5@naver.com","gender":"Female","ip_address":"103.72.145.213"},
{"id":7,"first_name":"Ward","last_name":"Licciardi","email":"wlicciardi6@infoseek.co.jp","gender":"Polygender","ip_address":"217.169.115.19"},
{"id":8,"first_name":"Mattias","last_name":"Cotty","email":"mcotty7@devhub.com","gender":"Male","ip_address":"28.172.5.82"},
{"id":9,"first_name":"Karylin","last_name":"Casado","email":"kcasado8@admin.ch","gender":"Female","ip_address":"191.161.148.248"},
{"id":10,"first_name":"Fairleigh","last_name":"Thomas","email":"fthomas9@godaddy.com","gender":"Male","ip_address":"228.168.240.41"},
{"id":11,"first_name":"Katrine","last_name":"Rigeby","email":"krigebya@fc2.com","gender":"Female","ip_address":"69.162.92.99"},
{"id":12,"first_name":"Malvin","last_name":"Borit","email":"mboritb@ifeng.com","gender":"Male","ip_address":"10.111.62.156"},
{"id":13,"first_name":"Nikolaus","last_name":"Dobney","email":"ndobneyc@feedburner.com","gender":"Male","ip_address":"196.180.53.70"},
{"id":14,"first_name":"Ellene","last_name":"Singers","email":"esingersd@google.cn","gender":"Female","ip_address":"105.60.145.33"},
{"id":15,"first_name":"Sutton","last_name":"Greason","email":"sgreasone@umn.edu","gender":"Male","ip_address":"197.114.25.156"},
{"id":16,"first_name":"Felike","last_name":"Guilder","email":"fguilderf@cargocollective.com","gender":"Male","ip_address":"137.218.81.140"},
{"id":17,"first_name":"Chester","last_name":"Derkes","email":"cderkesg@edublogs.org","gender":"Male","ip_address":"132.123.229.234"},
{"id":18,"first_name":"Jemmy","last_name":"Tenny","email":"jtennyh@nhs.uk","gender":"Female","ip_address":"19.2.9.238"},
{"id":19,"first_name":"Stephannie","last_name":"Shird","email":"sshirdi@ucsd.edu","gender":"Female","ip_address":"35.80.38.67"},
{"id":20,"first_name":"Allard","last_name":"Tregidga","email":"atregidgaj@rediff.com","gender":"Male","ip_address":"228.8.72.43"},
{"id":21,"first_name":"Rock","last_name":"Proske","email":"rproskek@google.pl","gender":"Male","ip_address":"157.251.123.193"},
{"id":22,"first_name":"Yetty","last_name":"Lenglet","email":"ylengletl@behance.net","gender":"Female","ip_address":"22.125.252.238"},
{"id":23,"first_name":"Dana","last_name":"Rousell","email":"drousellm@ow.ly","gender":"Male","ip_address":"1.245.32.126"},
{"id":24,"first_name":"Delinda","last_name":"Costen","email":"dcostenn@ihg.com","gender":"Female","ip_address":"196.86.14.46"},
{"id":25,"first_name":"Gray","last_name":"Gillbard","email":"ggillbardo@hexun.com","gender":"Male","ip_address":"101.197.187.212"},
{"id":26,"first_name":"Rafe","last_name":"Maccaig","email":"rmaccaigp@tamu.edu","gender":"Male","ip_address":"148.110.100.104"},
{"id":27,"first_name":"Antonella","last_name":"Monte","email":"amonteq@virginia.edu","gender":"Female","ip_address":"243.203.125.198"},
{"id":28,"first_name":"Merola","last_name":"Hars","email":"mharsr@illinois.edu","gender":"Female","ip_address":"64.62.26.169"},
{"id":29,"first_name":"Tomasina","last_name":"D'eathe","email":"tdeathes@mysql.com","gender":"Female","ip_address":"249.48.43.53"},
{"id":30,"first_name":"Nicko","last_name":"Shier","email":"nshiert@zdnet.com","gender":"Male","ip_address":"223.174.57.87"},
{"id":31,"first_name":"Kimberlee","last_name":"Vasilchikov","email":"kvasilchikovu@bigcartel.com","gender":"Female","ip_address":"63.224.199.212"},
{"id":32,"first_name":"Vachel","last_name":"Dome","email":"vdomev@reddit.com","gender":"Male","ip_address":"1.160.166.117"},
{"id":33,"first_name":"Vevay","last_name":"Boobier","email":"vboobierw@newyorker.com","gender":"Bigender","ip_address":"205.187.206.137"},
{"id":34,"first_name":"Gardiner","last_name":"Stark","email":"gstarkx@technorati.com","gender":"Male","ip_address":"165.112.109.204"},
{"id":35,"first_name":"Baxie","last_name":"Salmon","email":"bsalmony@ycombinator.com","gender":"Male","ip_address":"54.203.92.49"},
{"id":36,"first_name":"Forest","last_name":"Fosken","email":"ffoskenz@com.com","gender":"Male","ip_address":"176.138.60.48"},
{"id":37,"first_name":"Standford","last_name":"Nesterov","email":"snesterov10@artisteer.com","gender":"Male","ip_address":"107.164.33.175"},
{"id":38,"first_name":"Milicent","last_name":"Giffen","email":"mgiffen11@unesco.org","gender":"Female","ip_address":"144.19.198.91"},
{"id":39,"first_name":"Herve","last_name":"McCreath","email":"hmccreath12@goodreads.com","gender":"Male","ip_address":"193.109.39.1"},
{"id":40,"first_name":"Rodolph","last_name":"Crevy","email":"rcrevy13@cbsnews.com","gender":"Male","ip_address":"40.131.158.146"},
{"id":41,"first_name":"Terrijo","last_name":"Andrieu","email":"tandrieu14@privacy.gov.au","gender":"Female","ip_address":"114.82.166.147"},
{"id":42,"first_name":"Car","last_name":"Askwith","email":"caskwith15@statcounter.com","gender":"Male","ip_address":"193.52.221.114"},
{"id":43,"first_name":"Winny","last_name":"Knifton","email":"wknifton16@google.com","gender":"Male","ip_address":"239.248.213.201"},
{"id":44,"first_name":"Cash","last_name":"Eliasson","email":"celiasson17@desdev.cn","gender":"Male","ip_address":"129.244.156.142"},
{"id":45,"first_name":"Danya","last_name":"Durgan","email":"ddurgan18@de.vu","gender":"Agender","ip_address":"0.126.59.186"},
{"id":46,"first_name":"Ahmad","last_name":"Acedo","email":"aacedo19@alexa.com","gender":"Male","ip_address":"239.247.139.21"},
{"id":47,"first_name":"Inger","last_name":"O'Glassane","email":"ioglassane1a@umich.edu","gender":"Female","ip_address":"210.50.138.127"},
{"id":48,"first_name":"Emmanuel","last_name":"Messenger","email":"emessenger1b@hao123.com","gender":"Male","ip_address":"24.214.55.56"},
{"id":49,"first_name":"Beatriz","last_name":"Coronado","email":"bcoronado1c@ed.gov","gender":"Female","ip_address":"65.144.124.106"},
{"id":50,"first_name":"Kathleen","last_name":"Catterson","email":"kcatterson1d@fastcompany.com","gender":"Female","ip_address":"228.147.198.87"},
{"id":51,"first_name":"Sigismondo","last_name":"Cloute","email":"scloute1e@indiatimes.com","gender":"Male","ip_address":"161.4.5.129"},
{"id":52,"first_name":"Monte","last_name":"Benzi","email":"mbenzi1f@xing.com","gender":"Male","ip_address":"184.181.63.147"},
{"id":53,"first_name":"Luke","last_name":"Mafham","email":"lmafham1g@miitbeian.gov.cn","gender":"Male","ip_address":"200.20.149.8"},
{"id":54,"first_name":"Belva","last_name":"Sampson","email":"bsampson1h@studiopress.com","gender":"Female","ip_address":"66.201.2.49"},
{"id":55,"first_name":"Garwood","last_name":"Obin","email":"gobin1i@pcworld.com","gender":"Male","ip_address":"173.126.92.48"}]

let buscador = parseInt(prompt('Ingrese el id que quieres saber los datos'))
let encontrado = false
for (const persona of personas) {
    if (persona.id === buscador){
        console.log(`Nombre: ${persona.first_name} Apellido: ${persona.last_name} Email: ${persona.email} Genero: ${persona.gender} IP: ${persona.ip_address}`)
        encontrado = true
        break   
    }
}
if (!encontrado){   
        console.log('No se ha encontrado a la persona.')
    }

const ContadorMujeres = personas.reduce((acc,persona) =>{
let genero = persona.gender;
if (genero === 'Female'){
    acc ++;
}
return acc
},0)

console.log(ContadorMujeres)


