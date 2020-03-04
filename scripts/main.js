window.addEventListener('load', () => {

    var cats = document.querySelectorAll('.par-cats__floating');
    var posYArr = [-200, -250, 150, 190];
    var posXArr = [100, 470, 40, 570];

    var iterateCats = (elem, index) => {

        var handleScroll = (event) => {
            var y = window.scrollY;
            elem.style.top = y / 2 + posYArr[index] + 'px';
            elem.style.left = y / 20 + posXArr[index] + 'px';
            elem.style.transform = 'rotate(' + y/5 + 'deg)';
        }
        
        handleScroll(); // inicializa la posición del gato
        
        window.addEventListener('scroll', handleScroll);
    }
    cats.forEach(iterateCats);
    
    

});