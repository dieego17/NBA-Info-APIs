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

const main = document.getElementById("main")


const getTeamsAsync = async () =>{
    let response = await fetch("https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=NBA");
    let teamsNBA = await response.json();
    console.log(teamsNBA)
    
    teamsNBA.teams.forEach(teamData => {

        let equipo = new Equipo(teamData.strTeam, teamData.strTeamBadge, teamData.intFormedYear);
        
        let section = document.createElement("SECTION");
        section.className = "card__team"
        main.appendChild(section);
    
        let h1 = document.createElement("H1");
        h1.textContent =  equipo.getNombre();
        h1.className = "title__team"
        section.appendChild(h1)

        let article = document.createElement("ARTICLE");
        article.className = "article__team"
        section.appendChild(article)
    
        let img = document.createElement("IMG")
        img.src = equipo.getLogo();
        img.className = "img__logo"
        article.appendChild(img)

        let text = document.createElement("P");
        text.className = "texto__anio";
        text.textContent = "Año de fundación: " + equipo.getAnio();
        section.appendChild(text)

        let link = document.createElement("a");
        link.href = "#";
        link.textContent = "AÑADIR A FAVORITOS";
        link.className = "link__fav";
        section.appendChild(link)
        
    });
    
}

document.addEventListener("DOMContentLoaded", getTeamsAsync);
