const imgs=document.querySelectorAll(".header-slider ul img");
const prevbtn=document.querySelector(".control_prev");
const nextbtn=document.querySelector(".control_next");

var n = 0;



function changeslide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display="none";
        
    }
    imgs[n].style.display="block";
    n++
}

changeslide();

// prevbtn.addEventListener('click' , (e)=>{
//     if(n>0){
//         n--;
//     }
//     else{
//         n=imgs.length -1;
//     }
//     changeslide();
// }

var scrollBar = document.querySelectorAll(".products");

for (const item of scrollBar) {
    item.addEventListener("wheel",(evt)=>{
        evt.preventDefault();
        item.scrollLeft +=evt.deltaY;
    })
}

