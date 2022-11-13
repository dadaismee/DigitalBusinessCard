import React from "react";
import Sketch from "react-p5"

const TestImg = ( sketch ) => {

const setup = (p5, canvasParentRef) => {
  const cnv = p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
};

const draw = (p5) => {
  // p5.background(255);
  p5.noStroke();
  p5.fill(
    p5.map(p5.mouseX, 0 , p5.width, 0, 255),
    p5.map(p5.mouseY, 0 , p5.height, 0, 100), 50);
  p5.ellipse(p5.mouseX, p5.mouseY, p5.mouseX / 4, p5.mouseY / 4);

  if (p5.mouseIsPressed) p5.clear();
}

return (
  <div className="sketch__container">
    <Sketch setup={setup} draw={draw}/>
  </div>
)
}

export default TestImg