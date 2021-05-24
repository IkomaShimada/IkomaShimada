class Animal {
    constructor(nombre, velocidad, tamanio){
        this._nombre = nombre;
        this._velocidad = velocidad;
        this._tamanio = tamanio;
    }

    correr(){
        console.log(`${this._nombre} corre a ${this._velocidad} m/s`);
    }

    detener(){
        console.log(`${this._nombre} se detuvo D:`);
    }
}

let Panda = new Animal("Panda", 1, 100);


// Heredando propiedades, extends solamente declara que utilizará las propiedades de la clase de mayor jerarquía

class Conejo extends Animal {
    constructor(nombre, velocidad, tamanio, salto){
        // super me permite acceder al constructor de la clase con mayor jerarquía
        super(nombre, velocidad, salto);
        this._salto = salto;
    }
    // un metodo que específico de la clase conejo.
    esconder(){
        console.log(`${this._nombre} se escondió`)
    }
}

let BadBunny = new Conejo("Bad Bunny", 0.85, 1.75, 0.5);

console.log(BadBunny);

BadBunny.correr()