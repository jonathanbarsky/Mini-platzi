class Student {
    constructor({
        name,
        email,
        instagram = undefined,
        facebook = undefined,
        username,
        twitter = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this. socialMedia = {
            twitter: twitter,
            //en este caso cualquier atributo: el mismo atributo podemos simplemente escribirlo una vez como abajo...javascript nos permite esta sintaxis 
            facebook,
            instagram,
        }
        this.username = username;
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student({
    name: "JuanDC",
    username: "JuanDC",
    email: "juanito@juanito.com",
    twitter: "fjuandc",

});

const miguelito2 = new Student({
    name: "miguelito",
    username: "miguelitoFeliz",
    email: "Miguelito@gmail.com",
    instagram: "miguelito_Feliz",
});






const juan1 = {
    name: "JuanDC",
    username: "JuanDC",
    points: 100,
    socialMedia: {
        twitter: "fjuanDC",
        instagram: "fjuanDC",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso definitivo de HTML y CSS",
        "Curso practico de HTML y CSS",
    ],
    learningPaths: [
        {
            name: "Escuela de desarrollo web",
            courses: [
                "Curso definitivo de HTML y CSS",
                "Curso practico de HTML y CSS",
                "curso de responsive design",
            ],
        },
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso de introduccion ala produccion de vieojuegos",
                "Curso Unreal engine",
                "curso de  unity en 3D",
            ],
        },
    ],
};

const miguelito = {
    name: "miguelito",
    username: "miguelito",
    points: 1000,
    socialMedia: {
        twitter: "miguelito-feliz",
        instagram: "miguelito",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso dataBusiness",
        "Curso databiz",
    ],
    learningPaths: [
        {
            name: "Escuela de desarrollo web",
            courses: [
                "Curso definitivo de HTML y CSS",
                "Curso practico de HTML y CSS",
                "curso de responsive design",
            ],
        },
        {
            name: "Escuela de Data science",
            courses: [
                "Curso dataBusiness",
                "Curso databiz",
                "curso de tableou",
            ],
        },
    ],
};