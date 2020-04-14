let capture;
let colorPicker;
let slider, shape;
let sound, col, item, ts, val, filters, currentColor, previousColor;
let mousePosX = [];
let mousePosY = [];

function draw() {
  currentColor = colorPicker.value();
  //  if a new color has been choosen, change the background color
  if (currentColor !== previousColor) {
       background(currentColor);  
       createLabels();
    //use a for loop and redraw all the text from the postions you have stored
    for (i = 0; i < mousePosX.length; i++) {
      text(shape, mousePosX[i], mousePosY[i]);
      fill(col);
      textFont(item);
      textStyle(ts);
      textSize(val);
      text(shape, mouseX, mouseY);
    }
    
  }


    //update the previous color so you can check colors again  
    previousColor = currentColor; 
}

 


function setup() {
  let cnv2 = createCanvas(windowWidth, windowHeight);
  cnv2.position(0, 0, "fixed");
  let cnv = createCanvas(windowWidth, windowHeight);

  cnv.position(0, 0, "fixed");

	//video
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();

  
  //typein
	input = createInput();
	input.position(30, height * 0.19);
  
  //font size
  slider1 = createSlider(0, 900, 60, 40);
  slider1.position(30, height * 0.29);
  slider1.style("width", "80px");
 


  //typefaces
  sel = createSelect();
  sel.position(30, height * 0.385);
  sel.option("Arial");
  sel.option("Times");
  sel.option("Baskerville");
  sel.option("Clarendon LT Std");
  sel.option("Courier");
  sel.option("Helvetica");
  sel.option("Akzidenz-Grotesk Std");
  sel.option("GT America Mono Trial");
  sel.selected("Helvetica");
  sel.changed(mySelectEvent);


  //fontstyle
  sele = createSelect();
  sele.position(30, height * 0.485);
  sele.option(NORMAL);
  sele.option(ITALIC);
  sele.option(BOLD);
  sele.option(BOLDITALIC);
  sele.selected(NORMAL);
  sele.changed(mySelectEvent);
  

  //filters
  selec = createSelect();
  selec.position(30, height * 0.685);
  selec.option(THRESHOLD);
  selec.option("normal");
  selec.option(GRAY);
  selec.option(INVERT);
  selec.option(DILATE);
  selec.selected("normal");
  selec.changed(mySelectEvent);


  //color
  colorPicker = createColorPicker("#ffffff");
  colorPicker.position(30, height * 0.58);
  currentColor =  colorPicker.value();
  previousColor = currentColor;
  createLabels();
 

  
}

function createLabels(){
  let gap = 32;
  let margin = 10;
  translate(margin * 2, margin * 2);
  fill("#000000");
  textFont("Prestige Elite Std");
  textSize(32);
  text("Letter Portrait", 10, 30);
  fill("#000000");
  textFont("Prestige Elite Std");
  textSize(12);
  text("Type here", 12, height * 0.145);
  text("Choose a font size",  12, height * 0.25);
  text("Choose a typeface",  12, height * 0.34);
  text("Choose a font style",  12, height * 0.44);
  text("Pick a background color",  12, height * 0.54);
  text("Choose a filter",  12, height * 0.64);
  text("Don't Forget to save Your Work!", 12, height * 0.9);
  text('To save, press "S".', 12, height * 0.935);


  line(10,height * 0.215, 180, height * 0.215)

    drawingContext.setLineDash([5, 15]);
  line(10,height * 0.305, 180, height * 0.305)

  line(10,height * 0.405, 180, height * 0.405)

  drawingContext.setLineDash([]);
	line(10,height * 0.505, 180, height * 0.505)

	line(10,height * 0.605, 180, height * 0.605)
 
	line(10,height * 0.705, 180, height * 0.705)

}

function mouseMoved() {
  val = slider1.value();

  shape = input.value();

  item = sel.value();
  ts = sele.value();
  filters = selec.value();
  col = capture.get(mouseX, mouseY);
 // store all the position in two arrays so you can have this data to redraw.
  mousePosX.push(mouseX);
  mousePosY.push(mouseY);
  fill(col);
  textFont(item);
  textStyle(ts);
  textSize(val);
  text(shape, mouseX, mouseY);
  filter(filters);
}

function mySelectEvent() {}

function keyPressed() {
  //if the key is a s
  if (key == "s") {
    //save out to a file
    save("my_great_proejct.png");
  }
}
