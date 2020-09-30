function formRating(){
    var alasan = document.getElementById('alasan').value;

    if(alasan == ""){
        window.alert("Please enter your alasan."); 
        alasan.focus(); 
        return false;
    }
    window.confirm("Thank You")
    return true;
}