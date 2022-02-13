




function show() {
    var table = document.getElementById('team');
    var click = document.getElementById('showmore');
    if(table.style.display=='none'){
        click.innerHTML='Show less';
        table.style.display='inline-block';
    }else{
        click.innerHTML='Show more'
        table.style.display='none';
    }
}



function check() {
    var email = document.getElementById('email').value;
    var usa = document.getElementById('USA').checked;
    var uk = document.getElementById('UK').checked;
    var capcha = document.getElementById('capcha').value;

    if (email == '') {
        window.alert('Please fil your email!');
        return;
    }

    if (usa == false && uk == false) {
        window.alert('Please check your option!');
        return;
    }

    if (capcha != 'cVr12TY') {
        window.alert('Please check your capcha!');
        return;
    }
    window.alert('Thank you very much!');
    location.reload();
}