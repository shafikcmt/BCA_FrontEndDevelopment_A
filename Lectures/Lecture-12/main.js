function countLinks(){
    var links = document.links;
    document.writeln('Total links is: '+links.length);
}

countLinks();

var elements  = document.head;
console.log(elements)

function changeBG(){
    var body = document.body;
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
}

document.writeln('<hr>');

// Create a div element using createElement, then assign it the class "box" using .className. Finally, append this div to the document's body.

function createDiv(){
    var div = document.createElement('div');
    div.className = 'box';
    document.body.appendChild(div)
}
createDiv()

// Create a <button> element dynamically and add two classes: "btn" and "btn-primary". Append the button to an existing div with id="container".