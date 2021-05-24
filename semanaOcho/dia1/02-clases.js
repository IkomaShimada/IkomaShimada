class Pokemon {
    // Estas son las características que va a tener mi objeto
    // No es obligatorio declarar las propiedades; No usamos LET VAR O Con
    Nombre;
    Fuerza;
    Tipo;
    Agilidad;
    Resistencia;
    Nivel;

    // Toda clase va a tener un constructor y siempre este método se ecutará al inicio de construir un objeto con la clase

    constructor(nombre, fuerza, tipo, agilidad, resistencia, nivel){
        //  y acá dentro construiremos el objeto
        // this hará referencia al objeto que en ese momento se este trabajando
        this.Nombre = nombre;
        this.Fuerza = fuerza;
        this.Tipo = tipo;
        this.Agilidad = agilidad;
        this.Resistencia = resistencia;
        this.Nivel = nivel;

        console.log("Construyendo");
        // Ejecturar un metodo de forma obligatoria cada vez que se instancie un objeto
        this.aparecer();
    }
    aparecer(){
        console.log(`Un ${this.Nombre} salvajae apareció`)
    }

    atacar(veces){
        console.log(`${this.Nombre} atacó con una fuerza de ${this.Fuerza} ${veces} veces`)
    }
}

let Pikachu = new Pokemon ("Pikachu", 20, "Eléctrico", 70, 15,1000);
console.log(Pikachu)


let Meowth = new Pokemon ("Meowth", 30, "Normal", 70, 20, 900);
console.log(Meowth)

//Uilizammos metodos

    // Pikachu.aparecer();
    // Meowth.aparecer();

Pikachu.atacar(2);