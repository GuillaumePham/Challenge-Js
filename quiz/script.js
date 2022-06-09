var count =0;
function valider() { //verifie les bonnes réponses un point en plus si juste un point en moins si faux
    if (document.getElementById("Q1").checked && document.getElementById("Q2").checked && !document.getElementById("Q3").checked) {
        count++;
    } else { 
        count--;
        }
    if(document.getElementById("Q4").checked){
        count++;
    } else{
        count--;  
    }
    if(document.getElementById("Q5").checked){
        count ++;
    } else{
        count--;
    }
    if(document.getElementById("Q6").checked){
        count ++;
    } else{
        count--;
    }
    if(document.getElementById("Q9").checked && document.getElementById("Q10").checked){
        count ++;
    } else{
        count--;
    }
    if (count < 3){
        alert("Vous avez" + " "+ count+" " +"passable !!!")
    }else{
        alert("Vous avez" + " "+ count+" " +"points c'est bien !!!") 
    }
    count =0;
    }