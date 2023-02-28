function display(){ 
    try{ var name = document.getElementById("name").value;
    var email = document.getElementById("email").value; 
    var phone = document.getElementById("phone").value; var college = document.getElementById("college").value; 
    var year = document.getElementById("year").value; var branch = document.getElementById("branch").value; 
    if(name == "" || email == "" || phone == "" || college == "" || year == "" || branch == ""){ 
        throw "Please fill all the fields"; 
}
    else if(!validateEmail(email)){ throw "Please enter a valid email address"; 
}   else if(!validatePhone(phone)){ throw "Please enter a valid phone number"; 
}   else{ alert("Registration Successful"); 
} } 
catch(err){ alert(err); } 
}  
function validateEmail(email)  
{
    var re = /\S+@\S+\.\S+/; 
    return re.test(email); 
} 
function validatePhone(phone)  
{ 
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/; 
    return re.test(phone); 
} 
 
