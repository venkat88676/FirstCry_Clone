const slides= ["https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_superhit_fashion_brands_soi_desktop1673438970913.webp","https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_au_17thjan1673891538285.gif",
"https://cdn.fcglcdn.com/brainbees/banners/medela_994x3991666182194135.webp",
"https://cdn.fcglcdn.com/brainbees/banners/merchf_hp_default_soi23_buy2_1701231673929959347.webp",
"https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_superhit_fashion_brands_soi_desktop1673438970913.webp",
"https://cdn.fcglcdn.com/brainbees/banners/babyteething-tracker_hp_desktop_1673948169359.webp",
"https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_hs_18thjan1673974996178.webp"];

let container=document.getElementById("container");
let count=1
let img=document.createElement("img");
    img.src=slides[0]
    container.append(img)
 function slideshow(images){
    container.innerHTML="";
    let img=document.createElement("img");
    img.src=slides[images];
    count++
    if(count>=slides.length){
        count=0;
    }
    container.append(img)
 }
window.addEventListener("load",()=>{
    setInterval(()=>{
        slideshow(count);
    },3000);
})