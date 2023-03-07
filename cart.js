var cartNb = 0;
var cartPrice = 0;
var DietINCart = false;
var planINCart = false;
var CookINCart = false;
var DietPrice = 100;
var CookPrice = 199;
var PlanPrice = 140;


//localStorage.setItem("save_2", cartPrice)=0;
//localStorage.setItem("save", cartNb)=0;
//localStorage.setItem("save_3", DietINCart)=false;
//localStorage.setItem("save_4", planINCart)=false;
//localStorage.setItem("save_5", CookINCart)=false;
//window.alert(DietINCart);
//window.alert(planINCart);
//window.alert(CookINCart);
//window.alert(cartNb);
//window.alert(cartPrice);
//window.alert(localStorage.getItem("save_3"));
//window.alert(localStorage.getItem("save_2"));
//window.alert(localStorage.getItem("save"));

/*window.onload = function(){
    DietINCart = localStorage.getItem("save_3");
    planINCart = localStorage.getItem("save_4");
    CookINCart = localStorage.getItem("save_5");
    cartPrice = localStorage.getItem("save_2");
    cartNb = localStorage.getItem("save");
    document.getElementById("Price").innerHTML = cartPrice;
    document.getElementById("item").innerHTML = cartNb;

    
}*/
function AddDiet() {  //add diet book to cart
    if (DietINCart == false){
        cartNb++;
        //localStorage.setItem("save", cartNb)
        cartPrice += 100;
        //localStorage.setItem("save_2", cartPrice);
        document.getElementById("item").innerHTML = cartNb;
        window.alert("Iteam Added to cart");
        DietINCart = true;
        //localStorage.setItem("save_3", DietINCart);
        document.getElementById("Price").innerHTML = cartPrice;
        document.getElementById("cartD").style.opacity  = "1";
        document.getElementById("cartD_price").innerHTML= DietPrice;

    }
    else{window.alert("Iteam already in cart");}
}
function AddCook() {   //add cook book to cart
    if (CookINCart ==false){
        cartNb ++;
        //localStorage.setItem("save", cartNb)
        cartPrice += 199;
        //localStorage.setItem("save_2", cartPrice);
        document.getElementById("item").innerHTML = cartNb;
        window.alert("Iteam Added to cart");
        CookINCart = true;
        //localStorage.setItem("save_5", CookINCart);
        document.getElementById("Price").innerHTML = cartPrice;
        document.getElementById("cartC").style.opacity  = "1";
        document.getElementById("cartC_price").innerHTML= CookPrice;
    }
    else{window.alert("Iteam already in cart");}
}
function AddPlan() {   //add training book to cart
    if (planINCart == false){
        cartNb ++;
        //localStorage.setItem("save", cartNb)
        cartPrice += 140;
        //localStorage.setItem("save_2", cartPrice);
        document.getElementById("item").innerHTML = cartNb;
        window.alert("Iteam Added to cart");
        planINCart = true;
        //localStorage.setItem("save_4", planINCart);
        document.getElementById("Price").innerHTML = cartPrice;
        document.getElementById("cartW").style.opacity  = "1";
        document.getElementById("cartW_price").innerHTML= PlanPrice;
    }
    else{window.alert("Iteam already in cart");}
}

function Remove_w(){    //for removing training book from cart
    if(planINCart == true){
        
        document.getElementById("cartW_price").innerHTML= 0.00;
        document.getElementById("cartW").style.opacity  = "0.1";
        cartNb --;
        //localStorage.setItem("save", cartNb);

        cartPrice -= 140;
        //localStorage.setItem("save_2", cartPrice);
        document.getElementById("item").innerHTML = cartNb;
        window.alert("Iteam Removed from cart");
        planINCart = false;
        //localStorage.setItem("save_4", planINCart);
        document.getElementById("Price").innerHTML = cartPrice;
    }
}
function Remove_C(){   //for removing cook book from cart
    if(CookINCart == true){

        document.getElementById("cartC_price").innerHTML= 0.00;
        document.getElementById("cartC").style.opacity  = "0.1";
        cartNb --;
        //localStorage.setItem("save", cartNb);

        cartPrice -= 199;
        //localStorage.setItem("save_2", cartPrice);
        document.getElementById("item").innerHTML = cartNb;
        window.alert("Iteam Removed from cart");
        CookINCart = false;
        //localStorage.setItem("save_5", CookINCart);
        document.getElementById("Price").innerHTML = cartPrice;
    }
}
function Remove_D(){   //for removing diet book from cart
    if(DietINCart == true){

        document.getElementById("cartD_price").innerHTML= 0.00;
        document.getElementById("cartD").style.opacity  = "0.1";
        cartNb --;
        //localStorage.setItem("save", cartNb);

        cartPrice -= 100;
        //localStorage.setItem("save_2", cartPrice);
        document.getElementById("item").innerHTML = cartNb;
        window.alert("Iteam Removed from cart");

        DietINCart = false;
        //localStorage.setItem("save_3", DietINCart);
        document.getElementById("Price").innerHTML = cartPrice;
    }
}



function Close(){
    document.getElementById("myModal").style.display  = "none";  //close the char by changing css
}
function OpenCart(){
    document.getElementById("myModal").style.display = "block";  //open the char by changing css
}




