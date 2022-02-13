// window.alert("") - hiển thị khung thông báo
// window.prompt(""); - tạo 1 khung gồm 1 ô trống để lấy thông tin ng dùng
// window.confirm("") - tạo ra 1 khung thông báo gồm 2 lựa chọn yes no
// document.write(""); - in ra màn hình ở một tab khác
// innerHTML = "";
// console.log("");

function openME() {
    var x = document.getElementsByClassName['index'];
    // Cách 1 : change the style directly 
    // x[0].style.display = "block";
    // x[1].style.display = "block";
    //Cách 2 : change by class name in css
    x.ClassName = "open"
}


function closeMe() {
    var x = document.getElementsByClassName['index'];
    // Cách 1
    // x[0].style.display = "none";
    // x[1].style.display = "none";
    //Cách 2
    x.ClassName = "close";
}


// function closeMe() {
//     var x = document.getElementById("imgJavaScript");
//     // Cách 1
//     x.style.display = "none";
//     //Cách 2
//     // x.ClassName = "close";
// }



// arrray
/*

Declare
var x = [10,2,5];
var food = ['banana', 'apple'];
var img = document.getElementsByClassName['imgs'];
var listItems = document.getElementsbyTagName['li'];

- các phần tử mảng có thể k cùng kiểu dũ liệu
var info = ["hieu", 134, false];

Get Element
x[1]

- array như là 1 đỗi tượng có các phương thức như length, sort(), push()
x.length
x.sort();
x.push(23); -thêm phần tử mới vào mảng

*/
var fruits = ["banana", "orange", "apple", "mango"];

function loadFruits() {
    document.getElementById("fruits").innerHTML = fruits;
}

function myArray() {
    var myFruit = prompt("What is your favorite food?");
    fruits[fruits.length] = myFruit;
    document.getElementById("fruits").innerHTML = fruits;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 20, 3];

function loadNumber() {
    document.getElementById("numbers").innerHTML = numbers;
}

function caculateAverage() {
    var sum = 0;
    var count = 0;
    for (i = 0; i < numbers.length; i++) {
        sum = sum + i;
        count = count + 1;
    }
    var average = sum / count;
    document.getElementById("avg").innerHTML = average;
}

// câu lệnh điều khiển

function enterName() {
    while (true) {
        var name = prompt("Please enter your name!");
        if (name != "") {
            document.getElementById("nameInput").innerHTML = "Your name is " + name;
            window.alert("Hello, " + name)
            return;
        } else {
            window.alert("You not input eny thing! please re-enter your name!")
            continue;
        }
    }
}

// js for form
function nickNameFuction() {
    var haveNickName = document.getElementById("checkNickName");
    if (haveNickName.checked) {
        document.getElementById("inputNick").style.display = "inline";
        document.getElementById("nickName").setAttribute("required", "true");
    } else {
        document.getElementById("nickName").removeAttribute("required");
        document.getElementById("inputNick").style.display = "none";
    }

}


// function billingFunction() {
//     if (document.getElementById("same").checked) {
//         document.getElementById("billingName").value = document.getElementById("shippingName").value;
//         document.getElementById("billingZip").value = document.getElementById("shippingZip").value;
//     } else {
//         document.getElementById("billingName").value = "";
//         document.getElementById("billingZip").value = "";
//     }
// }



window.open(URL,name,specs,replace)
var myWindow = window.open("", "", "width=200,height=100");
// Parameter	Description


// URL	Optional. Specifies the URL of the page to open. If no URL is specified, a new window/tab with about:blank is opened


// name	Optional. Specifies the target attribute or the name of the window. The following values are supported:
// _blank - URL is loaded into a new window, or tab. This is default
// _parent - URL is loaded into the parent frame
// _self - URL replaces the current page
// _top - URL replaces any framesets that may be loaded
// name - The name of the window (Note: the name does not specify the title of the new window)

// specs	Optional. A comma-separated list of items, no whitespaces. The following values are supported:
// channelmode=yes|no|1|0	Whether or not to display the window in theater mode. Default is no. IE only
// directories=yes|no|1|0	Obsolete. Whether or not to add directory buttons. Default is yes. IE only
// fullscreen=yes|no|1|0	Whether or not to display the browser in full-screen mode. Default is no. A window in full-screen mode must also be in theater mode. IE only
// height=pixels	The height of the window. Min. value is 100
// left=pixels	The left position of the window. Negative values not allowed
// location=yes|no|1|0	Whether or not to display the address field. Opera only
// menubar=yes|no|1|0	Whether or not to display the menu bar
// resizable=yes|no|1|0	Whether or not the window is resizable. IE only
// scrollbars=yes|no|1|0	Whether or not to display scroll bars. IE, Firefox & Opera only
// status=yes|no|1|0	Whether or not to add a status bar
// titlebar=yes|no|1|0	Whether or not to display the title bar. Ignored unless the calling application is an HTML Application or a trusted dialog box
// toolbar=yes|no|1|0	Whether or not to display the browser toolbar. IE and Firefox only
// top=pixels	The top position of the window. Negative values not allowed
// width=pixels	The width of the window. Min. value is 100

// replace	
// Deprecated
// Specifies whether the URL creates a new entry or replaces the current entry in the history list. The following values are supported:
// true - URL replaces the current document in the history list
// false - URL creates a new entry in the history list
// Warning
// Chrome throws an exception when using this parameter.

// Source: Bugs Chromium Issue 1164959.