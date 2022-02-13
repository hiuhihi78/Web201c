function show(){
    var show = document.getElementById('para2');
    var click = document.getElementById('para3');
    if(show.style.display == 'none'){
        click.innerHTML = 'SHOW LESS';
        show.style.display = 'inline-block';
    }else{
        click.innerHTML = 'SHOW ALL';
        show.style.display = 'none';
    }
}

function update(){
    var getInfor = document.getElementById('getInfor');
    var updateInfor = document.getElementById('updateInfor');
    if(updateInfor.style.display == 'block'){
        getInfor.style.display = 'none';
    }
}













function Enroll(){
    var fullName = document.getElementById('t1').value;
    var email = document.getElementById('t2').value;
    var password = document.getElementById('t3').value;
    var repassword = document.getElementById('t4').value;
    var submit = document.getElementById('t5').value;
    var question = document.getElementById('t6').checked;
    var discussion = document.getElementById('t7').checked;
    var meet = document.getElementById('t8').checked;

    if(fullName == '' || email == '' || password == '' || repassword == ''){
        window.alert('Please fill all fields');
        return;
    }

    if(password != repassword){
        window.alert('Your password and repassword do not match!');
        return;
    }

    if(question == false && discussion == false && meet == false){
        var confirm = window.confirm('Would you like chose the option!');
        if(confirm == false){
            window.alert('Start learning WED201c');
        }
    }
}