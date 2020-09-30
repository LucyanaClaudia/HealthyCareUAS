function formFeedback(){
    var feedback = document.getElementById('feedback').value;

    if(feedback == ""){
        window.alert("Please enter your feedback."); 
        feedback.focus(); 
        return false;
    }
    window.confirm("Thank You")
    return true;
}