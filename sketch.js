var jkt0, jkt1;

function preload() {
	jkt0 = loadImage("jakarta0.png");
	jkt1 = loadImage("jakarta1.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);

	push();
	image(jkt1, (-mouseX + width) - jkt1.width / 2, 0);
	pop();

	push();
	image(jkt0, mouseX - jkt0.width / 2, height - jkt0.height);
	pop();

}