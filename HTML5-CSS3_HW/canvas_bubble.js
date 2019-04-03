
var canvas = document.getElementById("c1");
var ctx = canvas.getContext("2d");
var color = ["cornflowerblue", "darksalmon", "rgb(211, 161, 161)", "mediumpurple", "crimson", "pink", "yellow"];

var z = 10;


/*canvas.onmousemove = function (){
    for(var i = 0; i < color.length; i++){
        ctx.arc(300, 200, 10, 0, Math.PI*2, false);
        ctx.fillStyle = color[i];
        ctx.fill();
    } 
}*/ 
//     ctx.clearRect(0, 0, 600, 400);   setInterval(selectColor, 1000);   
// ctx.clearRect(0, 0, 600, 400);
//  function selectColor(){       
// }

        

    function colorBubble() {
        //ctx.beginPath();
        //ctx.clearRect(0, 0, 1300, 600);

        for(var i = 0; i < color.length; i++){

            ctx.arc(650, 300, z, 0, Math.PI*2, false);
            
            ctx.fillStyle = color[i];
            ctx.globalAlpha = 0.2;

            if(z == 800){
                ctx.beginPath();
                ctx.globalAlpha = 1;
                ctx.clearRect(0, 0, 1300, 600);
                z = 10; 

                ctx.font = "bold 40px Segoe UI";
                var text = "color";
                var w = ctx.measureText(text);

                ctx.shadowColor = color[i];
                ctx.shadowOffsetX = 5;
                ctx.shadowOffsetY = 5;
                ctx.shadowBlur = 20;

                ctx.fillText(text,(ctx.canvas.width - w.width) / 2, 150);   
                
            }
            
            else{
                
                z = z + 10; 
            }
            
        ctx.fill();
        }    
    }

    var timer = setInterval( colorBubble, 500);


    canvas.onmousedown = function(){
        clearInterval(timer);
    }
   






   // canvas.addEventListener("mouseleave", colorBubble, false);
    
