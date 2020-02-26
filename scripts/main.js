window.addEventListener('load', () => {

    var cat1 = document.querySelector('.par-cats__floating--1');

    window.addEventListener('scroll', (event) => {
        var y = window.scrollY;
        console.log('holas', y);
        cat1.style.top = y / 2 - 200 + 'px';
    });

});
