function submitform()
{	
	LocalSto();	;
	maketable();
}
function LocalSto()
{
	if (localStorage) 
	{
		localStorage.clear();
		document.getElementById("ContactForm1").addEventListener("submit",LoSto());
	}
}
function LoSto() 
{
	var name = document.getElementById("name").value;
	localStorage.setItem("Name", name);
	var email = document.getElementById("email").value;
	localStorage.setItem("Email", email);
	var dob = document.getElementById("date").value;
	localStorage.setItem("Date of Birth", dob);
	var phn = document.getElementById("phoneno").value;
	localStorage.setItem("Phone Number", phn);
	var depno = document.getElementById("depno").value;
	localStorage.setItem("Number of Dependents", depno);
}
function maketable()
{
	document.getElementById("nametab").innerHTML="Name:";
	var printname=document.getElementById("printname");
	printname.innerHTML=localStorage.getItem("Name");
	document.getElementById("emailtab").innerHTML="Email:";
	var printname=document.getElementById("printemail");
	printname.innerHTML=localStorage.getItem("Email");
	document.getElementById("dobtab").innerHTML="Date of Birth:";
	var printname=document.getElementById("printdob");
	printname.innerHTML=localStorage.getItem("Date of Birth");
	document.getElementById("phntab").innerHTML="Phone Number:";
	var printname=document.getElementById("printphn");
	printname.innerHTML=localStorage.getItem("Phone Number");
	document.getElementById("depnotab").innerHTML="Number of dependents:";
	var printname=document.getElementById("printdepno");
	printname.innerHTML=localStorage.getItem("Number of Dependents");
}
