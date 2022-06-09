const key = "42f91f35de918af0baacb8a480b60482"; // cle unique
let button = document.getElementById("button"); // bouton du formulaire
button.addEventListener("click", function(e) {
    e.preventDefault();
    ask();
    
});
function fetchApi(lat,lon) { //fetch avec l'utilisation de l'api la météo n'est obtenable que par la longitude et latitude
    fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+key+"&lang=FR") //requetes a l'api via fetch
    .then(response => response.json()) //recup de donné brut
    .then(data => {
        display(data.weather[0].description ,data.main.temp,data.weather[0].icon); //appelle la fonction pour afficher les données
    })
    .catch(error=>{
        console.log("erreur : "+ error);
    })
    ;
}
function ask (){ // convertit la ville demandé en latitude et longitude
    let country = document.getElementById("ville").value;
    fetch("https://api.openweathermap.org/geo/1.0/direct?q="+ country +"&limit=5&appid="+key) //requetes a l'api pour obtenir la météol+
    .then(response => response.json())
    .then(data => {
        fetchApi(data[0].lat,data[0].lon);
    })
    .catch(error=>{
        console.log("erreur la ville n'existe pas : "+ error);
    })
    ;
}
function display (finalWheather,Temp,icon){ //affiche le temps et change le fond et l'icone du temps en fonction des data de l'api
    Temp= Math.round(Temp - 273.15)
    //console.log(finalWheather,);
    let displayTemp=Temp +"°";
    let displayWheather=finalWheather;
    if ( icon == "01d" || icon == "01n"){ //en fonction de l'icone le temps est verifié
        document.body.style.backgroundImage = "url(img/sun.jpg)"; //background
        document.getElementById("Temp").style.color= "white"; //temperature couleur
        document.getElementById("finalWheather").style.color= "white"; //temps couleur
        document.getElementById('icon').innerHTML = '<img src="img/01d.png" />';
    }
    if (icon == "02d" || icon == "02n" ){ //peux nuageux
        document.body.style.backgroundImage = "url(img/tiny-cloud.jpg)";
        document.getElementById("Temp").style.color= "white";
        document.getElementById('icon').innerHTML = '<img src="img/02n.png" />';
        document.getElementById("finalWheather").style.color= "white";
    }
    if (icon == "03n" || icon == "03d" || icon =="04d" || icon == "04n"){ // nuageux
        document.getElementById('icon').innerHTML = '<img src="img/04d.png" />';
        document.body.style.backgroundImage = "url(img/overcast.jpg)";
        document.getElementById("Temp").style.color= "black";
        document.getElementById("finalWheather").style.color= "black";
    }
    if (icon == "09n" || icon == "09d" || icon == "10n"|| icon == "10d" || icon== "50d" ||icon == "50n" ){ //pluie et brouillard
        document.body.style.backgroundImage = "url(img/rain.jpg)";
        document.getElementById("Temp").style.color= "black";
        document.getElementById("finalWheather").style.color= "black";
        document.getElementById('icon').innerHTML = '<img src="img/10d.png" />';
    }
    if (icon == "11n" || icon == "11d"){ //orage
        document.body.style.backgroundImage = "url(img/thunder.jpg)";
        document.getElementById("Temp").style.color= "black";
        document.getElementById("finalWheather").style.color= "black";
        document.getElementById('icon').innerHTML = '<img src="img/11d.png" />';
    }
    if (icon == "13n" || icon == "13d"){ //neige
        document.body.style.backgroundImage = "url(img/snow.jpg)";
        document.getElementById("Temp").style.color= "black";
        document.getElementById("finalWheather").style.color= "black";
        document.getElementById('icon').innerHTML = '<img src="img/13d.png" />';
    }
    document.getElementById("Temp").innerHTML=displayTemp;
    document.getElementById("finalWheather").innerHTML=displayWheather;
    
}
