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

window.onscroll = function() {
    const btn = document.getElementById(".bottom-corner");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        btn.style.opacity = 1;
    } else {
        btn.style.opacity = 0;
    }
};

document.getElementById(".bottom-corner").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};

