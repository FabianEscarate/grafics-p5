let ancho = 10;
let alto = 10;
let altoAux, anchoAux;
let matriz = [
    // [... new Array(10)],
    // [... new Array(10)],
    // [... new Array(10)],
    // [... new Array(10)],
    // [... new Array(10)],
    // [... new Array(10)],
    // [... new Array(10)],
    // [... new Array(10)],
    // [... new Array(10)],
    // [... new Array(10)]
];
let escala = 60;
let runfunction = false;

function cuadrado(escala, positionX, positionY) {
    let ordenado = false;
    this.size = escala;
    this.positionX = positionX;
    this.positionY = positionY;
    this.value = floor(random(0, 255));

    this.cambio = function (cuadradoMayor) {

    }

    this.read = function () {
        fill(255, 0, 105);
        square(this.positionX, this.positionY, this.size);
        fill(0);
        stroke(0);
        textAlign(CENTER);
        text(this.value, this.positionX + this.size / 2, this.positionY + this.size / 2);
    }

    this.update = function () {
        fill(50, 255, 50);
        square(this.positionX, this.positionY, this.size);
        fill(0);
        stroke(0);
        textAlign(CENTER);
        text(this.value, this.positionX + this.size / 2, this.positionY + this.size / 2);
    }

    this.render = function () {
        stroke(255);
        fill(0);
        square(this.positionX, this.positionY, this.size);
        fill(255);
        textAlign(CENTER);
        text(this.value, this.positionX + this.size / 2, this.positionY + this.size / 2);
    }
}

function setup() {
    createCanvas(600, 600);
    // escala para distriibucion de cuadrados
    // de momento es el tamaño    

    // instanciar la matriz
    matriz.push(...new Array(alto));
    for (let x = 0; x < matriz.length; x++) {
        matriz[x] = new Array(ancho);
    }

    for (let x = 0; x < alto; x++) {
        for (let y = 0; y < ancho; y++) {
            matriz[x][y] = new cuadrado(escala, y * escala, x * escala);
        }
    }

    altoAux = alto - 1;
    anchoAux = ancho - 1;

}

function draw() {
    // frameRate(1);
    if (!runfunction) {
        background(0);
        stroke(255);
        for (let x = 0; x < matriz.length; x++) {
            for (let y = 0; y < matriz[x].length; y++) {
                matriz[x][y].render();
            }
        }

        fill(255);
        rect((width / 2) - 180, (height / 2) - 120, (180 * 2), 180, 20)
        fill(0);
        // textSize(20);
        textAlign(CENTER);
        text('haz click para comenzar a ordenar', (width / 2), (height / 2) - 20);
        noLoop();
    } else {
        for (let x = 0; x < matriz.length; x++) {
            for (let y = 0; y < matriz[x].length; y++) {
                matriz[x][y].render();
            }
        }

        matriz[altoAux][anchoAux].render();
        // anchoAux -= 1;
        while (altoAux > -1) {
            while (anchoAux > -1) {
                if (matriz[altoAux][anchoAux].value < matriz[altoAux][anchoAux - 1].value) {

                }
                anchoAux -= 1;
            }
            altoAux -= 1;
        }



        ancho -= 1;
        if (matriz[alto - 1][ancho - 1].value > matriz[alto - 1][ancho].value) {
            matriz[alto - 1][ancho].cambio(matriz[alto - 1][ancho - 1].cambio);
        }

        if (ancho == 0) {
            alto -= 1;
            ancho = 10;
            if (alto == 0) {
                noLoop();
                alto = 10;
            }
        }

    }
}

function mouseClicked(event) {
    if (!runfunction) {
        runfunction = !runfunction;

        loop();
    }
}