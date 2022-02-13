// function Showtable(){
//     var click = document.getElementById('view');
//     var table = document.getElementById('tableProduct');
//     if(table.style.display = 'none'){
//         click.innerHTML = 'View Promotion Food';
//         table.style.display = 'block'
//     }else{
//         click.innerHTML = 'Hide Promotion Food';
//         table.style.display = 'none';
//     }
// }

function Showtable() {
    var table = document.getElementById('tableProduct');
    var click = document.getElementById('view');
    if(table.style.display=='none'){
        click.value='Hide Promotion Food';
        table.style.display='block';
    }else{
        click.value='View Promotion Food'
        table.style.display='none';
    }
}

