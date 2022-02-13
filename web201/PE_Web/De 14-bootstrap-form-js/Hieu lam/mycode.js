function checkForm(){
    var name = document.getElementById('fullname').value;
    var phone = document.getElementById('phone').value;

    if(name === ''){
        alert('username is valid');
    }
    if(phone === ''){
        alert('phone is invalid');
    }
    if(name != '' && phone != ''){
        alert('Welcome ' + name + ',\n' + 'We will respond to you as soon as possible.');
    }
}