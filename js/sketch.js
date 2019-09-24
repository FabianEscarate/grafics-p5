function star() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);

    this.update = function () {
        this.z -= 1;
        if (this.z < 1) {
            this.z = width;
            // console.log('fin Estrella');
            this.x = random(-width, width);
            this.y = random(-height, height);
        }
    }

    this.show = function () {
        // console.log(`cordenadas: ${this.x} : ${this.y} : ${this.z}`);
        // fill(random(0,255),random(0,255),random(0,255));
        fill(255);
        noStroke();

        let sx = map(this.x / this.z, 0, 1, 0, width);
        let sy = map(this.y / this.z, 0, 1, 0, height);

        ellipse(sx, sy, 8, 8);
    }
}

let l_stars = new Array(1000)

function setup() {
    createCanvas(640, 480);
    for (let i = 0; i < l_stars.length; i++) {
        l_stars[i] = new star();
    }

}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    for (let i = 0; i < l_stars.length; i++) {
        l_stars[i].update();
        l_stars[i].show();
    }
}