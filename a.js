let name=document.getElementById('name');
let email=document.getElementById('email');
let dob=document.getElementById('dob');
let passoword=document.getElementById('passoword');
// let i=document.getElementById("in");
let btn=document.getElementById('btn');
btn.addEventListener("click",()=>{
    
    if(name.value==""){
        alert("enter you name")
    }
    else if(email.value==""){
        alert("enter your email")
    }
    
    else if(password.value==""){
        alert("enter your password")
    }
    else if(dob.value==""){
        alert("enter your date of birth")
    }
    // else if(i.value!=true){
    //     // alert("chose the rembember option")
    // }
    
    else{
    let student={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
        dob:document.getElementById('dob').value,
        value:document.getElementById("in").checked,
    }
    let names=localStorage.getItem('names');
    if(names==null){
        namesobj=[];
    }
    else{
        namesobj=JSON.parse(names);
    }
    // localStorage.setItem("student",JSON.stringify(student));
    namesobj.push(student);
    localStorage.setItem("names",JSON.stringify(namesobj));
    name.value="";
    email.value="";
    password.value="";
    dob.value="";
    insertdata();
}
})
function insertdata(){

    let names=localStorage.getItem('names');
    if(names==null){
        namesobj=[];
    }
    else{
        namesobj=JSON.parse(names)
    }
    let html="";
    namesobj.forEach(element => {
        html+=`<tr textaline="center">
        <td>${element.name}</td>
    
    
	<td>${element.email}</td>
		
    
					<td>${element.password}</td>
				
            
					<td>${element.dob}</td>
                    <td>${element.value}</td>
				</tr>
    `
        // console.log(a)

        
    });
    let ic=document.getElementById("i-c");
    let tb=document.getElementById("t-b").innerHTML=html;

}
insertdata();
// localStorage.clear();