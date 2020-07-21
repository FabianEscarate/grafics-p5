function makeTriangle() {
    // translate(width / 2 , height / 2)
    noFill()
    let punto1 = { x: width / 2, y: height / 3 },
        punto2 = { x: (width / 3), y: (height / 3) * 2 },
        punto3 = { x: (width / 3) * 2, y: (height / 3) * 2 }

    console.log('punto1',punto1)
    console.log('punto2',punto2)
    console.log('punto3',punto3)

    beginShape()
    vertex(punto1.x, punto1.y)
    vertex(punto2.x, punto2.y)
    vertex(punto3.x, punto3.y)
    endShape(CLOSE)

    circle(punto1.x, punto1.y, 20)
    circle(punto2.x, punto2.y, 20)
    circle(punto3.x, punto3.y, 20)
    
    let x = abs(punto1.x - punto2.x)
    let y = abs(punto1.y - punto2.y)
    circle(x,y,20)
    console.log()
    console.log()
}

function setup() {
    createCanvas(600, 600);
    // fullscreen()
    // background(0)
    makeTriangle()
}

function draw() {
    // background(220);
}