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
        display(data.weather[0].description ,data.main.temp); //appelle la fonction pour afficher les données
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
function display (finalWheather,Temp){
    Temp= Math.round(Temp - 273.15)
    //console.log(finalWheather,);
    let displayTemp=Temp +"°";
    let displayWheather=finalWheather;
    document.getElementById("Temp").innerHTML=displayTemp;
    document.getElementById("finalWheather").innerHTML=displayWheather;

}
