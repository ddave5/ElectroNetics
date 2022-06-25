window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        var windowheight = window.innerHeight;
        var revealTop = reveal.getBoundingClientRect().top;
        var revealpoint = 40;

        if (revealTop < windowheight - revealpoint){
            reveal.classList.add('revealed');
        }
        else{
            reveal.classList.remove('revealed');
        }
    })
}