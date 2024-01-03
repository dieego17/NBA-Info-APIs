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

        const equipoContainer = document.getElementById("equipo__favorito");
        const equipoDiv = document.createElement("DIV");
        equipoDiv.className = "container__tarjeta--fav";

        const article__team = document.createElement("ARTICLE");
        article__team.className = "article__team";

        const nombreEquipo = document.createElement("H2");
        nombreEquipo.textContent = equipoFavorito.nombre;
        nombreEquipo.className = "nombre__equipo";

        const anioFundacion = document.createElement("P");
        anioFundacion.textContent = "Año de fundación: " + equipoFavorito.anio;
        anioFundacion.className = "anio__fundacion";

        const logoEquipo = document.createElement("IMG");
        logoEquipo.src = equipoFavorito.logo;
        logoEquipo.className = "logo__equipo";

        const textNoti = document.createElement("P");
        textNoti.textContent = "Recibirás notificaciones sobre su equipo.";
        textNoti.className = "texto__noti"

        equipoDiv.appendChild(article__team);
        article__team.appendChild(nombreEquipo);
        article__team.appendChild(anioFundacion);
        equipoDiv.appendChild(logoEquipo);

        equipoContainer.appendChild(equipoDiv);
        equipoContainer.appendChild(textNoti);

    } else {

        const equipoContainer = document.getElementById("equipo__favorito");
        equipoContainer.textContent = "No se ha seleccionado ningún equipo favorito.";
        equipoContainer.className = "equipo__container"
    }
});

