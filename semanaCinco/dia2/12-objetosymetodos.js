let album_musica = {
    nombre: "",
    artista: "Dua Lipa",
    discofrafia: "Warner Records",
    anio:2000,
    canciones: [
        {
            titulo:"Future Nostalgia",
            duración:3.04,
            escritores: ["Dua Lipa", "Clarence", "Jeff"]
        },
        {
            titulo: "Don't Start Now",
            duración: 3.03
        },
        {
            titulo:"Physical",
            duracion:3.13
        }
        
    ]
}

console.log(album_musica.canciones[1].titulo)
//metodos 
let restaurant = {
    nombre: "La Nueva Palomino",
    platillos: [
        {
            id:1,
            nombrePlatillo: "Rocoto Relleno",
            precio:30
        },
        {
            id:2,
            nombrePlatillo: "Pepian de cuy con sango",
            precio:30
        },
        {
            nombrePlatilla: "Chupe",
            precio:20
        }
        
    ],
    mostrarPlatillos: function(){
         console.log(restaurante.platillos)   
    }
}

//console.log(restaurante.mostrarPlatillos())
restaurante.mostrarPlatillos()