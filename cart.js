var cartData = JSON.parse(localStorage.getItem("cart"))|| [];
document.querySelector(".navbar2>img").addEventListener("click",function(){
    
    window.location.href="index.html";
})
if(cartData.length>0){


displayOncart(cartData);
function displayOncart(cartData){
    
    cartData.map(function(ele,index){
       var div = document.createElement("div");
       var image = document.createElement("img");
       image.setAttribute("src",ele.imageURL);
       var div1 =document.createElement("div");
       var price = document.createElement("p");
       price.innerText=ele.price;
       var select= document.createElement("select");
       var option1 = document.createElement("option");
       option1.setAttribute("value","");
       option1.innerText="Select Quantity";
       var option2 = document.createElement("option");
       option2.setAttribute("value",1);
       option2.innerText=1;
      
     
       var option3 = document.createElement("option");
       option3.setAttribute("value",2);
       option3.innerText=2;
       var option4 = document.createElement("option");
       option4.setAttribute("value",3);
       option4.innerText=3;
       select.append(option1,option2,option3,option4);
    //    select.addEventListener("change",function(){
           
    //    })
    div1.append(price,select);
    div.append(image,div1);
    document.querySelector(".bag").append(div);

    }) 
}
}
else{
    var image = document.createElement("img");
    image.setAttribute("src","Images Index/sprite2.png");
    image.style.height="100px";
    
    var h1 = document.createElement("h1");
    h1.innerText="Your shopping cart is empty.";
    h1.style.fontSize="24px";
    h1.style.color="#333";
    
    h1.style.marginTop="20px";
    var span1 = document.createElement("span");
    span1.innerText = "Sign in ";
    span1.style.cursor="pointer";
    span1.addEventListener("click",function(){
        window.location.href="login.html";
    })
    span1.style.color="#ff6e26";
    var span2 = document.createElement("span");
    span2.innerText="to view your cart or";
    span2.style.color="#999999";
    span2.style.fontSize="16px";
    var div= document.createElement("div");
    div.append(span1,span2);
    div.style.margin="10px 0";
    var button = document.createElement("button");
    button.innerText="Go shopping";
    button.style.background="none";
    button.style.fontSize="16px";
    button.style.color="#ffffff";
    button.style.fontWeight="700";
    button.style.padding="5px 10px 5px 10px";
    button.style.background="linear-gradient(90deg,#ff6e26,#ff4733)";
    button.style.border="none";
    button.style.borderRadius="10px";
    button.style.cursor="pointer";
    button.addEventListener("click",function(){
        window.location.href="index.html";
    })
    var bag = document.querySelector(".bag");bag.append(image,h1,div,button); 
    bag.style.marginTop="100px";
    bag.style.display="flex";
    bag.style.flexDirection="column";
    bag.style.alignItems="center";
     
}
