var canvas = document.getElementById("c1");
var ctx = canvas.getContext("2d");
var color = ["blue", "red", "green", "yellow"];

var z = 50;
/*
canvas.onmousemove = function (){
    for(var i = 0; i < color.length; i++){
        ctx.arc(300, 200, 10, 0, Math.PI*2, false);
        ctx.fillStyle = color[i];
        ctx.fill();
    }
      
}*/ 

 //     ctx.clearRect(0, 0, 600, 400);   setInterval(selectColor, 1000);
    
 //canvas.onmousemove = function (){ 


    
   // ctx.clearRect(0, 0, 600, 400);

    


 //  function selectColor(){
 
        

        
   // }


 
    setInterval(() => {
        //ctx.beginPath();
        for(var i = 0; i < color.length; i++){
            ctx.arc(300, 200, z, 0, Math.PI*2, false);
            
            z = z + 10;
            ctx.fillStyle = color[i];
            ctx.fill();
        }    
    }, 1000);



    
