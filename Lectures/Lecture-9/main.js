var anim = setTimeout(Animation,3000);

function Animation(){
    var target = document.getElementById('box');
    target.style.width = '500px';
    target.style.backgroundColor = 'red';
    target.style.transition = '2s';
}

function stop(){
    clearTimeout(anim);
    window.alert('Animation is stop!!');
}