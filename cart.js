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
  
 

displayOncart(cartData);
function displayOncart(cartData){
    document.querySelector(".bag").innerHTML="";
    cartData.map(function(ele,index){
       var div = document.createElement("div");
       var image = document.createElement("img");
       image.style.height="150px";
       image.style.display="block";
       image.style.margin="auto";
       image.setAttribute("src",ele.imageURL);
       var div1 =document.createElement("div");
       var price = document.createElement("p");
       price.innerText="₹ "+ele.price;
       
       price.style.fontSize="14px";
       price.style.color="#333";
       price.style.fontWeight="700";
       var select= document.createElement("select");
      
       
       var option2 = document.createElement("option");
       option2.setAttribute("value",1);
       option2.innerText=1;
      
       select.style.width="40px";
       
       
       var option3 = document.createElement("option");
       option3.setAttribute("value",2);
       option3.innerText=2;
       select.append(option2,option3);
       select.addEventListener("change",function(){
        var selected = select.value;
        price.innerText="₹ "+(ele.price*selected);
        
       })
    div1.append(price,select);
    div1.style.margin="10px 0";
    div1.style.display="flex";
    div1.style.justifyContent="space-between";
    var btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.style.background="none";
    btn.style.border="none";
    btn.style.color="white";
    btn.style.padding="5px 10px 5px 10px";
    btn.style.borderRadius="2px";
    btn.style.fontSize="12px";
    btn.style.cursor="pointer";
    btn.style.background="#ff4733";
    btn.addEventListener("click",function(){
        del(ele,index);
    })
    div.append(image,div1,btn);
    div.style.margin="20px 10px 20px 10px";
    div.style.background="#ebedf0";
    div.style.padding="10px 10px 10px 10px";
    var bag = document.querySelector(".bag");
    bag.append(div);
    bag.style.width="100%";
    bag.style.display="grid";
    bag.style.gridTemplateColumns="repeat(6, 1fr)";
    bag.style.gap="10px";
    bag.style.background="white";
    bag.style.marginTop="50px";
    }) 
    
}
function del(ele,index){
    cartData.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cartData));
   
    displayOncart(cartData);
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

