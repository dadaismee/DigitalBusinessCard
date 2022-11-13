import React from "react";
import Sketch from "react-p5";

const RandVar = ( p ) => {
  
  let angle = 0;
  let randAmt = 2;
  let actRandSeed;
  let palette = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];

  const setup = (p, canvasParentRef) => {
    // p.createCanvas({
    // size: 'A4',
    // ppi: 300});
    const cnv = p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef);
    p.angleMode(p.DEGREES);
    p.colorMode(p.HSB, 100, 100, 100);
    actRandSeed = 0;
    p.loop();
  }

  const draw = p => {
    p.randomSeed(actRandSeed)
    p.background(220);
    const dim = p.min(p.width, p.height); 
    const margin = dim * 0.125; 
    
    let nShapes = p.int(p.map(p.mouseY, 2, p.max(p.mouseY, p.height), 2, 10));
    let sizeX = (p.width - margin * 2)/ nShapes;
    let sizeY = (p.height - margin * 2)/ nShapes;
    let nInnerShapes = p.map(p.mouseX, 1, p.max(p.width, p.mouseX), 1, 10);
    
    for (let y = 0; y < nShapes; y++) {
      for (let x = 0; x < nShapes; x++) {
        p.push();
        p.translate(margin + x * sizeX + sizeX/2, margin + y * sizeY + sizeY/2);
        p.rotate(angle);
        p.noFill();
        p.beginShape();
        p.vertex(p.random(-20, 20), p.random(-20, 20));
        for (let i = 0; i < nInnerShapes; i++) {
          p.fill(p.random(palette));
          p.strokeWeight(2.5);
          p.stroke(p.random(palette));
          // p.noStroke();
          p.bezierVertex(p.random(-sizeX/randAmt, sizeX/randAmt), 
                      p.random(-sizeY/randAmt, sizeY/randAmt),
                      p.random(-sizeX/randAmt, sizeX/randAmt), 
                      p.random(-sizeY/randAmt, sizeY/randAmt),
                      p.random(-sizeX/randAmt, sizeX/randAmt), 
                      p.random(-sizeY/randAmt, sizeY/randAmt));
          p.endShape(p.CLOSE);
        }; 
        p.pop();
      }; 
    }; 
      p.mousePressed = function() {
        actRandSeed = p.random(10000);
      }

      p.keyReleased = function() {
        if (p.keyCode == p.RIGHT_ARROW) angle+=5;
        if (p.keyCode == p.LEFT_ARROW) angle-=5;
        if (p.keyCode == p.UP_ARROW) randAmt+=0.5;
        if (p.keyCode == p.DOWN_ARROW) randAmt-=0.5; 
      }
    }



  return (
    <div className="sketch__container">
      <Sketch setup={setup} draw={draw}/>
    </div>
  )
}


export default RandVar;