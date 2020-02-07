let position=localStorage.getItem('position');
if (position!=undefined){

    window.scrollBy({
        top: position,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    console.log(window.pageYOffset)
    position=window.pageYOffset;
    localStorage.setItem('position', position);
    console.log(localStorage.getItem('position'))
});
