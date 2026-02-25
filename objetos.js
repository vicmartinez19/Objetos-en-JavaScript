let libro = {
  titulo: "El principito",
  autor: "Antoine de Saint-Exupéry",
  anio: 1943,
  estado: "disponible",
  capitulos: [],

  describirLibro: function() {
    console.log("Libro titulado " + this.titulo +
                ", escrito por " + this.autor +
                " en el año " + this.anio +
                ", el estado es: " + this.estado + ".");
  },

  agregarCapitulo: function(capitulo) {
    this.capitulos.push(capitulo);
  },

  eliminarCapitulo: function(capitulo) {
    let indice = this.capitulos.indexOf(capitulo);
    if (indice !== -1) {
      this.capitulos.splice(indice, 1);
    }
  }
};

libro.describirLibro();

libro.agregarCapitulo("Capítulo 1");
libro.agregarCapitulo("Capítulo 2");

console.log("Capítulos:", libro.capitulos);

libro.eliminarCapitulo("Capítulo 1");

console.log("Capítulos después de eliminar:", libro.capitulos);