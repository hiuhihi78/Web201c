// function Show(){
//     var formDisplay = document.getElementById('myform').style.display;
//     var text = document.getElementById('mytext');
//     if(formDisplay === 'none'){
//         text.document.innerHTML = 'Show register form';
//         formDisplay = 'block';
//     }else{
//         text.document.innerHTML = 'Hide register form';
//     }
// }

function Show(){
    if(document.getElementById('myform').style.display === 'none'){
        document.getElementById('myform').style.display = 'block';
        document.getElementById('mytext').innerHTML= 'Hide register form';
    }else{
        document.getElementById('myform').style.display = 'none';
        document.getElementById('mytext').innerHTML= 'Show register form';
    }
}

function checkForm(){
    var name = document.getElementById('t1').value;
    var email = document.getElementById('t2').value;

    if(name == '' || email == ''){
        alert('please fill all field!');
    }
}