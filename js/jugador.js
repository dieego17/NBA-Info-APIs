class Jugador {
    constructor(nombre, edad, equipo, partidos, asistencias, puntos, rebotes){
        this.nombre = nombre;
        this.edad = edad;
        this.equipo = equipo;
        this.partidos = partidos;
        this.asistencias = asistencias;
        this.puntos = puntos;
        this.rebotes = rebotes;
    }

    getnombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getedad() {
        return this.edad;
    }

    setEdad(edad) {
        this.edad = edad;
    }

    getequipo() {
        return this.equipo;
    }

    setEquipo(equipo) {
        this.equipo = equipo;
    }

    getpartidos() {
        return this.partidos;
    }

    setPartidos(partidos) {
        this.partidos = partidos;
    }

    getasistencias() {
        return this.asistencias;
    }

    setAsistencias(asistencias) {
        this.asistencias = asistencias;
    }

    getpuntos() {
        return this.puntos;
    }

    setPuntos(puntos) {
        this.puntos = puntos;
    }

    getrebotes() {
        return this.rebotes;
    }

    setRebotes(rebotes) {
        this.rebotes = rebotes;
    }
}

let cuerpoTabla = document.getElementById("cuerpoTabla");

const getPlayersAsync = async () => {
    let response = await fetch("https://nba-stats-db.herokuapp.com/api/playerdata/topscorers/total/season/2023/");
    let playersNBA = await response.json();

    playersNBA.results.forEach(player => {
        let jugador = new Jugador(player.player_name, player.age, player.team, player.minutes_played, player.AST, player.PTS, player.BLK);
        let fila = document.createElement("tr");

        let nombre = document.createElement("TD");
        nombre.textContent = jugador.getnombre();
        nombre.classList.add("tabla__td");

        let edad = document.createElement("TD");
        edad.textContent = jugador.getedad();
        edad.classList.add("tabla__td");

        let equipo = document.createElement("TD");
        equipo.textContent = jugador.getequipo();
        equipo.classList.add("tabla__td");

        let partidos = document.createElement("TD");
        partidos.textContent = jugador.getpartidos();
        partidos.classList.add("tabla__td");

        let puntos = document.createElement("TD");
        puntos.textContent = jugador.getpuntos();
        puntos.classList.add("tabla__td");

        let asistencias = document.createElement("TD");
        asistencias.textContent = jugador.getasistencias();
        asistencias.classList.add("tabla__td");

        let rebotes = document.createElement("TD");
        rebotes.textContent = jugador.getrebotes();
        rebotes.classList.add("tabla__td");

        cuerpoTabla.appendChild(fila);
        fila.appendChild(nombre)
        fila.appendChild(edad)
        fila.appendChild(equipo)
        fila.appendChild(partidos)
        fila.appendChild(puntos)
        fila.appendChild(asistencias)
        fila.appendChild(rebotes)
    });
}

document.addEventListener("DOMContentLoaded", getPlayersAsync);

