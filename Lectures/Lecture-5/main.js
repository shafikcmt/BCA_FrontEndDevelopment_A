// document.write()
// console.log()
// window.alert()
// innerHTML()

// console.log('Debug');

// window.alert('Hello Javascript Developer!!');

// document.getElementById('test').innerHTML = 'Hello Students';
document.write('<h2>Javascript Variable</h2>');
document.write('<hr>');
// var,let,const
document.write('<h2>Javascript Variable with var keyword</h2>');
var name1 = 'Ritika';
// ReDeclaration Supported
var name1 = 'Kajal';
// ReAssign Supported
name1 = 'Shafiqul'; 
document.write(name1);
document.write('<hr>');

document.write('<h2>Javascript Variable with let keyword</h2>');
let name2 = 'Aniket';
// let name2 = 'dfgjh' Redeclare Not support
name2 = 'Priya'; // ReAssign Support
document.write(name2);
document.write('<hr>');

document.write('<h2>Javascript Variable with const keyword</h2>');
const name3 = 'Rahul';
// const name3 = 'sdfghjk' Redeclare not Support
// name3 = 'Riya'; Reassign not Support
document.write(name3);
document.write('<hr>');