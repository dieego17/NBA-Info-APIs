class Equipo{
    constructor(nombre, logo, anio){
        this.nombre = nombre;
        this.logo = logo;
        this.anio = anio;
    }

    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }

    getLogo() {
        return this.logo;
    }
    setLogo(logo) {
        this.logo = logo;
    }

    getAnio() {
        return this.anio;
    }
    setAnio(anio) {
        this.anio = anio;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const equipoFavorito = JSON.parse(localStorage.getItem("equipoFavorito"));

    if (equipoFavorito) {

        const equipoContainer = document.getElementById("equipo-favorito");
        const equipoDiv = document.createElement("div");

        const nombreEquipo = document.createElement("h2");
        nombreEquipo.textContent = equipoFavorito.nombre;

        const logoEquipo = document.createElement("img");
        logoEquipo.src = equipoFavorito.logo;

        const anioFundacion = document.createElement("p");
        anioFundacion.textContent = "Año de fundación: " + equipoFavorito.anio;

        equipoDiv.appendChild(nombreEquipo);
        equipoDiv.appendChild(logoEquipo);
        equipoDiv.appendChild(anioFundacion);

        equipoContainer.appendChild(equipoDiv);
        
    } else {

        const equipoContainer = document.getElementById("equipo-favorito");
        equipoContainer.textContent = "No se ha seleccionado ningún equipo favorito.";
    }
});