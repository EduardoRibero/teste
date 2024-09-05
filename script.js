window.onscroll = function() {
    const btn = document.getElementById("btn-vlt-inicio");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

document.getElementById("btn-vlt-inicio").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};

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

const myObserverReverse = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-reverse')
        }else{
            entry.target.classList.add('hidden-reverse')
        }
    })
})
const elementsReverse = document.querySelectorAll('.hidden-reverse')

elementsReverse.forEach((element) =>{
    myObserverReverse.observe(element)
})

const myObserverY = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-y')
        }else{
            entry.target.classList.add('hidden-y')
        }
    })
})
const elementsY = document.querySelectorAll('.hidden-y')

elementsY.forEach((element) =>{
    myObserverY.observe(element)
})

const myObserverYReverse = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-y-reverse')
        }else{
            entry.target.classList.add('hidden-y-reverse')
        }
    })
})
const elementsYReverse = document.querySelectorAll('.hidden-y-reverse')

elementsYReverse.forEach((element) =>{
    myObserverYReverse.observe(element)
})


