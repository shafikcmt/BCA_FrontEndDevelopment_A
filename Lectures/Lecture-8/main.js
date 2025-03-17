// setInterval(function,timing)
var a = 0;
var anim = setInterval(Animation,100);

function Animation(){
    a = a + 10;
    var target = document.getElementById('test');
    target.style.width = a + 'px';
    console.log('Hello');
    console.log(a);
}

function stop(){
    clearInterval(anim);
}