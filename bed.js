img="";

function preload()
{
    img = loadImage('bedroom.png');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 450);
    fill("#454545");
    text("BED", 45, 230);
    noFill();
    stroke("#454545");
    rect(20, 200, 310, 200 );
}