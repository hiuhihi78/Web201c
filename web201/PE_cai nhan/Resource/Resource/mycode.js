function CheckForm(){
    var fullName = document.getElementById('fullName').value;
    var phoneNumber = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    if(fullName ===''){
        alert('username is invalid');
    }
    if(phoneNumber === ''){
        alert('phone number is invalid');
    }
    if(email === ''){
        alert('email is invalid');
    }
    if(fullName != '' && email != '' && phoneNumber != ''){
        alert('Welcome ' + fullName + '\n' + 'We will respond to you as soon as possible');
        var wantReload = confirm('Are you want to reload the page?');
        if(wantReload === false){
            
        }else{
            location.reload();
        }
    }

}