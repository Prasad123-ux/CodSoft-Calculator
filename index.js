function solve(val){
    let v= document.getElementById("input")
    v.value+= val;
}

function Result(){
    let num1 = document.getElementById("input").value;
    let num2 = eval(num1);
   document.getElementById("input").value = num2;
   
}
function Clear(){
      let inp=document.getElementById("input")
      inp.value=" ";
     

}
function Back(){
    var ev = document.getElementById("input");
    ev.value = ev.value.slice(0,-1);
}