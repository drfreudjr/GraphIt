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

    function plotFrame () {
        context.fillStyle = 'orange'
        context.fillRect(0,0,canvas.width,canvas.height)

        context.fillStyle = 'red'
        context.fillRect(innerWidth/3, innerHeight/3, innerWidth/3,innerHeight/3)

    }

    }   // end main wrapper
}   // end onload wrapper