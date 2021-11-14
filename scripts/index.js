let themeId = "red";

window.onload = function SetTheme() {
let rbChecker = document.getElementsByName("checker");
    
    for (var i = 0; i < rbChecker.length; i++) {
        if (rbChecker[i].value == localStorage.getItem("theme_id")) {
            rbChecker[i].checked = true;
            break;
        }
    }
            
    themeId = localStorage.getItem("theme_id");

    if (themeId == 'light') {
        document.getElementById("theme").href = 'styles/light.css';
    }
    else if (themeId == 'dark') { 
        document.getElementById("theme").href = 'styles/dark.css';
    }
    else if (themeId == 'orange') { 
        document.getElementById("theme").href = 'styles/orange.css';
    }
    else if (themeId == 'pink') { 
        document.getElementById("theme").href = 'styles/pink.css';
    }
    else if (themeId == 'red') { 
        document.getElementById("theme").href = 'styles/red.css';
    }
    else if (themeId == 'yellow') { 
        document.getElementById("theme").href = 'styles/yellow.css';
    }
}

function SetTheme() {            
    if(localStorage.getItem("theme_id" !== '')) {  
        themeId = localStorage.getItem("theme_id", themeId); 
    }
           
    let rbChecker = document.getElementsByName("checker");
            
    for (var i = 0; i < rbChecker.length; i++) {
        if (rbChecker[i].checked) {
            themeId = (rbChecker[i].value);
            localStorage.setItem("theme_id", themeId);
            break;
        }
    }
    
    if (themeId == 'light') {
        document.getElementById("theme").href = 'styles/light.css';
    }
    else if (themeId == 'dark') { 
        document.getElementById("theme").href = 'styles/dark.css';
    }
    else if (themeId == 'orange') { 
        document.getElementById("theme").href = 'styles/orange.css';
    }
    else if (themeId == 'pink') { 
        document.getElementById("theme").href = 'styles/pink.css';
    }
    else if (themeId == 'red') { 
        document.getElementById("theme").href = 'styles/red.css';
    }
    else if (themeId == 'yellow') { 
        document.getElementById("theme").href = 'styles/yellow.css';
    }
}