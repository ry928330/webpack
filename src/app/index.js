import './style.css';
var vender = require('../vender/index');
window.onload = function() {
    var test = document.getElementById('test');
    var testVender = new vender();
    testVender.sayHello();

    var div = document.createElement('div');
    div.setAttribute('id', 'hello');
    div.innerHTML = 'hello, world';
    document.body.appendChild(div);

    console.log(2333, div);

}