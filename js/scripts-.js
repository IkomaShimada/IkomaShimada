// Inicializamos Muuri
const grid = new Muuri('.grid-gallery',{
    layout: {
        // el atributo rounding sirve para el calculo del tamaño de los elementos. Al estar en false se evita ese calculo, dotando de la exactitud en las medidas que se definan dentro del css
        rounding:false
    }
});


window.addEventListener('load',() =>{
    // resfreshItems es una método de Muuri que permite actualizar las medidas calculadas
    grid.refreshItems().layout();
    // Esto hará que permita visualizarse las imagenes una vez cargada toda la web
    document.getElementById('grid-gallery').classList.add('img-loaded');


    // Enlaces de filtrado

    // Esta constante almacena todos los enlaces 'a' dentro del id #categories
    const enlaces = document.querySelectorAll('#categories a');

    // Por cada enlace se ejecutará esta función
    enlaces.forEach( elemento => {
        // al hacer click se hará...
        elemento.addEventListener('click', (evento) => {
            // prevenimos el comportamiento por default del elemento 'a'
            evento.preventDefault();
            // luego por cada enlace al hacer click se removerá la clase 'active'
            enlaces.forEach((enlace) => enlace.classList.remove('active'))
            // y al que fue seleccionado(el 'target') se le agregará la clase 'active'
            evento.target.classList.add('active')

            // filtrado

            // esto captura el valor dentro del elemento llamado 'elemento' que es un  enlace='a'. Es decir capturará lo que esta dentro de la etiqueta <a>texto</a>
            const categoria = evento.target.innerHTML.toLowerCase();

            // grid.filter es un método de Muuri que permite filtrar segun los atributos que contenga cada item dentro de la galería
            // En este caso los items-gallery del grid-gallery
            // Aquí se usa una condición de ES6 de una sola linea, verifica que las categoría contengan el mismo valor que el [data-category] que tienen como atributo
            categoria === 'todos' ? grid.filter('[data-category]') :grid.filter(`[data-category="${categoria}"]`)
            
        })
    })

    // Agregamos el listener para la barra de busqueda
    document.querySelector('#search-bar').addEventListener('input', (evento) => {
        const busqueda = evento.target.value;
        grid.filter( () => {} )
    })
})