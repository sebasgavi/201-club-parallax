window.addEventListener('load', () => {

    var cat1 = document.querySelector('.par-cats__floating--1');

    var handleScroll = (event) => {
        var y = window.scrollY;
        cat1.style.top = y / 2 - 200 + 'px';
        cat1.style.transform = 'rotate(' + y/5 + 'deg)';
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);

});
