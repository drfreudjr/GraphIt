'use strict'

const cl = console.log;
window.onload = function () {           // onload wrapper                                  
    let canvas;                             
    let context; 
    addEventListener("resize", sizeCanvas); 
    sizeCanvas()                            // create initial canvas

    function sizeCanvas () {                // Create or resize 

        if (canvas === undefined) {         
            canvas = createCanvas();        
        }

        function createCanvas () {   
            const canvas = document.createElement("canvas"); 
            canvas.style.position = "absolute"; 
            canvas.style.left     = "0px";      
            canvas.style.top      = "0px";

            document.body.appendChild(canvas);  // Add to document
            context = canvas.getContext("2d");  
            return canvas;
        }

        canvas.width  = window.innerWidth; 
        canvas.height = window.innerHeight; 
        main()     
    }

    function main() {  // wrapper that gets called on resize event

        renderFrame()
        function renderFrame () {
            let fps = 60    // set lower to throttle for faster that is multiplr frames/paint 
            setTimeout(function() {
                plotFrame() // plot the frame 
                requestAnimationFrame(renderFrame) // then draw it
           }, 1000 / fps)
    }


    let graphIt = {
        radius : 10,

    }

    function getTickSize() {
        let smallerAxis = null
        if (innerHeight < innerWidth)
            smallerAxis = innerHeight
        else
            smallerAxis = innerWidth
        return (smallerAxis/radius+1) // add 1 to avoid fractional issues
    }

    function drawAxis () {
        context.beginPath() // draw axis
        context.moveTo(0, innerHeight/2)
        context.lineTo(innerWidth, innerHeight/2)
        context.moveTo(innerWidth/2,0)
        context.lineTo(innerWidth/2,innerHeight)
        context.stroke()
    }

    function plotFrame () {
        context.fillStyle = 'orange'
        context.fillRect(0,0,canvas.width,canvas.height)

        context.setTransform(1,0,0,1,0,0)
        context.strokeStyle = 'black'
        context.lineWidth = 1
        drawAxis()
    }

    }   // end main wrapper
}   // end onload wrapper