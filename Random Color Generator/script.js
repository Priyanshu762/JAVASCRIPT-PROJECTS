const getColor =()=>{
    // const copied=document.getElementById("Copy")
 const rnum=Math.floor(Math.random()*16777215);
 const hexa="#"+ rnum.toString(16);
 console.log(hexa);
 console.log();
 document.body.style.backgroundColor=hexa;
 document.getElementById("color").innerHTML=hexa;
//  if(copied){
//  }
}


document.getElementById("btn").addEventListener(
    "click"
    ,getColor);
    getColor();
        