const main = document.getElementById("main")


const getTeamsAsync = async () =>{
    let response = await fetch("https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=NBA");
    let teamsNBA = await response.json();
    
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
        link.href = "../pages/favoritos.html";
        link.textContent = "AÑADIR A FAVORITOS";
        link.className = "link__fav";
        link.setAttribute("data__team--name", equipo.getNombre()); // Agregar el nombre del equipo como atributo
        link.setAttribute("data__team--logo", equipo.getLogo()); // Agregar el logo del equipo como atributo
        link.setAttribute("data__team--anio", equipo.getAnio()); // Agregar el año del equipo como atributo
        link.addEventListener("click", agregarFavoritos); // Agregar un evento de clic al enlace
        section.appendChild(link)
        
    });
    
}


const agregarFavoritos = (event) => {
    event.preventDefault();
    const equipoNombre = event.target.getAttribute("data__team--name");
    const equipoLogo = event.target.getAttribute("data__team--logo");
    const equipoAnio = event.target.getAttribute("data__team--anio");

    const equipoFavorito = {
        nombre: equipoNombre,
        logo: equipoLogo,
        anio: equipoAnio
    };

    localStorage.setItem("equipoFavorito", JSON.stringify(equipoFavorito));
};


document.addEventListener("DOMContentLoaded", getTeamsAsync);
