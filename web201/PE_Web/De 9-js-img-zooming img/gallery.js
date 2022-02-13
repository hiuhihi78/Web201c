function upDate(img){
    var zommImage = document.getElementById('image');
    zommImage.innerHTML = "<img src=" + img.src + ">";
    zommImage.style = "display: block;";
}

function unDo(){
    var zommImage = document.getElementById('image').innerHTML = '';
}