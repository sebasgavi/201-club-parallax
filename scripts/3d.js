function sketch3D (p) {

    var happyManImage;
    var roomWidth = p.windowWidth * 1.4;
    var roomHeight = 600;

    p.preload = function () {
        happyManImage = p.loadImage('./images/happy-man.png');
    }

    p.setup = function () {
        var canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        canvas.parent('3d-space');
        p.normalMaterial();
    }
    
    p.draw = function () {
        p.background(200);

        var limit = .5;
        var ry = p.map(p.mouseX, 0, p.windowWidth, -limit, limit);

        p.push();
        p.rotateY(ry);
        p.translate(0, 300, 0);
        drawRoom();
        drawContent(ry);
        p.pop();
    }

    function drawContent (ry) {
        // happy man
        var w = 350;
        p.push();
        p.translate(w, w*-.5, 0);
        p.rotateY(-ry);
        p.texture(happyManImage);
        p.plane(w, w);
        p.pop();
    }

    function drawRoom () {        
        // atrás
        p.push();
        p.translate(0, roomHeight * -.5, roomHeight * -.5);
        p.plane(roomWidth, roomHeight);
        p.pop();

        // piso
        p.push();
        p.rotateX(p.PI * .5);
        p.plane(roomWidth, roomHeight);
        p.pop();

        // derecha
        p.push();
        p.translate(roomWidth * .5, roomHeight * -.5, 0);
        p.rotateY(p.PI * .5);
        p.plane(roomHeight, roomHeight);
        p.pop();

        // izquierda
        p.push();
        p.translate(roomWidth * -.5, roomHeight * -.5, 0);
        p.rotateY(p.PI * .5);
        p.plane(roomHeight, roomHeight);
        p.pop(); 
    }
}

let p53D = new p5(sketch3D);