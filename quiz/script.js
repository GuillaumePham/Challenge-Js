var count =0; //score quiz a point negatif
function valider() { //verifie les bonnes réponses un point en plus si juste un point en moins si faux
    if (document.getElementById("Q1").checked && document.getElementById("Q2").checked && !document.getElementById("Q3").checked) {
        count++;
    } else { 
        count--;
        }
    if(document.getElementById("Q4").checked){ //question deux
        count++;
    } else{
        count--;  
    }
    if(document.getElementById("Q5").checked){ //question 3
        count ++;
    } else{
        count--;
    }
    if(document.getElementById("Q6").checked && !document.getElementById("Q7").checked && !document.getElementById("Q8").checked){ //question 4
        count ++;
    } else{
        count--;
    }
    if(document.getElementById("Q9").checked && document.getElementById("Q10").checked && !document.getElementById("Q11").checked){ //question 5
        count ++;
    } else{
        count--;
    }
    if (count < 3){ // score final affiche le resultat et un commentaire dans une fenetre pop up
        alert("Vous avez" + " "+ count+" " +"passable !!!")
    }else{
        alert("Vous avez" + " "+ count+" " +"points c'est bien !!!") 
    }
    count =0; //score rénitialiser
    }