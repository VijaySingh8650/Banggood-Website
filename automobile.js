var LogData = JSON.parse(localStorage.getItem("login_data"));
var nameOfPerson = document.querySelector(".hello>span");
    nameOfPerson.innerText=LogData[0].email;
    nameOfPerson.style.cursor="auto";
var productData=[{img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/09/E1/740964fd-63f1-4a46-a62f-c6b29aa8333b.jpg.webp",
                    price:"18,703.41",
                    strikeprice:"₹18,703.41",
                    off:" ",
                    para:"LED Headlight Headlamp For BMW",
                    reviews:"6 Reviews",id:"automobile"+1

                },
                {img:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/56/A7/f43fad5b-9ac2-4554-82b5-73d0b4c2a664.jpg.webp",
                    price:"5,844.28",
                    strikeprice:"₹12,936.29",
                    off:"55% Off",
                    para:"iMars 7 Inch 2 Din for Android 8.0",
                    reviews:"4256 Reviews",id:"automobile"+2

                },
                {img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/52/CE/33b86c56-5f32-4284-a157-69c19f9367a5.jpg.webp",
                    price:"10,910.00",
                    strikeprice:"₹13,248.02",
                    off:"18% Off",
                    para:"K-808APR 12V 600W 8 Inch Car High",
                    reviews:"17 Reviews",id:"automobile"+3

                },
                {img:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/CA/06/2d46daf6-2481-4691-9246-fda137c6c89b.JPG.webp",
                    price:"2,415.18",
                    strikeprice:"₹4,207.66",
                    off:"43% Off",
                    para:"Front Fog Light Lamp Cover Grille",
                    reviews:"7 Reviews",id:"automobile"+4

                },
                {img:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/52/01/5a8271c9-fb0b-4906-b1db-8a7b900f8ffb.jpg.webp",
                    price:"1,479.97",
                    strikeprice:"₹2,025.51",
                    off:"27% Off",
                    para:"NovSight A500-N39 2PCS 72W Car",
                    reviews:"177 Reviews",id:"automobile"+5

                },
                {img:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/A8/9D/f4ae256b-1e88-4805-96a6-7a7426c457ad.jpg.webp",
                    price:"7,013.29",
                    strikeprice:"₹14,806.71",
                    off:"53% Off",
                    para:"iMars 10.1 Inch 2Din for Android 8.1",
                    reviews:"653 Reviews",id:"automobile"+6

                },
                {img:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/01/FD/72ef7c26-4e8b-493f-89f0-5025d9e46e94.jpg.webp",
                    price:"6,233.95",
                    strikeprice:"₹7,948.50",
                    off:"22% Off",
                    para:"70mai Dash Cam Pro Plus A500S",
                    reviews:"232 Reviews",id:"automobile"+7

                },
                {img:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/1E/75/1f3fd765-fc47-4bdf-8975-328a8be1c4ba.jpg.webp",
                    price:"9,740.99",
                    strikeprice:"₹13,092.16",
                    off:"26% Off",
                    para:"AZDOME M550 Dash Cam 3",
                    reviews:"14 Reviews",id:"automobile"+8

                },
                {img:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/25/81/07c95fb9-f74e-427b-8e02-3343cf3a38a3.jpg.webp",
                    price:"778.56",
                    strikeprice:"₹778.56",
                    off:" ",
                    para:"H4/BA20D/P15D LED Motorcycle",
                    reviews:"1 Reviews",id:"automobile"+9

                },
                {img:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/62/A7/6eb144da-3410-45ed-8e1f-95715b702147.jpg.webp",
                    price:"1,168.23",
                    strikeprice:"₹2,038.76",
                    off:"43% Off",
                    para:"2Pcs 10 LED Rear Stop Indicator Tail",
                    reviews:"9 Reviews",id:"automobile"+10

                },
                {img:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/2A/31/7da05c4b-b14a-49a0-8bda-17fb131e8b50.jpg.webp",
                    price:"856.50",
                    strikeprice:"₹1,324.10",
                    off:"35% Off",
                    para:"P5130 4.1 Inch 1 DIN Car Stereo",
                    reviews:"184 Reviews",id:"automobile"+11

                },
                {img:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/A3/51/f4ab47c0-7a2c-4da4-9e41-01fd99a925cd.jpg.webp",
                    price:"5,298.74",
                    strikeprice:"₹6,389.82",
                    off:"17% Off",
                    para:"NovSight A500-N37 2PCS 120W Car",
                    reviews:"249 Reviews",id:"automobile"+12

                },
                {img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/34/4A/bedf4666-ba04-4299-a45b-e8575a9ce120.jpg.webp",
                    price:"7,870.57",
                    strikeprice:"₹10,286.53",
                    off:"24% Off",
                    para:"12V 400W 9 sound 150dB Loud Car",
                    reviews:"11 Reviews",id:"automobile"+13

                },
                {img:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/87/4B/ca1c80ee-d794-40f9-b2aa-ee23b53b0a6a.jpg.webp",
                    price:"3,740.06",
                    strikeprice:"₹4,519.40",
                    off:"17% Off",
                    para:"Infitary Q2 12V-110V 130W",
                    reviews:"15 Reviews",id:"automobile"+14

                },
                {img:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/09/C9/cd478756-c6c1-4688-8321-3e0be3e1730f.jpg.webp",
                    price:"8,421.56",
                    strikeprice:"₹16,287.45",
                    off:"48% Off",
                    para:"Waterproof Motorcycle Full Face",
                    reviews:"27 Reviews",id:"automobile"+15

                },
                {img:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/49/F8/2e8b0f5c-01cb-4491-84c5-fc6430e1c075.jpg.webp",
                    price:"3,506.26",
                    strikeprice:"₹5,298.74",
                    off:"34% Off",
                    para:"7805 4.1 Inch WINCE Car MP5",
                    reviews:"83 Reviews",id:"automobile"+16

                },
                {img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/77/3E/5b49a6a4-748e-41e2-96a9-fc88ccdb2b61.jpg.webp",
                    price:"2,337.24",
                    strikeprice:"₹3,584.19",
                    off:"35% Off",
                    para:"LF9 Pro 1080P Full HD Car DVR WiFi",
                    reviews:"11 Reviews",id:"automobile"+17

                },
                {img:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/E5/0F/7018185c-a510-4388-83fb-bf40395d7779.jpg.webp",
                    price:"233.02",
                    strikeprice:"₹700.63",
                    off:"67% Off",
                    para:"LED Side Marker Indicator Light",
                    reviews:"25 Reviews",id:"automobile"+18

                },
                {img:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/CB/EB/9acec921-9d12-40dc-b289-4c763419c615.jpg.webp",
                    price:"12,156.95",
                    strikeprice:"₹14,650.84",
                    off:"17% Off",
                    para:"SOMAN 955 Motorcycle bluetooth",
                    reviews:"9 Reviews",id:"automobile"+19

                },
                {img:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/EB/24/c01ddc3b-c1d0-44fe-919e-7257a79fb604.jpg.webp",
                    price:"3,740.06",
                    strikeprice:"₹4,675.27",
                    off:"20% Off",
                    para:"NovSight A500-N50 2PCS 70W Car",
                    reviews:"30 Reviews",id:"automobile"+20

                },
                {img:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/51/AF/b6f2760c-4ecb-4c7f-b1ca-8f8fd2ec8b7a.jpg.webp",
                    price:"6,467.75",
                    strikeprice:"₹14,806.71",
                    off:"56% Off",
                    para:"Mars 10.1 Inch 2 Din for Android",
                    reviews:"110 Reviews",id:"automobile"+21

                },
                {img:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/77/5E/90f28ef0-0b25-4fd9-b5d4-7c6d51e50211.jpg.webp",
                    price:"1,479.97",
                    strikeprice:"₹2,025.51",
                    off:"27% Off",
                    para:"G8 12V Car Audio Stereo Power HIFI",
                    reviews:"52 Reviews",id:"automobile"+22

                },
                {img:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/26/47/4d12f951-1279-4282-bf5f-43c37e087104.jpg.webp",
                    price:"611.78",
                    strikeprice:"₹1,713.77",
                    off:"64% Off",
                    para:"Mini 2 Channel DC 12V Car Power",
                    reviews:"49 Reviews",id:"automobile"+23

                },
                {img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/48/2A/ab14971c-5431-4ead-b06a-7b0f20b70ef3.jpg.webp",
                    price:"1,129.27",
                    strikeprice:"₹1,713.77",
                    off:"34% Off",
                    para:"12V 32 LED Rear Stop Light Tail",
                    reviews:"11 Reviews",id:"automobile"+24

                },
                
                ]
                
