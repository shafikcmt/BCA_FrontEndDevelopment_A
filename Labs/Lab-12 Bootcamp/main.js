// Rest Operator

function sum(fname,lname,...value){
    var v = 0;
    var add = 0;
    document.write('Full Name: '+fname+" "+lname+'<br>');
    document.write(`Full name : ${fname} - ${lname} <br>`);
    for(v in value){
        document.write('Value is: '+value[v]+'<br>');
        add = add + value[v];
    }
    document.write('Sum is: '+add);
}
var arr1 = [5,3,7,8,9,7,9];
var arr2 = [34,67,78,5,8,3];
var arr3 = arr1.concat(arr2)
sum('Geeta','University', ...arr3);