let img1 = document.getElementsByClassName("img"); //recupere les images
let button = document.getElementsByClassName("inline"); // les boutons
let count = 0;
    function lambda(){ // change la couleur du bouton cliqué et l'image affiché par le carrousel
        for (let i = 0; i< img1.length; i++){
            img1[i].classList.add("none");
            button[i].classList.add("white");
        }
        button[count].classList.remove("white");
        img1[count].classList.remove("none");
    }
    function left(){ //bouton gauche gére le defilement de l'image si ce bouton est cliqué
        count--;
        if (count<0){ //chaque image a une nombre pour savoir ou en est
            count =9;
        }
        if (7){
            if (count <10){
                lambda();
            }
        }
    }
    function right(){ //droit 
        count++;
        if (count > 9){
            count=0;
        }
            if (5){
                if (count <10){
                    lambda();
                }
            }
    }
    function take(){ // 1er boule noir
        count = 0;   
        lambda();  
    }
    function take1(){ // 2 puis trois et ainsi de suite
        count = 1;   
        lambda();  
    }
    function take2(){
        count = 2;   
        lambda();  
    }
    function take3(){
        count = 3;   
        lambda();  
    }
    function take4(){
        count = 4;   
        lambda();  
    }
    function take5(){
        count = 5;   
        lambda();  
    }
    function take6(){
        count = 6;   
        lambda();  
    }
    function take7(){
        count = 7;   
        lambda();  
    }
    function take8(){
        count = 8;   
        lambda();  
    }
    function take9(){
        count = 9;   
        lambda();  
    }