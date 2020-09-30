function formForum(){
    var subject = document.getElementById('form-subject').value;
    var name = document.getElementById('form-name').value;
    var message = document.getElementById('form-message').value;

    if(subject ==""){
        window.alert("Please enter your subject."); 
        subject.focus(); 
        return false;
    }
    if(name == ""){
        window.alert("Please enter your name."); 
        name.focus(); 
        return false;
    }
    if(message == ""){
        window.alert("Please enter your Message."); 
        message.focus(); 
        return false;
    }
    window.confirm("Thank You")
    return true;
}