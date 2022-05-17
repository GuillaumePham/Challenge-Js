
const fetch = require("node-fetch");
const apikey="106632d15bffa83b0512b461a6fc5ae3"
let city = "london"
let coutry ="uk"

function wheather (city){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city +',uk&APPID='+apikey).then(Response =>{
        return Response.json()
    })

}

console.log(wheather(city));