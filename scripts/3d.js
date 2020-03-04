function sketch3D (p) {

    p.setup = function () {
        var canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        canvas.parent('3d-space');
        p.normalMaterial();
    }
    
    p.draw = function () {
        p.background(200);
        //p.orbitControl();

        p.push();
        p.translate(0, 300, 0);
        drawRoom();
        p.pop();
    }

    function drawRoom () {
        var roomWidth = p.windowWidth * 1.4;
        var roomHeight = 600;
        
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