// Function to get javascript code from code blocks and execute
function compileAndExecute(){

    var code = Blockly.JavaScript.workspaceToCode(workspace);
    eval(code)

}

function canvasReset(){
    myp5.background(0)
    turtle.stateReset()
}

/* Functions to control the motion of turtle*/
// Class turtle 
class Turtle{

    constructor(){
        this.stateReset()
        
    }

    stateReset(){
        // Current state
        this.x = 0
        this.y = 0
        this.dir = myp5.createVector(1,0)
        // Saved state
        this.x0 = 0
        this.y0 = 0
        this.dir0 = myp5.createVector(1,0)

        // Pen state
        this.penDown = true
    }


    saveState(){
        this.x0 = this.x
        this.y0 = this.y
        this.dir0 = this.dir.copy()
    }

    loadState(){
        this.x = this.x0
        this.y = this.y0
        this.dir = this.dir0.copy()
    }

    pennState(){
        this.penDown = !this.penDown
    }

    rotateBy(ang){
        this.dir.rotate(ang)
    }

    walk(units_){
        let x1 = this.x + units_*this.dir.x
        let y1 = this.y + units_*this.dir.y

        

        if(this.penDown){
            console.log(x1, y1)
            myp5.line(this.x, this.y, x1,y1)
        }

        this.x = x1;
        this.y = y1;
    }



   
}

/***
 * Main P5js sketch 
*/
const s = ( p ) => {
  
     p.setup = function() {
        const elem = document.querySelector(".Canvas");
        const rect = elem.getBoundingClientRect();
        p.createCanvas(rect.width, rect.height);
        p.background(0)
        p.stroke(255)
        p.strokeWeight(2)

        p.angleMode(p.DEGREES);
        
        //   p.line(0, 0.5*p.height, p.width, 0.5*p.height)
        //   p.line(0.5*p.width,0, 0.5*p.width, p.height)
        

        p.stroke(100)
        p.strokeWeight(4)
        p.noLoop()
    };
  
    p.draw = function() { p.translate(p.width*0.5, p.height*0.5) };

};
  
let myp5 = new p5(s, "canvas");
let turtle = new Turtle()






