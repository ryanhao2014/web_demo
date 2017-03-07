function $(id){
           return document.getElementById(id);
       }
       function add(number1,number2){
       	return number1+number2;
       }
       function renderResult(result){
       	$("result").innerHTML=result;
       }
       function addEventHandle(){
       	var number1=$("number1").value;
       	var number2=$("number2").value;
       	var result=add(number1,number2);
       	renderResult(result);
       }
       function initEvent(){
       	$("addbtn").addEventListener("click",addEventHandle,false);
       }
       initEvent();