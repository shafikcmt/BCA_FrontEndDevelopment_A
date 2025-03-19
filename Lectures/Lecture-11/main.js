// Filter Method

var ages = [21,15,13,18,19,30,27];

document.writeln('Before filter:'+ages+'<br>')

var checkAdult = (age)=>{
    return age >= 18;
}

var afetrFilter = ages.filter(checkAdult)

document.writeln('After filter:'+afetrFilter+'<br>')


document.writeln('<hr>')

// Given an array of numbers, filter out only the even numbers.

var numbers = [2,3,7,5,8,9,2,6];

var evenNumber = numbers.filter((num)=>{
    return num%2==0;
});

document.writeln('Even Numbers:'+evenNumber);

document.writeln('<hr>')

// Given an array of objects representing people, filter out only those who are 18 or older.

var peoples = [
    {fname:'Rahul',lname:'Kumar',age:21},
    {fname:'Ragini',lname:'Sharma',age:16},
    {fname:'Neha',lname:'Kumari',age:20},
    {fname:'Palak',lname:'Jain',age:19},
    {fname:'Ritika',lname:'Kumari',age:22}
]

var filterAdult = peoples.filter((people)=>{
    return people.age > 18;
})

console.log(filterAdult);

document.writeln('<hr>')

// Given an array of strings, filter out only the ones that contain more than 5 characters.

var words = ['rahul','sahil','neha','palak','hello','university'];

var filterwords = words.filter((word)=>{
    return word.length >= 5;
})

document.writeln(filterwords);