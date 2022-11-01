const topBtn = document.querySelector(".icon-topBtn");
window.addEventListener("scroll",scrollfun);

function scrollfun (){
    if (window.scrollY > 100){
        topBtn.style.display= "block";
    }
    else{
        topBtn.style.display= "none"; 
    }
}

topBtn.addEventListener("click",backtoTop)
function backtoTop (){
    window.scrollTo(0,0)
}