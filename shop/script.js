let shopping = document.getElementById("shop"); //le shop
let shopbag = document.getElementById("shopping-basket"); //le panier
shopbag.classList.add("none");
shopping.classList.add("block");
let AirForceShop = document.getElementsByClassName("AirForceShop"); //tout les element de l'interface du panier
let JordanBuy = document.getElementsByClassName("JordanBuy"); 
for (i = 0; i < AirForceShop.length; i++){ //permet de passer d'une interface a l'autre
    AirForceShop[i].classList.add("none");
}
for (y = 0; y < JordanBuy.length; y++){
    JordanBuy[y].classList.add("none");
}
var n = localStorage.getItem('AirForce'); // nombre de air force acheté
var r = localStorage.getItem('Jordan'); // pareil mais jordan
let empty = document.getElementById("empty");
empty.classList.add("none");
let Total;
let AirForceBuyPrice;
let JordanPrice;
function AirForceBuy(){
    if (n == null){
        n=0;
    }
    ++n;
    return localStorage.setItem("AirForce",n);
}
function Jordan(){
    if (r == null){
        r=0;
    }
    ++r;
    return localStorage.setItem("Jordan", r);
}
function lostJordanBuy(){//retire element panier
    --r;
    if (r <= 0){
        localStorage.removeItem("Jordan");
        //return window.location.reload(true);
    }
    localStorage.setItem("Jordan", r);
    window.location.reload(true);
}
function lostAirForceBuy(){ //retire element panier
    --n;
    if (n <= 0){
       localStorage.removeItem("AirForce");
       return window.location.reload(true);
    }
    localStorage.setItem("AirForce", n);
    window.location.reload(true);
}
function lostall(){ //retire  tout les elements du panier
    localStorage.removeItem("AirForce");
    localStorage.removeItem("Jordan");
    window.location.reload(true);
}
function priceAirForceBuy(){
    if (n == null || n <= 0){ //pas d'air force acheté
        for (i = 0; i < AirForceShop.length; i++){
            AirForceShop[i].classList.add("none");
        }
        n=0;
        return document.getElementById('priceAirForceBuy').innerHTML = "";
    }
    if (n!= 0 || n != null){ //elles sont achetés affiche leurs nombres et le prix du lot
        AirForceBuyPrice = 250 * n;
        for (i = 0; i < AirForceShop.length; i++){
            AirForceShop[i].classList.remove("none");
        }
        return  document.getElementById('priceAirForceBuy').innerHTML = AirForceBuyPrice + ' euros';
    }
}
function priceJordan(){
    if (r == null || r <= 0){
        for (d = 0; d < JordanBuy.length; d++){
            JordanBuy[d].classList.add("none");
        }
        r=0;
        return document.getElementById('priceJordan').innerHTML = "";
    }
    if (r!= 0 || r != null){
        JordanPrice = 545 * r;
        for (d = 0; d < JordanBuy.length; d++){
            JordanBuy[d].classList.remove("none");
        }
        return  document.getElementById('priceJordan').innerHTML = JordanPrice + ' euros';
    }
}
function CheckIfItem(){
    if (n>0){
        document.getElementById('priceAirForceBuy').innerHTML += AirForceShop;
    }
    if (r>0){
        document.getElementById('priceJordan').innerHTML += shopping;
    }
}
function bag(){ //verifie le panier et affiche le panier de l'acheteur
    if (n == null && r == null || n == 0 && r == 0 || n == 0 && r == null || n == null && r==0){
        
        alert("Panier Vide !");
    }
    shopping.classList.toggle("none");
    shopbag.classList.toggle("none");
    document.getElementById('counterAirForceBuy').innerHTML = n;  
    document.getElementById('counterJordan').innerHTML = r; 
    priceAirForceBuy();//appelle les fonctions pour les achat de chaussures leurs prix et nb
    priceJordan(); 
    if (JordanPrice == null){
        JordanPrice = 0;
    }
    if (AirForceBuyPrice == null){
        AirForceBuyPrice = 0;
    }
    Total = JordanPrice + AirForceBuyPrice;
    document.getElementById('price').innerHTML = "Total des Achats en Cours vaut : " + Total;    
    return true;
}