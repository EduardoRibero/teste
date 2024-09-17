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