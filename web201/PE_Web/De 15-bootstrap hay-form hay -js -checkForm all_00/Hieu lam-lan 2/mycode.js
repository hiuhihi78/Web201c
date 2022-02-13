function checkForm(){
    var fullName = document.getElementById('fullName').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    if(fullName == ''){
        alert('Name must be not empty');
    }
    if(phone == ''){
        alert('Phone must be not empty');
    }
    if(email == ''){
        alert('Email must be not empty');
    }

    if (fullName != '' && phone != '' && email != '') {
        alert('Welcome ' + fullName + ',\n' + 'We will respond to you as soon as possible');
        var info = window.open('', '', 'width=300,height=300');
        info.document.write('<h1>Check your information</h1>' + 'Your name: ' + fullName + '<br>Your phone: ' + phone + '<br>Your email: ' + email);
        var wantReload = window.confirm('Are you want reload page');
        if(wantReload==true) {
            window.location.reload();
        }else {
            alert('Thanh u');
        }
        var getMoreinfo = window.prompt('Put your question here!');
    }
}