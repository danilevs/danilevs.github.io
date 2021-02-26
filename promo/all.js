
let count=0;
const img =document.getElementsByClassName("baner")[0];
const text = document.getElementsByClassName("text")[0];
const btn_left = document.getElementsByClassName("left")[0];
const btn_right =document.getElementsByClassName("right")[0];

console.log(btn_left);
class Slide{
    constructor(text, url_image){
        this.text=text;
        this.url_image=url_image;
    }
}

const slides=[
    new Slide("Первое бесплатное занятие", "../slide_img/1.jpg"),
    new Slide("Cкидка при оплате за весь курс", "../slide_img/2.jpg"),
];

function change_slide(count){
    img.style.backgroundImage=`url("${slides[count].url_image}")`;
    text.innerHTML=slides[count].text;
}

change_slide(count);

btn_left.addEventListener('click',()=>{
    if (count==0){
        count=slides.length-1;
    }else{
        count--;
    }
    change_slide(count);
});

btn_right.addEventListener('click',()=>{
    if (count==(slides.length-1)){
        count=0;
    }else{
        count++;
    }
    change_slide(count);
});

setInterval(()=>{
    if (count==(slides.length-1)){
        count=0;
    }else{
        count++;
    }
    change_slide(count);
}, 4000)