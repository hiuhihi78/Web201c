function ChangeImg(nameDish){
    var img = document.getElementById(nameDish);
    if(nameDish === 'MiQuangImg'){
        img.src = 'images/Miquang02.jpg';
    }
    if(nameDish === 'spingroll'){
        img.src = 'images/spingroll02.jpg';
    }
}


function UndoImg(nameDish){
    if(nameDish === 'MiQuangImg'){
        img.src = 'images/miquang.jpg';
    }
    if(nameDish === 'spingroll'){
        img.src = 'images/spingroll.jpg';
    }
}