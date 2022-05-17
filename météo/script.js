const key = "42f91f35de918af0baacb8a480b60482";
let button = document.getElementById("button");
button.addEventListener("click", function(e) {
    e.preventDefault();
    //let input = document.getElementById("search");
    let enWeather = ask();
    //document.getElementById("result").innerHTML(weather);
});

function fetchApi(lat,lon) {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+key+"&lang=FR")
    .then(response => response.json())
    .then(data => {
        getFrenchWeather(data.weather[0].description);
    })
    .catch(error=>{
        console.log("erreur : "+ error);
    })
    ;
}

function getFrenchWeather(wheather) {
    let frenchReturn = "";
    if(wheather === "clear sky") {
        frenchReturn = "Ciel clair";
    }
    
    return frenchReturn;

}
function ask (){
    let country = document.getElementById("ville").value;
    fetch("https://api.openweathermap.org/geo/1.0/direct?q="+ country +"&limit=5&appid="+key)
    .then(response => response.json())
    .then(data => {
        fetchApi(data[0].lat,data[0].lon);
    })
    .catch(error=>{
        console.log("erreur la ville n'existe pas : "+ error);
    })
    ;


    
}