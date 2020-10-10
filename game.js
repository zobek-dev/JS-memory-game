let clickedCard=null;
let match=0;

function selectCard(e){
    card=e.target;
    color=card.getAttribute("color-card");
    //console.log(color);
    card.setAttribute("class", `card ${color}`);
    //Si no se ha hecho click 
    if(!clickedCard){
        clickedCard=card;

    }else if(clickedCard){
        //caso que se seleccione la misma tarjeta dos veces
        if(card==clickedCard){  
            //console.log("Es la misma tarjeta");
            setInterval(()=>{
                card.className += "color-hidden";
            },1000);
            clickedCard=null;
            return;
        //el caso que seleccione tarjetas pareadas    
        }else if(clickedCard.getAttribute("color-card")==card.getAttribute("color-card") && card!=clickedCard){
            console.log("match");
            card.setAttribute("onclick","");
            clickedCard.setAttribute("onclick","");
            card.setAttribute("class", `card ${color} match`)
            clickedCard.setAttribute("class", `card ${clickedCard.getAttribute("color-card")} match`);
            clickedCard=null;
            match++;
            console.log(clickedCard);
            if(match==8){
                alert("GANASTE!!");
            }

        }else if(clickedCard.getAttribute("color-card")!==card.getAttribute("color-card")){
            let temp=clickedCard;
            //console.log("no match");
            //Hice dos setInterval para ocultar el color y que se hagan al mismo tiempo pero solo resulta una vez bien
            //pero despues de la segunda funciona extraño.
            setInterval(()=>{
                card.className += "color-hidden";
            },500);
            setInterval(()=>{
                temp.className += "color-hidden";
            },500);
            clickedCard=null;
            console.log(clickedCard);  
        }
    }    
}