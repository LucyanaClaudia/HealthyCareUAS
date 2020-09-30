function formRegistrasi()
{
    var fullname = document.getElementById('form-fullname').value;
    var username = document.getElementById('form-username').value;
    var password = document.getElementById('form-password').value;
    var gender = document.getElementsByName('form-gender');
    var genderValue =false;
    var dob = document.getElementById('dob').value;
    var format = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    var email = document.getElementById('form-email').value;

    if (fullname== "")                                  
    { 
        window.alert("Please enter your name."); 
        fullname.focus(); 
        return false; 
    } 

    if (username== ""){
        window.alert("Please enter your username."); 
        username.focus(); 
        return false; 
    }

    if (password== "")                        
    { 
        window.alert("Please enter your password."); 
        password.focus(); 
        return false; 
    }

    for(var i=0; i<gender.length; i++){
        if(gender[i].checked== true){
            genderValue = true
        }
    }
    if (!genderValue)
    {
        window.alert("Please choose your gender."); 
        return false; 
    }
    if(dob == ""){
        window.alert("Please enter your DOB."); 
        dob.focus(); 
        return false; 
    }
    else if(!dob.match(format))
    {
        window.alert("Please enter your DOB in the format dd/mm/yyyy");
        return false;
    }
    if (email == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    else if(!email.includes('@') || !email.includes('.'))
    {
        window.alert("Email must contain @ and.")
        email.focus();
        return false;
    }
    window.confirm("CONFIRMATION BOX\nFullname : "+fullname+"\nUsername : "+username
    +"\nPassword : "+password+"\nGender : "+gender+"\nTanggal Lahir : "+dob+"\nEmail : "+email)
    return true;
}