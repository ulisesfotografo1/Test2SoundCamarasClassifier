// Global variable to store the classifier
let classifier;

// Label
let label = 'Listening...';

// Teachable Machine model URL (reemplaza con tu modelo)
let soundModel = 'https://teachablemachine.withgoogle.com/models/GXDOo_KT0/';

function preload() {
   let options = { probabilityThreshold: 0.7 };
   // Load the model
   classifier = ml5.soundClassifier(soundModel + 'model.json', options);
}

function setup() {
   createCanvas(320, 240);
   // Start classifying (corregido)
   classifier.classifyStart(gotResult);
}

function draw() {
   background(0);
   // Draw the label in the canvas
   fill(255);
   textSize(32);
   textAlign(CENTER, CENTER);
   text(label, width / 2, height / 2);
}

// Callback function for when classification has finished
function gotResult(results) {
   // Update label variable which is displayed on the canvas
   label = results[0].label;
 }