display(productData);


function display(productData){
    document.querySelector("#productslist").innerHTML="";
    productData.forEach(function(elem){
    
        var container=document.createElement("div")
    
        var img=document.createElement("img")
            img.addEventListener("click",function(){
            addToCart(elem)
        })
            img.src=elem.img
        
        var imgshadow=document.createElement("div")
    
        var price=document.createElement("h2")
    
            price.innerText="₹"+elem.price
        var strikeprice=document.createElement("div")
    
        var discountPrice=document.createElement("strike")
            discountPrice.innerText=elem.strikeprice
    
        var off=document.createElement("p")
            off.innerText=elem.off
            strikeprice.append(discountPrice,off)
    
        var desc=document.createElement("p")
    
            desc.innerText=elem.para
    
        var reviews=document.createElement("p")
            reviews.innerText=elem.reviews
    
        container.append(img,price,strikeprice,desc,reviews)
        document.querySelector("#productslist").append(container)
        
    
    });
}

// // var cartData=
// productData=JSON.parse(localStorage.getItem("cartData"))||[];


// function cartData(elem){
//     var peresent=false
//     productData.forEach(function(ele){
//         if(elem.price==ele.price){
//             peresent=true
//         }
//     })
//     if(peresent==false){
//         var data={
//             image:elem.img,
//             price:elem.price,
//             name:elem.para
        
