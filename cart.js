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
//   var sum=0;
    var arrayOfCardToPay = [];
displayOncart(cartData);
function displayOncart(cartData){
    document.querySelector(".bag").innerHTML="";
   
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

       arrayOfCardToPay.push(ele.price);
       
       
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
       var option4 = document.createElement("option");
       option4.setAttribute("value",3);
       option4.innerText="Qty:"+3;
       var option5 = document.createElement("option");
       option5.setAttribute("value",4);
       option5.innerText="Qty:"+4;
       select.append(option2,option3,option4);
     
       select.addEventListener("change",function(){
           var selected = select.value;
           price.innerHTML=" ₹ "+ele.price*selected;
           addToArray(ele,index,selected);
       })
       function  addToArray(ele,index,selected){
           if(selected==="2"){
              arrayOfCardToPay.splice(index,1,ele.price*2);
              
            //   console.log(arrayOfCardToPay);
           }
           if(selected==="1"){
            arrayOfCardToPay.splice(index,1,ele.price*1);
            // console.log(arrayOfCardToPay);
           }
           if(selected==="3"){
            arrayOfCardToPay.splice(index,1,ele.price*3);
            // console.log(arrayOfCardToPay);
           }
           
           callToArray(arrayOfCardToPay);
       }
  
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
    btn.style.background="#ff6e26";
    btn.addEventListener("click",function(){
        del(ele,index,arrayOfCardToPay);
        
    })
    div.append(image,div1,btn);
    div.setAttribute("class","divHover");
    div.style.margin="10px 10px 10px 10px";
    div.style.display="flex";
    div.style.background="#ebedf0";
    div.style.padding="10px 10px 10px 10px";
    div.style.borderRadius="5px";
    var bag = document.querySelector(".bag");
    bag.append(div);
    
    
    bag.style.width="40%";
    bag.style.marginLeft="200px";
    bag.style.display="grid";
    bag.style.gridTemplateColumns="repeat(1, 1fr)";
    bag.style.gap="10px";
    bag.style.background="white";
    bag.style.marginTop="50px";
   
}) 

}
document.querySelector(".container1").style.display="flex";
var div = document.createElement("div");
var total= document.querySelector(".total");
// total.style.marginLeft="50px";
total.style.background="#ffffff";
total.style.border="1px solid #424553";
total.style.width="20%";
total.style.height="auto";
total.style.position="fixed";
total.style.right="120px";
total.style.top="120px";

// total.style.marginRight="50px";
total.style.padding="10px 10px 10px 10px";

var coupon = document.createElement("p");
coupon.innerText="COUPONS";
coupon.style.color="#535766";
coupon.style.fontSize="14px";
coupon.style.fontWeight="600";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("placeholder","Have a coupon?");
input.style.color="#333";
input.style.outline="none";
input.style.height="20px";
input.style.paddingLeft="10px";

div.style.margin="5px 0 10px 0";
div.style.display="flex";
div.style.alignItems="center";
div.style.justifyContent="space-between";
var submit=document.createElement("button");
submit.innerText="Apply";
submit.style.background="none";
submit.style.padding="4px";
submit.style.color="#ff6e26";
submit.style.fontSize="14px";
submit.style.fontWeight="600";
submit.style.border="1px solid #ff6e26"
submit.style.cursor="pointer";

