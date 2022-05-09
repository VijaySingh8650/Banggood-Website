var imageClick = document.querySelector(".navbar>img");
imageClick.style.cursor="pointer";
imageClick.addEventListener("click",function(){
    window.location.href="index.html";
})
var LogData = JSON.parse(localStorage.getItem("login_data"))|| [];
if(LogData.length===0){
    
    document.querySelector(".hello>span").addEventListener("click",backSeeToLogin);
    document.querySelector(".navbar-img").addEventListener("click",backToHome);
    document.querySelector(".automobile").addEventListener("click",backToHome);
    function backToHome(){
        window.location.href="index.html";
    }
    document.querySelector(".women").addEventListener("click",backWomenToLogin);
    document.querySelector(".jewelry").addEventListener("click",backWomenToLogin);
    document.querySelector(".phone").addEventListener("click",backWomenToLogin);
    function backWomenToLogin(){
        window.location.href="login.html";
    }
    document.querySelector("#btnSign").addEventListener("click",backSignToLogin);
    function backSignToLogin(){
        window.location.href="login.html";
    }
    document.querySelector(".see").addEventListener("click",backSeeToLogin);
    function backSeeToLogin(){
        window.location.href="login.html";
    }
    document.querySelector(".show").addEventListener("click",backShowToLogin);
    
    function backShowToLogin(){
        window.location.href="login.html";
    }
    function addToCart(ele){
        window.location.href="login.html";
    }
    var box = document.querySelectorAll(".box");
    for(i=0;i<box.length;i++){
        box[i].addEventListener("click",backShowToLogin);
    }
}
else{
    //sign in name changed to logged email
    var nameOfPerson = document.querySelector(".hello>span");
    nameOfPerson.innerText=LogData[0].email;
    nameOfPerson.style.cursor="auto";

    //collection to women page
    document.querySelector(".collection_box").addEventListener("click",goToWomenPage);
    function goToWomenPage(){
        window.location.href="women's.html";
    }
    
    //women page, phone page, jewelry page redirected
    document.querySelector(".women").addEventListener("click",goToWomenPage);
    document.querySelector(".jewelry").addEventListener("click",backJewelryPage);
    document.querySelector(".phone").addEventListener("click",backPhonePage);
    function backJewelryPage(){
        window.location.href="jewelry.html";
    }
    function backPhonePage(){
        window.location.href="phone.html";
    }
    document.querySelector(".automobile").addEventListener("click",goToAutomobilePage);
    function goToAutomobilePage(){
        window.location.href="automobile.html";
    }
    var box = document.querySelectorAll(".box");
    for(i=0;i<box.length;i++){
        box[i].addEventListener("click",backPhonePage);
    }
    

    //sign out
    var logOut = document.querySelector("#btnSign");
    logOut.innerText="Sign out" 
    logOut.addEventListener("click",function(){
        window.location.href="login.html";
    })

    //See more to women page
    document.querySelector(".see").addEventListener("click",backSeeToLogin);
    function backSeeToLogin(){
        window.location.href="women's.html";
    }

    //show more to women page
    document.querySelector(".show").addEventListener("click",backSeeToLogin);
    

    //add to cart
    var productToCart=JSON.parse(localStorage.getItem("cart")) || [];
   
    document.querySelector(".number>h1").innerText=productToCart.length;
    function addToCart(ele){
       productToCart.push(ele);
   
       check(productToCart);
       
       localStorage.setItem("cart",JSON.stringify(productToCart));
      
       document.querySelector(".number>h1").innerText=productToCart.length;
       
    }
    
    
}


//anyone can go to cart easily
document.querySelector(".cart").addEventListener("click",function(){
    window.location.href="cart.html";
});

//check to duplicate in cart
function check(productToCart){
    var cartInItem = false;
    for(i=0;i<productToCart.length;i++){
        for(j=i+1;j<productToCart.length;j++){
            if(productToCart[i].imageURL===productToCart[j].imageURL && productToCart[i].price===productToCart[j].price) {
               
                
                productToCart.splice(j,1);
                cartInItem = true;
            }
        }
    }
    if(cartInItem){
        alert("item already added in cart");
    }
    else{
        alert("item added in cart");
    }
   
    
}





