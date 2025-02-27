// document.write()
// console.log()
// window.alert()
// innerHTML()

// console.log('Debug');

// window.alert('Hello Javascript Developer!!');

// document.getElementById('test').innerHTML = 'Hello Students';
document.write('<h2 align="center">Javascript Variable</h2>');
document.write('<hr>');
// var,let,const
document.write('<h2>Javascript Variable with var keyword</h2>');
var name1 = 'Ritika';
// ReDeclaration Supported
var name1 = 'Kajal';
// ReAssign Supported
name1 = 'Shafiqul'; 
// Block Scope
if(1===1){
    var num1 = 98;
    document.write('Value inside the Block:'+num1+'<br>');
}
document.write('Value outside the Block:'+num1+'<br>');
document.write(name1);
document.write('<hr>');

document.write('<h2>Javascript Variable with let keyword</h2>');
let name2 = 'Aniket';
// let name2 = 'dfgjh' Redeclare Not support
name2 = 'Priya'; // ReAssign Support
document.write(name2);
if(2==2){
    let num2 = 400;
    document.write('Value inside the Block:'+num2+'<br>');
}
    // document.write('Value outside the Block:'+num2+'<br>'); Outside the block not supported

document.write('<hr>');

document.write('<h2>Javascript Variable with const keyword</h2>');
const name3 = 'Rahul';
// const name3 = 'sdfghjk' Redeclare not Support
// name3 = 'Riya'; Reassign not Support
document.write(name3);
if(3==3){
    const num3 = 45;
    document.write('Value inside the Block:'+num3+'<br>');
}
// document.write('Value Outside the Block:'+num3+'<br>'); Outside the block not supported
document.write('<hr>');
document.write('<hr>');

document.write('<h2 align="center">Javascript Function</h2>');
document.write('<hr>');


document.write('<h3>Javascript Basic Function</h3>');
function msg(){
    document.write('Hello students!!');  // Function Declaration
}
msg() // Function Calling

document.write('<h3>Javascript Function with parameters and arguments</h3>');

function sum(a,b){
    var add = a+b;
    document.write('Sum is:'+add+'<br>');
}

sum(23,45);

document.write('<h3>Javascript Function with return statement</h3>');

function sub(x,y){
    var sub = x-y;
    return sub;
}
var s = sub(45,20);
document.write('Sub is: '+ s + '<br>');

function totalMarks(s1,s2,s3,s4,s5){
    var total = s1+s2+s3+s4+s5;
    return total;
}
var t = totalMarks(33,45,56,78,89);
document.write('Total Marks is: '+t+'<br>');

function percentage(tm){
    var per = tm/500*100;
    return per;
}
var p = percentage(t);
document.write('Percentage is: '+p+'% <br>');

// find Odd and Even number using function;

function oddEvv(n){
    var check = (n%2===0) ?'Even Number':'Odd Number';
    return check;
}

var oe = oddEvv(6);
document.write('Number is: '+oe);

document.write('<h3>Javascript Expression Function</h3>');

// Named Expression Function
var oEvv = function oddEvv1(n){
    var check = (n%2===0) ?'Even Number':'Odd Number';
    return check;
}
var oe1 = oEvv(75);
document.write('Number is: '+oe1+'<br>');

// Anonymous Expression Function