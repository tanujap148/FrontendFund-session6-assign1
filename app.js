
function myFunction(){
	var area =1;
	var rad = document.getElementById("numId").value;
	area = 3.14*rad*rad;
	document.getElementById("myId").innerHTML = "Area of circle is "+area;
}