const myObserver = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.add('hidden')
        }
    })
})
const elements = document.querySelectorAll('.hidden')

elements.forEach((element) =>{
    myObserver.observe(element)
})


const myObservery = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-y')
        }else{
            entry.target.classList.add('hidden-y')
        }
    })
})
const elementsy = document.querySelectorAll('.hidden-y')

elementsy.forEach((element) =>{
    myObservery.observe(element)
})


window.onscroll = function() {
    const btn = document.getElementById("scrollToTopBtn");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        btn.style.opacity = 1;
    } else {
        btn.style.opacity = 0;
    }
};

document.getElementById("scrollToTopBtn").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};

