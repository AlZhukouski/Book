let position;
if (position!=undefined){

    window.scrollBy({
        top: position,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    position=window.pageYOffset;
    localStorage.setItem('position', position);
});
