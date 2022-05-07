var cartData = JSON.parse(localStorage.getItem("cart"))|| [];

var Email = JSON.parse(localStorage.getItem("login_data"));

document.querySelector(".navbar2>img").addEventListener("click",function(){
    
    window.location.href="index.html";
})
if(Email.length>0){
    
    document.querySelector(".navbar1>img+p").innerText="Hello, "+Email[0].email;
    var sign = document.querySelector(".signOut");
    sign.innerText="Sign Out";
    sign.style.marginLeft="10px";
    sign.style.cursor="pointer";
    sign.addEventListener("click",function(){
        window.location.href="login.html";
    })

}

if(cartData.length>0){
 var array = [];
var sum = 0;
displayOncart(cartData);
function displayOncart(cartData){
    document.querySelector(".bag").innerHTML="";
    // var arrayOfCardToPay = [];
    cartData.map(function(ele,index){
       var div = document.createElement("div");
       var image = document.createElement("img");
       image.style.height="140px";
       image.style.display="block";
       image.style.margin="auto";
       image.setAttribute("src",ele.imageURL);
       var div1 =document.createElement("div");
       var price = document.createElement("p");
       price.innerText=" ₹ "+ele.price;
     
       var total = document.createElement("p");
       sum = sum+ele.price;
       
       
    //    var quantity = document.createElement("p");
    //     quantity.innerText=0;
    //     total.innerText="Total:- "+0;
       
       price.style.fontSize="14px";
       price.style.width="200px";
       price.style.color="#333";
       price.style.fontWeight="700";
       var select= document.createElement("select");
      
       var option1 = document.createElement("option");
       option1.setAttribute("value",0);
       option1.innerText="Qty:";


       var option2 = document.createElement("option");
       option2.setAttribute("value",1);
       option2.innerText="Qty:"+1;
      
       select.style.width="60px";
       select.style.marginLeft="30px";
    
       select.style.outline="none";
       select.style.border="3px solid white";
       
       
       var option3 = document.createElement("option");
       option3.setAttribute("value",2);
       option3.innerText="Qty:"+2;
       select.append(option2,option3);
     
       select.addEventListener("change",function(){
              var selected = select.value;
           price.innerText=" ₹ "+ele.price*selected;
          if(selected===2){
            sum = sum+ele.price;
            total.innerText=Math.round(sum);
            console.log(total.innerText);
         }
              
        })
  
    div1.append(price,select);
    div1.style.width="200px";
    div1.style.margin="10px 0";
    div1.style.display="flex";
    div1.style.justifyContent="space-between";
    div1.style.alignItems="center";
    var btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.style.background="none";
    btn.style.height="30px";
    btn.style.border="none";
    btn.style.color="white";
    btn.style.padding="5px 10px 5px 10px";
    btn.style.borderRadius="5px";
    btn.style.fontSize="12px";
    btn.style.cursor="pointer";
    btn.style.background="#ff4733";
    btn.addEventListener("click",function(){
        del(ele,index);
    })
    div.append(image,div1,btn);
    div.style.margin="10px 10px 10px 10px";
    div.style.display="flex";
    div.style.background="#ebedf0";
    div.style.padding="10px 10px 10px 10px";
    div.style.borderRadius="5px";
    var bag = document.querySelector(".bag");
    bag.append(div);
    
    total.innerText=Math.round(sum);
    console.log(Math.round(sum));  
    //new array of objects
    // var obj={
    //     image:ele.imageURL,
    //     price:x,
        

    // }
    // arrayOfCardToPay.push(obj);
    // localStorage.setItem("cartToPay",JSON.stringify(arrayOfCardToPay));
    bag.style.width="40%";
    bag.style.marginLeft="50px";
    bag.style.display="grid";
    bag.style.gridTemplateColumns="repeat(1, 1fr)";
    bag.style.gap="10px";
    bag.style.background="white";
    bag.style.marginTop="50px";
   
    }) 
  
    
    // document.querySelector(".total").append(h1); 
}
function del(ele,index){
    cartData.splice(index,1);
    sum = sum-ele.price;
          
    
    localStorage.setItem("cart",JSON.stringify(cartData));
    
   
    displayOncart(cartData);
    if(cartData.length===0){
      location.reload();
    }
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
    
   
  
    
    
    var button = document.createElement("button");
    button.innerText="Go shopping";
    button.style.background="none";
    button.style.fontSize="16px";
    button.style.color="#ffffff";
    button.style.fontWeight="700";
    button.style.padding="5px 10px 5px 10px";
    button.style.background="linear-gradient(90deg,#ff6e26,#ff4733)";
    button.style.border="none";
    button.style.margin="10px 0";
    button.style.borderRadius="10px";
    button.style.cursor="pointer";
    button.addEventListener("click",function(){
        window.location.href="index.html";
    })
    var bag = document.querySelector(".bag");bag.append(image,h1,button); 
    bag.style.marginTop="100px";
    bag.style.display="flex";
    bag.style.flexDirection="column";
    bag.style.alignItems="center";
     
}