//flash deals products
var random = [{imageURL:"https://imgaz.staticbg.com/thumb/grid/oaupload/banggood/images/2C/CE/5805d750-731a-47ea-85f7-52c6cd2fcbf2.jpg.webp",price:13560.57,discount:"49% Off"},{imageURL:"https://imgaz1.staticbg.com/thumb/grid/oaupload/banggood/images/CD/3C/c12b9b51-038a-461d-b1d3-5c89b2ecdd7c.jpg.webp",price:1402.04,discount:"43% Off"},{imageURL:"https://imgaz3.staticbg.com/thumb/grid/oaupload/banggood/images/7E/FA/cd484a9a-8e3e-480d-aae7-24d6b1082daa.jpg.webp",price:2726.92,discount:"49% Off"},{imageURL:"https://imgaz.staticbg.com/thumb/grid/oaupload/banggood/images/01/7D/ca2c0d2a-7174-425c-9bf6-aed2d0338a68.jpg.webp",price:1152.65,discount:"49% Off"},{imageURL:"https://imgaz3.staticbg.com/thumb/grid/oaupload/banggood/images/3E/8E/8d3c66b4-83f5-42dc-863b-5a65830275c5.jpg.webp",price:7013.29,discount:"55% Off"},{imageURL:"https://imgaz2.staticbg.com/thumb/grid/oaupload/banggood/images/4B/C7/51465cf3-35e8-446c-a35a-4f978bd779ad.jpg.webp",price:15508.11,discount:"43% Off"}]
display(random);
function display(random){
    random.map(function(ele){
    var div=document.createElement("div");
    var div1=document.createElement("div");
    
    var image = document.createElement("img");
image.setAttribute("src",ele.imageURL);
image.setAttribute("class","randomImage");
div1.append(image);
var h1 = document.createElement("h1");
h1.innerHTML = "<span>"+"₹ "+"</span>"+ele.price;
h1.style.fontSize="14px"
var discount = document.createElement("p");
discount.innerText = ele.discount;
div.addEventListener("click",function(){
      addToCart(ele);
})
div.append(div1,h1,discount);
document.querySelector(".contain").append(div);
    })
}
var random1 = [{imageURL:"https://imgaz.staticbg.com/thumb/grid/oaupload/banggood/images/4E/DD/c5c42f53-7043-4934-b800-9aadd01e1de5.jpg.webp",price:1713.77,strikedOff:2337.24},{imageURL:"https://imgaz2.staticbg.com/thumb/grid/oaupload/banggood/images/8E/E8/258433b5-cc4e-4edc-81fa-42a12389f17a.jpg.webp",price:1168.23,strikedOff:1557.90},{imageURL:"https://imgaz.staticbg.com/thumb/grid/oaupload/banggood/images/36/08/2d5d599f-84e4-4d1c-af91-6fe4ddac02b6.png.webp",price:14027.37,strikedOff:23379.46},{imageURL:"https://imgaz2.staticbg.com/thumb/grid/oaupload/banggood/images/59/CC/03b7377b-398d-452a-8d08-64771c5f8a29.png.webp",price:2337.04,strikedOff:3895.93},{imageURL:"https://imgaz3.staticbg.com/thumb/grid/oaupload/banggood/images/3E/8E/8d3c66b4-83f5-42dc-863b-5a65830275c5.jpg.webp",price:17924.07,strikedOff:19342.9},{imageURL:"https://imgaz.staticbg.com/thumb/grid/oaupload/banggood/images/62/16/cace8606-6f73-42c4-a51b-e31afe760888.jpg.webp",price:58372.67,strikedOff:66166.08}]
displayData(random1);
function displayData(random1){
    random1.map(function(ele){
    var div=document.createElement("div");
    var div1=document.createElement("div");
    
    var image = document.createElement("img");
image.setAttribute("src",ele.imageURL);
image.setAttribute("class","randomImage");
div1.append(image);
var h1 = document.createElement("h1");
h1.innerHTML = "<span>"+"₹ "+"</span>"+ele.price;
h1.style.fontSize="14px"
var strike = document.createElement("p");
strike.innerHTML = "<span>"+"₹ "+"</span>"+ele.strikedOff;
strike.style.textDecoration="line-through";
div.addEventListener("click",function(){
      addToCart(ele);
})
div.append(div1,h1,strike);
document.querySelector(".contain1").append(div);
    })
}

