const anchoOriginal = 10;
const altoOriginal = 10;
let escala = 60;
let ancho, alto, altoAux, anchoAux, auxValue, totalElementos;
let matriz = [];
let runfunction = false;

function cuadrado(escala, positionX, positionY) {
    let ordenado = false;
    let tomado = false;
    this.size = escala;
    this.positionX = positionX;
    this.positionY = positionY;
    this.value = floor(random(0, 256));

    this.cambio = function (cuadradoMayor) {
    }

    this.ordenado = function () {
        ordenado = true;
        tomado = false;
        stroke(0);
        fill(50, 255, 50);
        square(this.positionX, this.positionY, this.size);
        fill(0);
        textAlign(CENTER);
        text(this.value, this.positionX + this.size / 2, this.positionY + this.size / 2);
    }

    this.tomado = function () {
        tomado = true;
        fill(255);
        square(this.positionX, this.positionY, this.size);
        fill(0);
        stroke(0);
        textAlign(CENTER);
        text(this.value, this.positionX + this.size / 2, this.positionY + this.size / 2);
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
        if (!tomado && !ordenado) {
            stroke(255);
            fill(0);
            square(this.positionX, this.positionY, this.size);
            fill(255);
            textAlign(CENTER);
            text(this.value, this.positionX + this.size / 2, this.positionY + this.size / 2);
        }
    }
}

function setup() {
    createCanvas(600, 600);
    // escala para distriibucion de cuadrados
    // de momento es el tamaño    

    // instanciar la matriz
    matriz.push(...new Array(altoOriginal));
    for (let x = 0; x < matriz.length; x++) {
        matriz[x] = new Array(anchoOriginal);
    }

    for (let x = 0; x < matriz.length; x++) {
        for (let y = 0; y < matriz[x].length; y++) {
            matriz[x][y] = new cuadrado(escala, y * escala, x * escala);
        }
    }

    alto = altoOriginal - 1;
    ancho = anchoOriginal - 1;
    altoAux = altoOriginal - 1;
    anchoAux = anchoOriginal - 2;
    totalElementos = altoOriginal * anchoOriginal;

}

function draw() {
    // frameRate(120);
    // clear();
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
        if (totalElementos > 0) {
            matriz[alto][ancho].tomado();

            for (let x = 0; x < matriz.length; x++) {
                for (let y = 0; y < matriz[x].length; y++) {
                    matriz[x][y].render();
                }
            }

            if (altoAux > -1) {
                if (anchoAux > -1) {
                    if (altoAux == 0 && anchoAux == 0) {
                        if (matriz[alto][ancho].value < matriz[altoAux][anchoAux].value) {
                            auxValue = matriz[alto][ancho].value;
                            matriz[alto][ancho].value = matriz[altoAux][anchoAux].value;
                            matriz[altoAux][anchoAux].value = auxValue;
                        }

                        matriz[alto][ancho].ordenado();
                        totalElementos -= 1;
                        prevMatrizCoordenate();
                        reIniciarRecorrido();
                    } else {
                        if (anchoAux == 0) {
                            if (matriz[alto][ancho].value < matriz[altoAux - 1][anchoOriginal - 1].value) {
                                auxValue = matriz[alto][ancho].value;
                                matriz[alto][ancho].value = matriz[altoAux - 1][anchoOriginal - 1].value;
                                matriz[altoAux - 1][anchoOriginal - 1].value = auxValue;
                            }
                            altoAux -= 1;
                            anchoAux = anchoOriginal - 1
                        } else {
                            if (matriz[alto][ancho].value < matriz[altoAux][anchoAux - 1].value) {
                                auxValue = matriz[alto][ancho].value;
                                matriz[alto][ancho].value = matriz[altoAux][anchoAux - 1].value;
                                matriz[altoAux][anchoAux - 1].value = auxValue;
                            }
                            anchoAux -= 1;
                        }
                    }
                    if (totalElementos > 0) {
                        matriz[altoAux][anchoAux].read();
                    }
                }
            }
        }

    }
}

function prevMatrizCoordenate() {
    alto = ancho == 0 ? alto - 1 : alto;
    ancho = ancho == 0 ? anchoOriginal - 1 : ancho - 1;
}

function reIniciarRecorrido() {
    altoAux = ancho == 0 ? alto == 0 ? 0 : alto - 1 : alto;
    anchoAux = ancho == 0 ? alto == 0 ? 0 : anchoOriginal - 1 : ancho - 1;
}

function mouseClicked(event) {
    if (!runfunction) {
        runfunction = !runfunction;

        loop();
    }
}