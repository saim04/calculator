function number(num) {
	var result=document.getElementById('result')
	result.value+=num
}
function clearbtn(){
	var result=document.getElementById('result')
	result.value=""	
}
function output(){
	var result=document.getElementById('result')
	result.value=eval(result.value)	
}