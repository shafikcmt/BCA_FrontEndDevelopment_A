// Ternary Operator
// (condition)?'true part':'false part'
// if(condition){
// true statement
// }else{
//     fasle statement
// }

var a=50, b=40;

var check = (a>b)?'Greater value is A':'Greater value is B';

document.writeln(check+'<br>')

// Find Odd and Even Number using ternary operator

var n = 3;
var check1 = (n%2===0)?'Even Number':'Odd Number';

document.write(check1+'<br>')

// Rest Operator

function sum(fname,lname, ...numbers){
    document.writeln(numbers+'<br>')
    document.writeln('Full name:'+fname+" "+lname+'<br>');
    var sum =0;
   for(let i in numbers){
    document.writeln(numbers[i]+'<br>');
    sum += numbers[i];
}
    document.writeln('Sum is:'+sum+'<br>');
}

sum(23,24)
sum('Geeta','University',23,24,34,67,23,89,12,45,12)
// Spread Operator
var arr1 = [23,87,65,43,23,89,12];
var arr2 = [78,87,67,43,21,45,12];
sum('Geeta','University', ...arr1,...arr2);

// Dynamic Chees Board

function createBoard(){
    var boardsize = document.getElementById('boardsize').value;
    var displayBoard = document.getElementById('displayBoard')
    displayBoard.style.height = `${boardsize*100}px`;
    displayBoard.style.width = `${boardsize*100}px`;
    var row,col;
    for(row=0;row<boardsize;row++){
        for(col=0;col<boardsize;col++){
            var box = document.createElement('div');
            box.className = 'box';
            if((row+col)%2===0){
                box.classList.add('white');
                box.innerText = '*';
            }else{
                box.classList.add('black');
                box.innerText = '#'; 
            }
            displayBoard.appendChild(box)
        }
    }
}