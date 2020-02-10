// Закладка, хранится в кеше
let position = localStorage.getItem('position');
if (position == undefined) {
    bookmark();
}

function bookmark() {
    if (position != undefined) {

        window.scrollBy({
            top: localStorage.getItem('position') - window.pageYOffset,
            behavior: 'smooth'
        });
    }
    window.addEventListener('scroll', function () {

        position = window.pageYOffset;
        localStorage.setItem('position', position);

    })
    document.getElementById('bookmark').classList.add("bookmark-hide");
}

//опен меню
let closexxx = function (event) {
    let e = document.getElementById('menu');
    if (!e.contains(event.target)) {
        document.getElementById('menu-trigger').classList.toggle("close-btn");
        document.getElementById("menu").classList.toggle("is-active");
        document.removeEventListener('click', closexxx, false);
    }
};

function menuTrigger() {
    let trigger = document.getElementById('menu-trigger'), menu = document.getElementById("menu");

    menu.classList.toggle("is-active");
    trigger.classList.toggle("close-btn");
    function vvv() {
        setTimeout(function(){
            if (document.getElementById('menu-trigger').classList.contains('close-btn')) {
                document.addEventListener('click',  closexxx, false);
            }}, 3);
    }
   //vvv();

}