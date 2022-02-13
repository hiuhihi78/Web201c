function show(){
    var fullName = document.getElementById('fullName').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    if(fullName =='' || phone == '' || email == ''){
        alert('Invalid username or phone or email');
    }

    if(fullName != '' && phone != '' && email != ''){
        alert('Shosen has received your information \n We will contact you as soon as possible');
    }
}