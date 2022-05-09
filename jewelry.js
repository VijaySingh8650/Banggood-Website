var LogData = JSON.parse(localStorage.getItem("login_data"));
var nameOfPerson = document.querySelector(".hello>span");
    nameOfPerson.innerText=LogData[0].email;
    nameOfPerson.style.cursor="auto";
var data=[{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/53/B7/cebb66f6-d4b1-4782-92a6-d580c7540c01.jpg.webp",price:"₹392.04",strikePrice:"₹10.99",offPercentage:" 53% Off",about:"African Hallow Braided circle",id:"jewelry"+1,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/A3/F5/d5f97e83-7928-4a8a-8800-ea0a5558b6b5.jpg.webp",price:"₹7.68",strikePrice:"₹14.99",offPercentage:" 49% Off",about:"925 strailing silvr",id:"jewelry"+2,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/FE/98/449b8158-1171-440c-813c-cf8bd75f771c.jpg.webp",price:"₹13.11",strikePrice:"₹19.99",offPercentage:" 34% Off",about:"bohimen creative luminious",id:"jewelry"+3,q:1},
{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/0E/16/d423b060-01eb-4063-a996-a55b972fe371.jpg.webp",price:"₹12.56",strikePrice:"₹19.99",offPercentage:" 39% Off",about:"silver plated simple snake",id:"jewelry"+4,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/A3/F5/49f5f923-0df1-481d-9be1-7d32b1a5028b.jpg.webp",price:"₹3.67",strikePrice:"₹9.999",offPercentage:" 66% Off",about:"silver plated simple glass slipper",id:"jewelry"+5,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/upload/2015/08/SKU246403_2.jpg.webp",price:"₹2.29",strikePrice:"₹8.99",offPercentage:" 60% Off",about:"multi color glass sliper slipper",id:"jewelry"+6,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/87/C9/5b079b14-bcc9-4864-beb6-8d233538130b.jpg.webp",price:"₹16.99",strikePrice:"₹20.99",offPercentage:" 19% Off",about:"mono color glass magnifire",id:"jewelry"+7,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/D5/6A/e32aa121-e95c-4757-99e0-a8d90423c327.jpg.webp",price:"₹44.45",strikePrice:"₹53.99",offPercentage:" 18% Off",about:"punk genuine leather warp",id:"jewelry"+8,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/12/20/096476ec-627d-c888-87ca-a6d9b932ff9c.jpg.webp",price:"₹10.74",strikePrice:"₹16.99",offPercentage:" 37% Off",about:"tanzanite ziracvon loose",id:"jewelry"+9,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/0E/C9/edd0a105-2d77-47f0-be1f-c2a3e4f44f1d.jpg.webp",price:"₹12.97",strikePrice:"₹20.99",offPercentage:" 38% Off",about:"double eagle",id:"jewelry"+10,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/A9/F3/218667da-cb74-4cf6-b1d8-9703e1073d46.jpg.webp",price:"₹7.36",strikePrice:"₹10.99",offPercentage:" 33% Off",about:"i love you present",id:"jewelry"+11,q:1},
{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/3D/D6/2dcac586-5297-4302-bc9d-2e5e13656881.jpg.webp",price:"₹11.99",strikePrice:"₹14.99",offPercentage:" 20% Off",about:"gold plated peremeter cristal",id:"jewelry"+12,q:1},
{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/71/6F/41371d2f-5f42-4021-b3ca-60a574e6999a.jpg.webp",price:"₹23.88",strikePrice:"₹34.99",offPercentage:" 32% Off",about:"diamond tester gemstone selecter",id:"jewelry"+13,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/C2/E8/6fd033f9-8e9e-45ce-b214-7e2691abec68.jpg.webp",price:"₹5.88",strikePrice:"₹8.99",offPercentage:" 35% Off",about:"vintage multilayer braceler",id:"jewelry"+14,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/F2/00/4aa488fb-ba54-43a8-ae42-911190f41136.jpg.webp",price:"₹6.60",strikePrice:"₹11.99",offPercentage:" 45% Off",about:"hope racin geometry",id:"jewelry"+15,q:1},
{imageURL:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/2C/D2/e923adf3-ea3e-4890-b58f-c94230b8fcc5.jpg.webp",price:"₹13.11",strikePrice:"₹20.99",offPercentage:" 38% Off",about:"special gircon inland",id:"jewelry"+16,q:1},
{imageURL:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/6F/CF/3abde787-1681-4d95-b702-d4528d4e6f33.jpg.webp",price:"₹9.57",strikePrice:"₹16.99",offPercentage:" 44% Off",about:"cute pendant neckless",id:"jewelry"+17,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/3F/7E/ff725c94-c521-faae-ec49-eab35d8e290c.jpg.webp",price:"₹13.64",strikePrice:"₹19.99",offPercentage:" 32% Off",about:"gold plated 10mm plane chain",id:"jewelry"+18,q:1},
{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/DA/0D/7b357050-57fb-45bd-94c7-92d126912104.jpg.webp",price:"₹14.29",strikePrice:"₹20.99",offPercentage:" 32% Off",about:"cristal rehiness stone",id:"jewelry"+19,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/70/02/dc4f02e5-0d93-4b86-8681-688674e6b0d6.JPG.webp",price:"₹7.04",strikePrice:"₹22.99",offPercentage:" 69% Off",about:"luminus gold silver dragon",id:"jewelry"+20,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/EC/FD/ba1a25ac-6cde-49a0-b629-3feba335e42d.jpg.webp",price:"₹11.94",strikePrice:"₹17.99",offPercentage:" 38% Off",about:"trendy zericate zirrconia crystal",id:"jewelry"+21,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/upload/2015/07/SKU223952_1.jpg.webp",price:"₹15.82",strikePrice:"₹21.99",offPercentage:" 28% Off",about:"elagent silver rehine stone",id:"jewelry"+22,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/53/B7/cebb66f6-d4b1-4782-92a6-d580c7540c01.jpg.webp",price:"₹5.14",strikePrice:"₹10.99",offPercentage:" 53% Off",about:"African Hallow Braided circle",id:"jewelry"+23,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/A3/F5/d5f97e83-7928-4a8a-8800-ea0a5558b6b5.jpg.webp",price:"₹7.68",strikePrice:"₹14.99",offPercentage:" 49% Off",about:"925 strailing silvr",id:"jewelry"+24,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/FE/98/449b8158-1171-440c-813c-cf8bd75f771c.jpg.webp",price:"₹13.11",strikePrice:"₹19.99",offPercentage:" 34% Off",about:"bohimen creative luminious",id:"jewelry"+25,q:1},
{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/0E/16/d423b060-01eb-4063-a996-a55b972fe371.jpg.webp",price:"₹12.56",strikePrice:"₹19.99",offPercentage:" 39% Off",about:"silver plated simple snake",id:"jewelry"+26,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/A3/F5/49f5f923-0df1-481d-9be1-7d32b1a5028b.jpg.webp",price:"₹3.67",strikePrice:"₹9.999",offPercentage:" 66% Off",about:"silver plated simple glass slipper",id:"jewelry"+27,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/upload/2015/08/SKU246403_2.jpg.webp",price:"₹2.29",strikePrice:"₹8.99",offPercentage:" 60% Off",about:"multi color glass sliper slipper",id:"jewelry"+28,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/87/C9/5b079b14-bcc9-4864-beb6-8d233538130b.jpg.webp",price:"₹16.99",strikePrice:"₹20.99",offPercentage:" 19% Off",about:"mono color glass magnifire",id:"jewelry"+29,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/D5/6A/e32aa121-e95c-4757-99e0-a8d90423c327.jpg.webp",price:"₹44.45",strikePrice:"₹53.99",offPercentage:" 18% Off",about:"punk genuine leather warp",id:"jewelry"+30,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/12/20/096476ec-627d-c888-87ca-a6d9b932ff9c.jpg.webp",price:"₹10.74",strikePrice:"₹16.99",offPercentage:" 37% Off",about:"tanzanite ziracvon loose",id:"jewelry"+31,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/0E/C9/edd0a105-2d77-47f0-be1f-c2a3e4f44f1d.jpg.webp",price:"₹12.97",strikePrice:"₹20.99",offPercentage:" 38% Off",about:"double eagle",id:"jewelry"+32,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/A9/F3/218667da-cb74-4cf6-b1d8-9703e1073d46.jpg.webp",price:"₹7.36",strikePrice:"₹10.99",offPercentage:" 33% Off",about:"i love you present",id:"jewelry"+33,q:1},
{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/3D/D6/2dcac586-5297-4302-bc9d-2e5e13656881.jpg.webp",price:"₹11.99",strikePrice:"₹14.99",offPercentage:" 20% Off",about:"gold plated peremeter cristal",id:"jewelry"+34,q:1},
{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/71/6F/41371d2f-5f42-4021-b3ca-60a574e6999a.jpg.webp",price:"₹23.88",strikePrice:"₹34.99",offPercentage:" 32% Off",about:"diamond tester gemstone selecter",id:"jewelry"+35,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/C2/E8/6fd033f9-8e9e-45ce-b214-7e2691abec68.jpg.webp",price:"₹5.88",strikePrice:"₹8.99",offPercentage:" 35% Off",about:"vintage multilayer braceler",id:"jewelry"+36,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/F2/00/4aa488fb-ba54-43a8-ae42-911190f41136.jpg.webp",price:"₹6.60",strikePrice:"₹11.99",offPercentage:" 45% Off",about:"hope racin geometry",id:"jewelry"+37,q:1},
{imageURL:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/2C/D2/e923adf3-ea3e-4890-b58f-c94230b8fcc5.jpg.webp",price:"₹13.11",strikePrice:"₹20.99",offPercentage:" 38% Off",about:"special gircon inland",id:"jewelry"+38,q:1},
{imageURL:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/6F/CF/3abde787-1681-4d95-b702-d4528d4e6f33.jpg.webp",price:"₹9.57",strikePrice:"₹16.99",offPercentage:" 44% Off",about:"cute pendant neckless",id:"jewelry"+39,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/3F/7E/ff725c94-c521-faae-ec49-eab35d8e290c.jpg.webp",price:"₹13.64",strikePrice:"₹19.99",offPercentage:" 32% Off",about:"gold plated 10mm plane chain",id:"jewelry"+40,q:1},
{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/DA/0D/7b357050-57fb-45bd-94c7-92d126912104.jpg.webp",price:"₹14.29",strikePrice:"₹20.99",offPercentage:" 32% Off",about:"cristal rehiness stone",id:"jewelry"+41,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/70/02/dc4f02e5-0d93-4b86-8681-688674e6b0d6.JPG.webp",price:"₹7.04",strikePrice:"₹22.99",offPercentage:" 69% Off",about:"luminus gold silver dragon",id:"jewelry"+42,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/EC/FD/ba1a25ac-6cde-49a0-b629-3feba335e42d.jpg.webp",price:"₹11.94",strikePrice:"₹17.99",offPercentage:" 38% Off",about:"trendy zericate zirrconia crystal",id:"jewelry"+43,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/upload/2015/07/SKU223952_1.jpg.webp",price:"₹15.82",strikePrice:"₹21.99",offPercentage:" 28% Off",about:"elagent silver rehine stone",id:"jewelry"+44,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/53/B7/cebb66f6-d4b1-4782-92a6-d580c7540c01.jpg.webp",price:"₹5.14",strikePrice:"₹10.99",offPercentage:" 53% Off",about:"African Hallow Braided circle",id:"jewelry"+45,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/A3/F5/d5f97e83-7928-4a8a-8800-ea0a5558b6b5.jpg.webp",price:"₹7.68",strikePrice:"₹14.99",offPercentage:" 49% Off",about:"925 strailing silvr",id:"jewelry"+46,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/FE/98/449b8158-1171-440c-813c-cf8bd75f771c.jpg.webp",price:"₹13.11",strikePrice:"₹19.99",offPercentage:" 34% Off",about:"bohimen creative luminious",id:"jewelry"+47,q:1},
{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/0E/16/d423b060-01eb-4063-a996-a55b972fe371.jpg.webp",price:"₹12.56",strikePrice:"₹19.99",offPercentage:" 39% Off",about:"silver plated simple snake",id:"jewelry"+48,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/A3/F5/49f5f923-0df1-481d-9be1-7d32b1a5028b.jpg.webp",price:"₹3.67",strikePrice:"₹9.999",offPercentage:" 66% Off",about:"silver plated simple glass slipper",id:"jewelry"+49,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/upload/2015/08/SKU246403_2.jpg.webp",price:"₹2.29",strikePrice:"₹8.99",offPercentage:" 60% Off",about:"multi color glass sliper slipper",id:"jewelry"+50,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/87/C9/5b079b14-bcc9-4864-beb6-8d233538130b.jpg.webp",price:"₹16.99",strikePrice:"₹20.99",offPercentage:" 19% Off",about:"mono color glass magnifire",id:"jewelry"+51,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/D5/6A/e32aa121-e95c-4757-99e0-a8d90423c327.jpg.webp",price:"₹44.45",strikePrice:"₹53.99",offPercentage:" 18% Off",about:"punk genuine leather warp",id:"jewelry"+52,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/12/20/096476ec-627d-c888-87ca-a6d9b932ff9c.jpg.webp",price:"₹10.74",strikePrice:"₹16.99",offPercentage:" 37% Off",about:"tanzanite ziracvon loose",id:"jewelry"+53,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/0E/C9/edd0a105-2d77-47f0-be1f-c2a3e4f44f1d.jpg.webp",price:"₹12.97",strikePrice:"₹20.99",offPercentage:" 38% Off",about:"double eagle",id:"jewelry"+54,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/A9/F3/218667da-cb74-4cf6-b1d8-9703e1073d46.jpg.webp",price:"₹7.36",strikePrice:"₹10.99",offPercentage:" 33% Off",about:"i love you present",id:"jewelry"+55,q:1},
{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/3D/D6/2dcac586-5297-4302-bc9d-2e5e13656881.jpg.webp",price:"₹11.99",strikePrice:"₹14.99",offPercentage:" 20% Off",about:"gold plated peremeter cristal",id:"jewelry"+56,q:1},
{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/71/6F/41371d2f-5f42-4021-b3ca-60a574e6999a.jpg.webp",price:"₹23.88",strikePrice:"₹34.99",offPercentage:" 32% Off",about:"diamond tester gemstone selecter",id:"jewelry"+57,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/C2/E8/6fd033f9-8e9e-45ce-b214-7e2691abec68.jpg.webp",price:"₹5.88",strikePrice:"₹8.99",offPercentage:" 35% Off",about:"vintage multilayer braceler",id:"jewelry"+58,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/F2/00/4aa488fb-ba54-43a8-ae42-911190f41136.jpg.webp",price:"₹6.60",strikePrice:"₹11.99",offPercentage:" 45% Off",about:"hope racin geometry",id:"jewelry"+59,q:1},
{imageURL:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/2C/D2/e923adf3-ea3e-4890-b58f-c94230b8fcc5.jpg.webp",price:"₹13.11",strikePrice:"₹20.99",offPercentage:" 38% Off",about:"special gircon inland",id:"jewelry"+60,q:1},
{imageURL:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/6F/CF/3abde787-1681-4d95-b702-d4528d4e6f33.jpg.webp",price:"₹9.57",strikePrice:"₹16.99",offPercentage:" 44% Off",about:"cute pendant neckless",id:"jewelry"+61,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/3F/7E/ff725c94-c521-faae-ec49-eab35d8e290c.jpg.webp",price:"₹13.64",strikePrice:"₹19.99",offPercentage:" 32% Off",about:"gold plated 10mm plane chain",id:"jewelry"+62,q:1},
{imageURL:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/DA/0D/7b357050-57fb-45bd-94c7-92d126912104.jpg.webp",price:"₹14.29",strikePrice:"₹20.99",offPercentage:" 32% Off",about:"cristal rehiness stone",id:"jewelry"+63,q:1},
{imageURL:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/70/02/dc4f02e5-0d93-4b86-8681-688674e6b0d6.JPG.webp",price:"₹7.04",strikePrice:"₹22.99",offPercentage:" 69% Off",about:"luminus gold silver dragon",id:"jewelry"+64,q:1},
{imageURL:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/EC/FD/ba1a25ac-6cde-49a0-b629-3feba335e42d.jpg.webp",price:"₹11.94",strikePrice:"₹17.99",offPercentage:" 38% Off",about:"trendy zericate zirrconia crystal",id:"jewelry"+65,q:1},
]

display(data);
function display(data){
    var parentOfCard=document.getElementById("jewelryTopRightBottom");
    parentOfCard.innerHTML="";

    data.forEach(function(el){
        var card=document.createElement("div");
        // var img2=document.createElement("img");
        // img2.setAttribute("src","https://cdn.pixabay.com/photo/2020/09/30/07/48/heart-5614865__340.png")
        var img=document.createElement("img");
        img.setAttribute("src",el.imageURL);
        img.addEventListener("click",function(){addToCart(el)});
       
       
        var price=document.createElement("h2");
        var p="";
        for(var i=1;i<(el.price).length;i++){
         p=p+(el.price)[i];
        }
        p=parseFloat((+(p))*76.27).toFixed(2); 
        var p1=(((el.price)[0])+p);
        // .split("").slice(0,9).join("");
        price.innerText=p1;
        var para=document.createElement("p");
       
        para.innerHTML="<span>"+el.strikePrice+"</span> "+el.offPercentage+"";
        // var strikePrice=document.createElement("span");
        // strikePrice.innerText=el.strikePrice;
        // para.append(strikePrice);
        // para.innerText=el.offPercentage;
        var about=document.createElement("a");
        about.innerText=el.about;
        var review=document.createElement("a");
        review.innerText="review";
        card.append(img,price,para,about,review);

        parentOfCard.append(card);
        // img.addEventListener("mouseover", function( event ) {
        //     img2.style.zIndex=1;
        //     img.addEventListener("mouseout",function() {
        //        img2.style.zIndex=-1;
        //     });
        //   });
    });
}

// show cart img
// function showCart(el,index){
//     img2.style.zIndex=1;
  
//     // reset the color after a short delay
//     setTimeout(function() {
//         img2.style.zIndex=-1;
//     }, 500);
//   }
  



// search by price
var btn=document.querySelector("#jewelryTopRightTop>button").addEventListener("click",searchData);

function searchData(){
    var minPrice=document.querySelectorAll("#jewelryTopRightTop>input")[0].value;
    var maxPrice=document.querySelectorAll("#jewelryTopRightTop>input")[1].value; 
    maxPrice=+(maxPrice);
    minPrice=+(minPrice);   
    // console.log(maxPrice,typeof(maxPrice))
    var searchedDarta=[];
    data.forEach(function(el){
        var price=el.price;
        
        var Actualprice="";
        for(var i=1;i<price.length;i++){
            Actualprice=Actualprice+price[i];
        }
        Actualprice=(+(Actualprice))*76.27; 
       if(Actualprice>=minPrice&&Actualprice<=maxPrice){
        // console.log(price)
        // console.log(Actualprice,typeof(Actualprice),maxPrice,minPrice)
           searchedDarta.push(el);
       }
    });
    if(searchedDarta.length<=0){
        display(data);
        alert("product between these price is not exist");
    }else{
        display(searchedDarta);
    }
}

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
        for(var i=1;i<(el.price).length;i++){
         p=p+(el.price)[i];
        }
        p=parseFloat((+(p))*76.27).toFixed(2); 
        p=+(p);
        //var p1=(((el.price)[0])+p);
        var obj={
            imageURL:el.imageURL,
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

// go to cart
document.getElementById("jewelryCart").addEventListener("click",function(){window.location.href="cart.html"});

// go to home

function GotoHome(){
    window.location.href="index.html";
}