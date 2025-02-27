document.write('<h2>Expression Function</h2>');

// Anonymous Expression function

let greater = function(a,b){
    if(a>b){
        document.write('Greater value is: A '+a);
    }else{
        document.write('Greater value is: B '+b);
    }
}

greater(23,34);

document.write('<h2>Arrow Function</h2>');

let sum = (a,b) => {
    let add = a+b;
    document.write('Sum is :'+add+'<br>');
}
sum(23,78);

let oddEv = n => (n%2===0) ? 'Even Number':'Odd Numbers';

let oe = oddEv(4);

document.write('Value is: '+oe+'<br>');

document.write('<h2>Immediate Invoked Expression Function (IIEF) </h2>');

(()=>{
    document.write('Hello Students!!');   
})();

// Find Greater value from three numbers using IIEF Function

((a,b,c)=>{
    if(a>b){
        if(a>c){
            document.write('Greater value is A:'+a);
        }else{
            document.write('Greater value is C:'+c);
        }
    }else{
        if(b>c){
            document.write('Greater value is B:'+b);
        }else{
            document.write('Greater value is C:'+c);
        }
    }
})(2,7,9)