div.append(input,submit);
var priceDetails = document.createElement("p");
priceDetails.innerText="PRICE DETAILS "+"("+cartData.length+" items)";
priceDetails.style.color="#535766";
priceDetails.style.fontSize="14px";
priceDetails.style.fontWeight="600";
priceDetails.style.marginTop="50px";
var couponDiscount = document.createElement("p");
var couponDiscountAmount = document.createElement("p");
couponDiscount.innerText = "Coupon Discount";
couponDiscount.style.color="#282c3f";
couponDiscount.style.fontSize="14px";
couponDiscount.style.fontWeight="500";
couponDiscountAmount.innerText=0;
couponDiscountAmount.style.color="#282c3f";
couponDiscountAmount.style.fontSize="14px";
couponDiscountAmount.style.fontWeight="500";
var divCoupon = document.createElement("div");
divCoupon.append(couponDiscount,couponDiscountAmount);
divCoupon.style.display="flex";
divCoupon.style.display="flex";
divCoupon.style.margin="10px 0";
divCoupon.style.justifyContent="space-between";
submit.addEventListener("click",function(){
    if(input.value==="grab10" && Number(h2.innerText)>3000){
        alert("Congrats! You have got 10% OFF");
        couponDiscountAmount.innerText="₹ "+Number(h2.innerText)*10/100;
        
        submit.disabled=true;
            input.disabled=true;
       
        totalAmount.innerText="₹ "+(Number(h2.innerText)-(Number(h2.innerText)*10/100));
    }
    if(input.value!=="grab10" && Number(h2.innerText)>3000){
        alert("You have put wrong coupon, it is 'grab10'");
    }
    if(Number(h2.innerText)<=3000){
        alert("You must have amount more than ₹ 3000");
    }
});


var h1 = document.createElement("h1");
var h2 = document.createElement("h1");
var amountTotal=document.createElement("h1");
amountTotal.innerText="Total MRP";
amountTotal.style.color="#282c3f";
amountTotal.style.fontSize="14px";
amountTotal.style.fontWeight="500";
var divTotal = document.createElement("div");
divTotal.append(amountTotal,h1);
divTotal.style.display="flex";
divTotal.style.margin="10px 0";
divTotal.style.justifyContent="space-between";
var hr = document.createElement("hr");
var totalAmount = document.createElement("h1");
totalAmount.style.color="#535766";
totalAmount.style.fontSize="14px";
totalAmount.style.fontWeight="600";
var totalAmountDis = document.createElement("h1");
totalAmountDis.innerText="Total Amount"
totalAmountDis.style.color="#535766";
totalAmountDis.style.fontSize="14px";
totalAmountDis.style.fontWeight="600";

var divTotalAmount=document.createElement("div");
divTotalAmount.append(totalAmountDis,totalAmount);
divTotalAmount.style.display="flex";
divTotalAmount.style.margin="10px 0";
divTotalAmount.style.justifyContent="space-between";

//calling the function at starting
callToArray(arrayOfCardToPay);


//button to reach to place order
var btn = document.createElement("button");
btn.innerText = "Place Order";
btn.style.display="block";
btn.style.margin="auto";
btn.style.width="100%";
btn.style.padding="5px 0";
btn.style.background="#ff6e26";
btn.style.border="none";
btn.style.borderRadius="5px";
btn.style.color="#ffffff";
btn.style.cursor="pointer";
btn.addEventListener("click",function(){
    window.location.href="payment.html";
})
//appending all the elements
document.querySelector(".total").append(coupon,div,priceDetails,divTotal,divCoupon,hr,divTotalAmount,btn); 


function del(ele,index,arrayOfCardToPay){
    cartData.splice(index,1);
    // sum = sum-ele.price;
       arrayOfCardToPay.splice(index,1); 
        location.reload(); 
       
        callToArray(arrayOfCardToPay);

    localStorage.setItem("cart",JSON.stringify(cartData));
    
   
    displayOncart(cartData);
    if(cartData.length===0){
      location.reload();
    }
}
// console.log(arrayOfCardToPay);


function callToArray(arrayOfCardToPay){
    var sum=0;
    for(i=0;i<arrayOfCardToPay.length;i++){
        sum=sum+arrayOfCardToPay[i];
    }
    sum= Math.round(sum)
    // console.log(sum);
    h1.innerHTML="<span>₹</span>"+" "+sum;
    h2.innerText=sum;
    h1.style.color="#282c3f";
    h1.style.fontSize="14px";
    h1.style.fontWeight="500";
    totalAmount.innerText=h1.innerText;
    if(sum<=3000){
       couponDiscountAmount.innerText=0;
    }
    if(Number(h2.innerText)>3000){
        submit.disabled=false;
        input.disabled=false;
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

