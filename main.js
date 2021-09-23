// const natalia = {}; // esto es un objeto literal
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de html y css",
        "Curso practico de html y css"
    ],
  // aprobarCurso: function() {}  // esta es una forma de crear metodos en un objeto de js... esto tambien se puede escribir de la siguiente manera
    aprovarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
};

//  Hacer que natalia apruebe otro curso
//  natalia.cursosAprobados.push("curso de responsive design");

// function Student() {}  // esta es la forma de crear un prototipo o molde

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito) {        esta es una forma de guardar metodos como si fueran un atributo dentro de un prototipo
    //     this.aprobarCurso.push(nuevoCursito);            es una forma de crear metodods dentro de prototipos en jS
    // }
}
//   la siguiente es una forma de crear un metodo para el prototipo Student por fuera la funcion utilizando la herramienta prototype
Student.prototype.aprovarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student( // esta es una instancia de  prototipos 
    "Juanita alejandra",
    15,
    [
        "Curso de introduccion a los videojuegos",
        "curso de creacion de personajes",
    ]
);


// las clases por dentro son prototipos en js ..simplemente que con una sintaxis muy parecida al que utilizariamos en otros lenguajes

// protopipos con la sintaxis de clases

class Student2 {
    constructor(name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2(
    "miguel",
    22,
    [
        "Curso de analisis de negocios para ciencias de datos",
        "Cursos de principios para la visualizacion de datos"
    ],
);

class Student3 {
    constructor({
        name,
        age,
        //twitter,
        //facebook,
        cursosAprobados = [],
        email,
        //instagram,
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

const nahuelito = new Student3({
    email: "miguel@platzi.com",
    name: "Nahuel",
    age: 22,
    // cursosAprobados: [
    //     "Curso de analisis de negocios para ciencias de datos",
    //     "Cursos de principios para la visualizacion de datos",
    // ],
});