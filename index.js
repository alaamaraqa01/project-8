function calculateWeight() {
    var massInput = document.getElementById("mass").value;
    var planetSelect = document.getElementById("planet");
    var selectedPlanet=planetSelect.options[planetSelect.selectedIndex].value
    
    
    if (!massInput) {
        document.getElementById("required").style.display='flex';
        document.getElementById("show").style.display='none';
        document.getElementById("container").style.display='none'

        return;
    }

    if (selectedPlanet === "submit") {
        document.getElementById("show").style.display='flex'
        document.getElementById("required").style.display='none'
        document.getElementById("container").style.display='none'
        return;
    }
else{
    document.getElementById("required").style.display='none'
    document.getElementById("show").style.display='none'
}
var planet=document.getElementById('planet').id;
var gravity = gravities.find(planet => planet.id == selectedPlanet).gravity;
var weight = (massInput * gravity).toFixed(2);

document.getElementById('result').innerHTML=`the weight of the object on${planet}`
document.getElementById('res').innerHTML=`${weight}`+"N"
}




function ShowImg() {
    let planet = document.getElementById("planet").value;
    let planetImages = document.getElementsByClassName("planets");
    for (let i = 0; i < planetImages.length; i++) {
        planetImages[i].style.display = 'none'
        if (planet == 1) {
            document.getElementById("earth").style.display = 'flex'
            document.getElementById("show").style.display = 'none'
        }

    }
    if (planet == 2) {
        document.getElementById("earth").style.display = 'flex'
        document.getElementById("show").style.display = 'none'

    }
    else if (planet == 3) {
        document.getElementById("jupiter").style.display = 'flex'
        document.getElementById("show").style.display = 'none'

    }
    else if (planet == 4) {
        document.getElementById("mars").style.display = 'flex'
        document.getElementById("show").style.display = 'none'

    }
    else if (planet == 5) {
        document.getElementById("mercury").style.display = 'flex'
        document.getElementById("show").style.display = 'none'

    }
    else if (planet == 6) {
        document.getElementById("moon").style.display = 'flex'
        document.getElementById("show").style.display = 'none'

    }
    else if (planet == 7) {
        document.getElementById("neptune").style.display = 'flex'
        document.getElementById("show").style.display = 'none'

    }
    else if (planet == 8) {
        document.getElementById("pluto").style.display = 'flex'
        document.getElementById("show").style.display = 'none'

    }
    else if (planet == 9) {
        document.getElementById("saturn").style.display = 'flex'
        document.getElementById("show").style.display = 'none'

    }
    else if (planet == 10) {
        document.getElementById("uranus").style.display = 'flex'
        document.getElementById("show").style.display = 'none'

    }
    else if (planet == 11) {
        document.getElementById("venus").style.display = 'flex'
        document.getElementById("show").style.display = 'none'

    }

}
let gravities = [
    { name: "earth", gravity: 9.81, id: 2 },
    { name: "jupiter", gravity: 24.79, id: 3 },
    { name: "mars", gravity: 3.7, id: 4 },
    { name: "mercury", gravity: 3.7, id: 5 },
    { name: "moon", gravity: 1.62, id: 6 },
    { name: "neptune", gravity: 11.15, id: 7 },
    { name: "pluto", gravity: 0.62, id: 8 },
    {name: "saturn", gravity:10.44, id:9},
    {name:"Uranus", gravity:8.87 , id:10},
    {name:"Venus", gravity:8.87 , id:11}

]