 var instr
    var sno =0;
    
window.onload = function() {
  //var c = document.getElementById("myCanvas");
 // var ctx = c.getContext("2d");
  //var o = document.getElementById("o");
     //var odown = document.getElementById("o-down");
    // var re = document.getElementById("re");
  // ctx.drawImage(odown, 9, 20);
    //ctx.drawImage(re,10,20)
    //ctx.drawImage(o, 10, 10);
   
}
function datain(){
    instr = document.getElementById("fname").value
   
    var c = document.getElementById("myCanvas");
     var ctx = c.getContext("2d");
     
    
    ctx.clearRect(0, 0, c.width, c.height);
     generate(instr,ctx)
}
    
function createnew(){
    var can = document.createElement("CANVAS");
     sno++;
    var ctx = can.getContext("2d");
    ctx.canvas.width  =150;
    ctx.canvas.height  = 400;
    ctx.clearRect(0, 0, can.width, can.height);
    ctx.id=sno  
    
    can.addEventListener('click', function() {
        clickedele(ctx)
       // can.remove();
    console.log(ctx.id)}, false);
    
    can.addEventListener('mouseover', function() {
       ctx.canvas.style.border= "3px solid #ffa8a8";}, false);
    can.addEventListener('mouseout', function() {
       ctx.canvas.style.border= "";}, false);
    
    instr = document.getElementById("fname").value
    generate(instr,ctx)
  document.body.appendChild(can);
}
    
    
function clickedele(ctx) {
    if(!ctx.canvas.style.border)
     ctx.canvas.style.border= "3px solid #ffa8a8";
    else ctx.canvas.style.border= "";
}
function generate(ins,ctx) {
    //console.log(ins[0])
     var base= 200,up,y=25;
    
     var o = document.getElementById("o");
     var odown = document.getElementById("o-down");
     var re = document.getElementById("re");
    //up = ins.indexOf("o")
     while(ins.length)
        {
            if(ins[ins.length-1]=='o' )
                {   //console.log('here')
                    if(ins.length==1)
                        {
                           ctx.drawImage(o, y, base) 
                        }
                    else 
                        {
                            ctx.drawImage(odown, y-1, base)
                        }
                    base=base-10
                    ins=ins.slice(0,ins.length-1)
                }
            else if(ins[ins.length-1]=='e'&& ins[ins.length-2]=='r') {
                ctx.drawImage(re,y,base)
                base=base-10
                ins=ins.slice(0,ins.length-2)
            }
            
           else if(ins[ins.length-1]=='&')
               {
                   base=base-50
                   ins=ins.slice(0,ins.length-1)
               }
           else { console.log("error")
               ctx.clearRect(0, 0, c.width, c.height);
               document.getElementById("error").innerHTML= "Enter a proper String";
                 break;
           }    
        
        }
    
}