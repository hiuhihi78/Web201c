function zoomout(img) {
    var frame = document.getElementById('frame');
    frame.innerHTML=  "<img src=" + img.src + ">";
    frame.style = "display: block;";

}

function warning(){
    var name = document.getElementById('yourname').value;
    var email = document.getElementById('email').value;
    var content = document.getElementById('content').value;
    if(name == '' || email == '' || content == ''){
        window.alert('Please fill all field');
    }
    if(name != '' && email != '' && content != ''){
        var confirm = window.confirm('Mess send');
        if(confirm == true){
            location.reload();
        }
    }
}