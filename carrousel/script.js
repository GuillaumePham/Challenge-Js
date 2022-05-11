let img1 = document.getElementsByClassName("img");
let button = document.getElementsByClassName("inline");
let count = 0;
    function lambda(){
        for (let i = 0; i< img1.length; i++){
            img1[i].classList.add("none");
            button[i].classList.add("white");
        }
        button[count].classList.remove("white");
        img1[count].classList.remove("none");
    }
    function left(){
        count--;
        if (count<0){
            count =9;
        }
        if (7){
            if (count <10){
                lambda();
            }
        }
    }
    function right(){
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
    function take(){
        count = 0;   
        lambda();  
    }
    function take1(){
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