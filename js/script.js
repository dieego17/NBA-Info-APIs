const container = document.getElementById("container")

//idLeague=4387   strSport="Basketball"

const getTeamsAsync = async () =>{
    let response = await fetch("https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=NBA");
    let teamsNBA = await response.json();
    console.log(teamsNBA)
    
    teamsNBA.teams.forEach(team => {
        
        if(team.strLeague === "NBA"){
            console.log(team)
            let div = document.createElement("DIV");
            div.className = ""
            container.appendChild(div);
    
            let h1 = document.createElement("H1");
            h1.textContent = team.strTeam
            h1.className = "title__team"
            div.appendChild(h1)
    
            let p = document.createElement("P");
            p.textContent = team.strLeague
            div.appendChild(p)
    
            let img = document.createElement("IMG")
            img.src = team.strTeamBadge;
            img.className = "img__logo"
            p.appendChild(img)
        }
        
    });
    
}

document.addEventListener("DOMContentLoaded", getTeamsAsync);
