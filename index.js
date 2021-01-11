var nos=document.querySelectorAll(".number");
var ops=document.querySelectorAll(".op")
var disp='';
var opr='';
var prev='';
var curr='';
var result='';
function calculate(prev,curr,opr)
{ switch(opr){
  case "+":
  return parseFloat(prev)+parseFloat(curr);
  break;
  case "-":
  return parseFloat(prev)-parseFloat(curr);
  break;
  case "×":
  return parseFloat(prev)*parseFloat(curr);
  break;
  case "÷":
  return parseFloat(prev)/parseFloat(curr);
  break;
}

}
//alert(noofbuttons);
for(var i=0;i<nos.length;i++)
{
  document.querySelectorAll(".number")[i].addEventListener("click",function()
{
  disp=disp+this.innerHTML.toString();
  curr=curr+this.innerHTML.toString();
  document.querySelector(".display").innerHTML=disp;
});
}
for(var i=0;i<ops.length;i++)
{
  document.querySelectorAll(".op")[i].addEventListener("click",function()
{ if(disp==='') return;
  if(this.innerHTML!=="="){

  disp=disp+this.innerHTML.toString();
  document.querySelector(".display").innerHTML=disp;
  if(prev==='')
  {
    prev=curr;
    curr='';
    opr= this.innerHTML.toString();
    //alert(opr);
    //alert(prev);
  }
  else{
    //alert(opr);
    prev=calculate(prev,curr,opr);
    curr='';
    opr=this.innerHTML.toString();
    //alert(prev);
  }
}
else{
  var result=calculate(prev,curr,opr);
  //alert(result);
  document.querySelector(".result").innerHTML=result;
  prev=result;
}
});
}
document.querySelector(".ext").addEventListener("click",function(){
  disp='';
  opr='';
  prev='';
  curr='';
  result='';
  document.querySelector(".display").innerHTML=disp;
  document.querySelector(".result").innerHTML=result;


});
