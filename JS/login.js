function formLogin(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username ==""){
        window.alert("Please enter your username");
        username.focus();
        return false;
    }
    if(password==""){
        window.alert("Please enter your password");
        password.focus;
        return false;   
    }
    window.confirm("CONFIRMATION BOX\nUsername : "+username +"\nPassword : "+password)
    return true;
}