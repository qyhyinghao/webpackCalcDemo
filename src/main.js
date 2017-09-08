
var btn =  document.getElementById("btn");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var res =  document.getElementById("res");

var btn2 =  document.getElementById("btn2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var res2 =  document.getElementById("res2");

console.log(btn);


//引入calc.js模块
var calc = require('./calc.js');
var add = calc.add;
var sub = calc.sub;
//注册点击事件
btn.onclick = function(){
    console.log('123');
    console.log(num1);
    console.log(num1.value);
    res.value = add(num1.value-0,num2.value-0);
}

btn2.onclick = function(){
    console.log('123');
    console.log(num3);
    console.log(num3.value);
    res2.value = sub(num3.value-0,num4.value-0);
}