//         }
//         productData.push(data)
//         localStorage.setItem("cartData",JSON.stringify(productData))
//     }
//     else{
//         alert("Product already in Cart")
//     }
// }

var cartData=JSON.parse(localStorage.getItem("cart"))||[];
   
document.querySelector(".number>h1").innerText=cartData.length;

function addToCart(el){
    console.log("hello");
    var id=el.id;
    var cartData=JSON.parse(localStorage.getItem("cart"))||[];
   
    document.querySelector(".number>h1").innerText=cartData.length;
    var add=true;
    cartData.forEach(function(el){
        if(id===el.id){
            add=false;
        }
    });
    if(add){
        var p="";
        for(var i=0;i<(el.price).length;i++){
            if((el.price)[i]!==","){
                p=p+(el.price)[i];
            }
         
        }
        p=parseFloat((+(p))).toFixed(2); 
        p=+(p);
        //var p1=(((el.price)[0])+p);
        var obj={
            imageURL:el.img,
            price:p,
            strikePrice:el.strikePrice,
            offPercentage:el.offPercentage,
            id:el.id,
            about:el.about,
            q:el.q

        }
        cartData.push(obj);
        localStorage.setItem("cart",JSON.stringify(cartData));
        document.querySelector(".number>h1").innerText=cartData.length;
        alert("item is added to the cart");
    }else{
        alert("item is already exist");
    }
    
}

// // go to cart
// document.getElementById("jewelryCart").addEventListener("click",function(){window.location.href="cart.html"});





// search by price
var btn=document.getElementById("jewelryTopRightTop").addEventListener("click",searchData);

function searchData(){
    var minPrice=document.querySelectorAll("#pricefilter>input")[0].value;
    var maxPrice=document.querySelectorAll("#pricefilter>input")[1].value; 
    maxPrice=+(maxPrice);
    minPrice=+(minPrice);   
    // console.log(maxPrice,typeof(maxPrice))
    var searchedData=[];
    productData.forEach(function(el){
        var price=el.price;
        
        var Actualprice="";
        for(var i=0;i<price.length;i++){
            if(price[i]!==","){
                Actualprice=Actualprice+price[i];
            }
            
        }
        Actualprice=(+(Actualprice)); 
       if(Actualprice>=minPrice&&Actualprice<=maxPrice){
        // console.log(price)
         console.log(Actualprice,typeof(Actualprice),maxPrice,minPrice)
           searchedData.push(el);
       }
    });
    console.log(searchedData)
    if(searchedData.length<=0){
        display(productData);
        alert("product between these price is not exist");
    }else{
        console.log("hhh")
        display(searchedData);
    }
}