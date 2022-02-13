function Show(){
    var text = document.getElementById('mytext');
    var form = document.getElementById('myform');

    if(form.style.display == 'block'){
        text.innerHTML = 'Show Register Form';
        form.style.display = 'none';
    }else{
        text.innerHTML = 'Hide Register Form';
        form.style.display = 'block';
    }
}

function checkForm(){
    var name = document.getElementById('t1').value;
    var email = document.getElementById('t2').value;
    if(name == ''){
        alert('Please reenter your name!\nYour name must be not empty!');
    }
    if(email == ''){
        alert('Please reenter your email!\nYour email must be not empty!');
    }
    if(name != '' && email != ''){
        alert('Thank you!');
        window.location.reload();
    }   
}