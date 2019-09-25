let largolinea = 150;
let masaPeso = 40;
let angulo = 0;
let aceleracion = 0;
let velocidad = 0;

function setup() {
    createCanvas(600, 600)
    angulo = PI / 6;
}

function draw() {
    background(0);
    // noStroke();
    stroke(255);
    strokeWeight(2);
    translate(300, 50);

    let x1 = largolinea * sin(angulo);
    let y1 = largolinea * cos(angulo);

    line(0, 0, x1, y1);
    fill(255, 215, 0);
    ellipse(x1, y1, masaPeso, masaPeso);
    console.log(angulo);
    // if (angulo < abs(PI / 7)) {
    aceleracion = -0.01 * sin(angulo);
    // }

    angulo += velocidad;
    velocidad += aceleracion

    velocidad *= 0.99;

}