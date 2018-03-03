document.getElementById("Two").style.display="none";
document.getElementById("Three").style.display="none";
document.getElementById("Four").style.display="none";
document.getElementById("Five").style.display="none";
document.getElementById("Six").style.display="none";
document.getElementById("Seven").style.display="none";
document.getElementById("Eight").style.display="none";
document.getElementById("Nine").style.display="none";
document.getElementById("Ten").style.display="none";
document.getElementById("Eleven").style.display="none";
document.getElementById("Twelve").style.display="none";

//document.getElementById("x").style.visibility="hidden";

function a(){
	var x=document.getElementById("inp").value;
	//alert(x);

	if(x>=18){
		//window.location.href='Greater18.html';
			document.getElementById("One").style.display="none";
			document.getElementById("Two").style.display="";
			//document.second.display2.value ="";
			//return x;
	}
	else if(x=="") {
		document.MyForm.display1.value ="";//first
		//return x;
		//alert("Please enter the correct input!");
	}
	else if(x<18 ){
		//alert("yes");
		document.getElementById("One").style.display="none";
		document.getElementById("Three").style.display="";
		//return x;
	}
	else{
		alert("Wrong Input");
	}
	//alert(x);


}
function ba(){
	//document.second.display2.value ="";
	//document.third.display2.value ="";
	//alert(x2a);
	var x2a;
	x2a = document.getElementById("inp2a").value;
	//alert(x2a);
	if(x2a.charAt(0)=='m'){
		
		document.getElementById("Two").style.display="none";
		document.getElementById("Three").style.display="none";
		document.getElementById("Four").style.display="";
		//document.first.display2.value ="";
		//return "male";
	}
	
	else if(x2a.charAt(0)=='f'){
		document.getElementById("Two").style.display="none";
		document.getElementById("Three").style.display="none";
		document.getElementById("Five").style.display="";
		//document.first.display2.value ="";
		//return "Female";
	}
	else if(x2a=="") {
		document.MyForm.display2a.value ="";//second
		//return x2;
		//alert("Please enter the correct input!");
	}
	
	else{
		alert("Wrong Input");
	}

	
}
function bb(){
	var x2b;
	x2b = document.getElementById("inp2b").value;
	//alert(x2b);
	if(x2b.charAt(0)=='m'){
		
		document.getElementById("Two").style.display="none";
		document.getElementById("Three").style.display="none";
		document.getElementById("Four").style.display="";
		//document.first.display2.value ="";
		//return "male";
	}
	
	else if(x2b.charAt(0)=='f'){
		document.getElementById("Two").style.display="none";
		document.getElementById("Three").style.display="none";
		document.getElementById("Five").style.display="";
		//document.first.display2.value ="";
		//return "Female";
	}
	else if(x2b=="") {
		document.MyForm.display2b.value ="";//third
		//return x2;
		//alert("Please enter the correct input!");
	}
	
	else{
		alert("Wrong Input");
	}
}				
function ca(){//male
		var x = document.getElementById("inp3a").value;
		//alert(x);
		if(x==1){
			document.getElementById("Four").style.display="none";
			document.getElementById("Five").style.display="none";
			document.getElementById("Six").style.display="";
		}
		else if(x==2){
			document.getElementById("Four").style.display="none";
			document.getElementById("Five").style.display="none";
			document.getElementById("Seven").style.display="";
		}
		else if(x==3){
			document.getElementById("Four").style.display="none";
			document.getElementById("Five").style.display="none";
			document.getElementById("Eight").style.display="";
		}
		else if(x==4){
			document.getElementById("Four").style.display="none";
			document.getElementById("Five").style.display="none";
			document.getElementById("Nine").style.display="";
		}
		else if(x==5){
			document.getElementById("Four").style.display="none";
			document.getElementById("Five").style.display="none";
			document.getElementById("Ten").style.display="";
		}
		else if(x=="") {
		document.MyForm.display3a.value ="";//fourth
		//return x2;
		//alert("Please enter the correct input!");
	}
	else{
		alert("Wrong Input");
	}
	
}
function cb(){//female
		var x = document.getElementById("inp3b").value;
		//alert(x);
		if(x==1){
			document.getElementById("Four").style.display="none";
			document.getElementById("Five").style.display="none";
			document.getElementById("Six").style.display="";
		}
		else if(x==2){
			document.getElementById("Four").style.display="none";
			document.getElementById("Five").style.display="none";
			document.getElementById("Seven").style.display="";
		}
		else if(x==3){
			document.getElementById("Four").style.display="none";
			document.getElementById("Five").style.display="none";
			document.getElementById("Eight").style.display="";
		}
		else if(x==4){
			document.getElementById("Four").style.display="none";
			document.getElementById("Five").style.display="none";
			document.getElementById("Nine").style.display="";
		}
		else if(x==5){
			document.getElementById("Four").style.display="none";
			document.getElementById("Five").style.display="none";
			document.getElementById("Ten").style.display="";
		}
		else if(x=="") {
		document.MyForm.display3b.value ="";//fifth
		//return x2;
		//alert("Please enter the correct input!");
		}
		else{
		alert("Wrong Input");
		}
	
}
function da(){
	var x = document.getElementById("inp4a").value;
	if(x.charAt(0)=='y'){
		document.getElementById("Six").style.display="none";
		document.getElementById("Seven").style.display="none";
		document.getElementById("Eight").style.display="none";
		document.getElementById("Nine").style.display="none";
		document.getElementById("Ten").style.display="none";
		document.getElementById("Eleven").style.display="";
		//alert(You are a Nigerian);

	}
	else if(x.charAt(0)=='n'){
		document.getElementById("Six").style.display="none";
		document.getElementById("Seven").style.display="none";
		document.getElementById("Eight").style.display="none";
		document.getElementById("Nine").style.display="none";
		document.getElementById("Ten").style.display="none";
		document.getElementById("Twelve").style.display="";
		//alert(You are not a Nigerian);
	}
	else if(x=="") {
		document.MyForm.display4a.value ="";//sixth
		
		
	}
	else{
		alert("Wrong Input");
	}

}
function db(){
	var x = document.getElementById("inp4b").value;
	if(x.charAt(0)=='y'){
		document.getElementById("Six").style.display="none";
		document.getElementById("Seven").style.display="none";
		document.getElementById("Eight").style.display="none";
		document.getElementById("Nine").style.display="none";
		document.getElementById("Ten").style.display="none";
		document.getElementById("Eleven").style.display="";
		//alert(You are a Nigerian);
	}
	else if(x.charAt(0)=='n'){
		document.getElementById("Six").style.display="none";
		document.getElementById("Seven").style.display="none";
		document.getElementById("Eight").style.display="none";
		document.getElementById("Nine").style.display="none";
		document.getElementById("Ten").style.display="none";
		document.getElementById("Twelve").style.display="";
		//alert(You are not a Nigerian);
	}
	else if(x=="") {
		document.MyForm.display4b.value ="";//seventh
		
	}
	else{
		alert("Wrong Input");
	}
	
}
function dc(){
	var x = document.getElementById("inp4c").value;
	if(x.charAt(0)=='y'){
		document.getElementById("Six").style.display="none";
		document.getElementById("Seven").style.display="none";
		document.getElementById("Eight").style.display="none";
		document.getElementById("Nine").style.display="none";
		document.getElementById("Ten").style.display="none";
		document.getElementById("Eleven").style.display="";
		//alert(You are a Nigerian);
	}
	else if(x.charAt(0)=='n'){
		document.getElementById("Six").style.display="none";
		document.getElementById("Seven").style.display="none";
		document.getElementById("Eight").style.display="none";
		document.getElementById("Nine").style.display="none";
		document.getElementById("Ten").style.display="none";
		document.getElementById("Twelve").style.display="";
		//alert(You are not a Nigerian);
	}
	else if(x=="") {
		document.MyForm.display4c.value ="";eighth

	}
	else{
		alert("Wrong Input");
	}
	
}
function dd(){
	var x = document.getElementById("inp4d").value;
	if(x.charAt(0)=='y'){
		document.getElementById("Six").style.display="none";
		document.getElementById("Seven").style.display="none";
		document.getElementById("Eight").style.display="none";
		document.getElementById("Nine").style.display="none";
		document.getElementById("Ten").style.display="none";
		document.getElementById("Eleven").style.display="";
		//alert(You are a Nigerian);
	}
	else if(x.charAt(0)=='n'){
		document.getElementById("Six").style.display="none";
		document.getElementById("Seven").style.display="none";
		document.getElementById("Eight").style.display="none";
		document.getElementById("Nine").style.display="none";
		document.getElementById("Ten").style.display="none";
		document.getElementById("Twelve").style.display="";
		//alert(You are not a Nigerian);
	}
	else if(x=="") {
		document.MyForm.display4d.value ="";//ninth
	}
	else{
		alert("Wrong Input");
	}
	
}
function de(){
	var x = document.getElementById("inp4e").value;
	if(x.charAt(0)=='y'){
		document.getElementById("Six").style.display="none";
		document.getElementById("Seven").style.display="none";
		document.getElementById("Eight").style.display="none";
		document.getElementById("Nine").style.display="none";
		document.getElementById("Ten").style.display="none";
		document.getElementById("Eleven").style.display="";
		//alert(You are a Nigerian);
	}
	else if(x.charAt(0)=='n'){
		document.getElementById("Six").style.display="none";
		document.getElementById("Seven").style.display="none";
		document.getElementById("Eight").style.display="none";
		document.getElementById("Nine").style.display="none";
		document.getElementById("Ten").style.display="none";
		document.getElementById("Twelve").style.display="";
		//alert(You are not a Nigerian);
	}
	else if(x=="") {
		document.MyForm.display4e.value ="";//tenth
		
	}
	else{
		alert("Wrong Input");
	}
	
}