var random2 = [{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/66/F1/bafa59fb-8b00-42a9-b992-b27a3a9dd655.jpg.webp",price:5064.94,para:"HBX 2188A 1/18 2.4G 4WD RC Car Drift RTR Vehicle Models Full Propotional Control"},{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/2F/1A/17f903df-f084-4163-9680-ded958ba14a7.jpg.webp",price:8928.91,para:"Wltoys 144001 1/14 2.4G 4WD High Speed Racing RC Car Vehicle Models 60km/h"},{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/58/CF/72f73973-140d-4d7b-9630-c305d9926327.jpg.webp",price:7714.70,para:"Wltoys 144001 1/14 2.4G 4WD High Speed Racing RC Car Vehicle Models 60km/h 7.4v 1500mah Two or Three Battery"},{imageURL:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/8C/AE/a0b10f72-f9c6-42b0-aff8-bc0a6f1e4105.jpg.webp",price:14494.90,para:"60V 38.4Ah 2800W Hub Motor Front/Rear Drive Brushless Motor with Vacuum Off-Road Tires for LAOTIE TI30 Electric Scooter"},{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/81/A7/84208453-221d-4259-a0f2-547bca6774a8.jpg.webp",price:8494.04,para:"Wltoys 144001 1/14 2.4G 4WD High Speed Racing RC Car Vehicle Models 60km/h Two Battery 7.4V 2600mAh"},{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/D4/23/d59c1b22-3336-4f9b-88d1-1fc69dcf4a9f.jpg.webp",price:10910.00,para:"Blackview TAB 8 SC9863A Octa Core 4GB RAM 64GB ROM 4G LTE 10.1 Inch Android 10 Tablet"},{imageURL:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/FE/B2/a87be3e2-7f1f-432a-aecd-5de08119c6ba.png.webp",price:17924.07,para:"Monster ATX Gaming Computer Case Desktop Water Cooled Full Side Penetration With Tempered glass Special Case Support M-ATX/ ITX Motherboard for PC Gamer"},{imageURL:"https://imgaz.staticbg.com/thumb/gallery/upload/2012/chenjianwei/SKU119916.21.jpg.webp",price:5727.38,para:"Wltoys A959 RC Car 1/18 2.4G 4WD Vehicles Models Off Road Truck RTR Toy"},{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/35/6D/3b538ac9-5456-45a0-b98d-d87c8c87923b.jpg.webp",price:6467.75,para:"WPL C24 1/16 2.4G 4WD Crawler RTR Truck RC Car Full Proportional Control Two/Three Battery"},{imageURL:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/00/FD/7dfd260d-fdc1-4f54-808f-0695b9ff1b61.jpg.webp",price:4285.60,para:"SF Model 6026 1/12 2.4G 4WD RC Car Off-Road Truck RTR Vehicles Kids Childs Indoor Toys"},{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/EC/EA/a3669019-cc15-450a-881b-200eb2dc26a4.jpg.webp",price:6840.28,para:"SG 1601 2.4G 1/16 Brushless RC Car High Speed 45km/h Vehicle Models"},{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/CA/A2/293e68f5-3a27-4ee3-a166-bf3d0a89c80b.jpg.webp",price:54320.09,para:"Anycubic® Photon Mono X UV Resin SLA 3D Printer 192x120x245mm Printing Area with 4K LCD / APP Remote Control / Matrix UV Light Source / Upgraded Cooling System / Top Cover Detection"},{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/BA/31/da5c2a9a-fb81-4f9a-8f8b-2344b9bc6745.jpg.webp",price:2337.24,para:"71 Keys Plum Blossom Keycap Set OEM Profile PBT Five-sided Sublimation Keycaps for Mechanical Keyboards"},{imageURL:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/23/45/351b39c9-a839-4d6c-9eec-db2dbc325729.jpg.webp",price:12858.35,para:"Lenovo Snapdragon 662 Octa Core 4GB RAM 64GB ROM 11 Inch 2000 x 1200 Android 10 OS Tablet"},{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/6E/7A/c6e0766f-a7d9-4ece-93fa-77dd0de1cca0.jpg.webp",price:6000.15,para:"HBX 16886 1/14 4WD 2.4G RC Car Off Road Desert Truck Brushed Vehicle Models Full Proportional Control"},{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/5B/40/9308cb67-3b4c-4e73-9d68-7783e8c9eb5e.png.webp",price:11767.28,para:"Wltoys 104001 RTR 1/10 2.4G 4WD 45km/h RC Car Metal Chassis Vehicles Model 7.4V 2200mAh Off-Road Climbing Truck"},{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/21/AE/f51e0ff6-377a-4fe8-af69-11315d7a5dff.jpg.webp",price:1557.90,para:"13'x 72' Christmas Table Runner Snowman Snowflake Tablecloth Holiday Party Home for Dining Room"},{imageURL:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/18/F4/3d5b9d83-2ab4-4e1a-a8fb-8dfed6db6597.jpg.webp",price:17920.95,para:"Creality 3D® Ender-3 3D Printer 220x220x250mm Printing Size With Power Resume Function/V-Slot with POM Wheel/1.75mm 0.4mm Nozzle"},{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/A3/9E/9f2f232f-4b95-439c-9955-41a3dbf2c0b8.jpg.webp",price:25640.33,para:"TWO TREES® TOTEM S 40W Laser Engraving Machine Frame Kit Laser Engraver Compressed Spot LD+FAC 5W 5.5W Fast High Precision Printer Laser Cutter For Metal Wood Stainless Steel"},{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/BF/AB/4294c21a-ce09-476f-b2e7-acbc4dcffbba.jpg.webp",price:4667.48,para:"Xinlehong 9136 1/16 2.4G 4WD 32cm Spirit Rc Car 36km/h Bigfoot Off-road Truck RTR Toy"},{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/31/AB/526a495d-cdcc-4602-88a3-9d3796a5260a.jpg.webp",price:1168.23,para:"MUSTOOL MT007/MT007 Pro/MT007 Pro-EN True RMS Digital Multimeter + Voltage  Test Pen +Phase Sequences Meter  3 In 1 Color Screen Voice Broadcast"},{imageURL:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/23/02/9b85d760-1725-4221-9d13-7b0f51de4bfc.jpg.webp",price:1713.33,para:"Stitching Design Holiday Solid Sleeveless Maxi Dresses"},{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/31/AB/526a495d-cdcc-4602-88a3-9d3796a5260a.jpg.webp",price:1168.23,para:"MUSTOOL MT007/MT007 Pro/MT007 Pro-EN True RMS Digital Multimeter + Voltage  Test Pen +Phase Sequences Meter  3 In 1 Color Screen Voice Broadcast"},{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/A3/F5/da84a7e4-189a-4d15-9d5f-1dce8c9fa471.jpg.webp",price:6623.62,para:"Wltoys A979 1/18 2.4G 4WD Off-Road Truck RC Car Vehicles RTR Model"}]
displayD(random2);
function displayD(random2){
    random2.map(function(ele){
    var div=document.createElement("div");
    var div1=document.createElement("div");
    
    var image = document.createElement("img");
image.setAttribute("src",ele.imageURL);
;
div1.append(image);
var h1 = document.createElement("h1");
h1.innerHTML = "<span>"+"₹ "+"</span>"+ele.price;
h1.style.fontSize="14px"
var para = document.createElement("p");
para.innerHTML = ele.para;
para.setAttribute("title",ele.para);

div.addEventListener("click",function(){
      addToCart(ele);
})
div.append(div1,h1,para);
document.querySelector(".contain2").append(div);
    })
}

//reach to the social sites
//facebook
document.querySelector(".social>div:nth-child(1)").addEventListener("click",function(){
    window.location.href="https://www.facebook.com/BanggoodIndia/";
})
//instagram
document.querySelector(".social>div:nth-child(2)").addEventListener("click",function(){
    window.location.href="https://www.instagram.com/banggood/?last_spm=1a985.Homepage.000144142.0001255229.7a933c3c765f4bbeacf62996aece2ad3";
})
//youtube
document.querySelector(".social>div:nth-child(3)").addEventListener("click",function(){
    window.location.href="https://www.youtube.com/user/BanggoodTV?last_spm=1a985.Homepage.000144142.0001255230.7a933c3c765f4bbeacf62996aece2ad3";
})
//twitter
document.querySelector(".social>div:nth-child(4)").addEventListener("click",function(){
    window.location.href="https://twitter.com/Banggood?last_spm=1a985.Homepage.000144142.0001255231.7a933c3c765f4bbeacf62996aece2ad3";
})