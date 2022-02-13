function control(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var content = document.getElementById('content').value;
    var university = document.getElementById('university').value;
    var allFill = false;
    if(name == ''&& content == ''&& email==''){
        window.alert('Đừng để trống: tên email nội dung');
    }else if(name == ''){
        window.alert('Đừng để trống: tên');
    }else if(email == ''){
        window.alert('Đừng để trống: email');
    }else if(content == ''){
        window.alert('Đừng để trống: nội dung');
    }

    if(name != ''&& content != ''&& email!=''){
        var myWindow = window.open("","", "width=300,height=300");
        myWindow.document.write('<h1> Vui lòng xem lại</h1>');
        myWindow.document.write('<p>tên của bạn:'+name+'</p>');
        myWindow.document.write('<p>email của bạn:' + email+'</p>');
        myWindow.document.write('<p>nội dung:' + content+'</p>')
        myWindow.document.write('<p>đơn vị đào tạo bạn chọn:' + university+'</p>');
    }


}