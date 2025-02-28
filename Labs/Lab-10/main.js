var elements;

elements = document;
elements = document.all;
elements = document.all[5];
elements = document.head;
elements = document.title;
elements = document.body;
elements = document.links;
elements = document.forms;
console.log(elements)

// Write a JavaScript function that counts the total number of links (<a> tags) in a webpage using the Document.links property.

function countsLinks(){
    var links = document.links;
    if(!links){
        document.write('Links tag not found!!');
        return;
    }else{
        var totalLinks = links.length;
        document.write('<br> Total Links tag is:'+totalLinks);
    }
}
countsLinks();

// Create a script that retrieves and displays the title of the current webpage using the Document.title property.

var title = document.title;
document.write('<br> Current Title is:' + title);

function changeBG(){
    var body = document.body;
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
}

function submitData(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var roll = document.getElementById('roll_number').value;

    if(name == ""|| email == "" || roll == ""){
        window.alert('Filled must not be empty!!!');
    }else{
        document.write(`
            <h2>${name}</h2>
            <h2>${email}</h2>
            <h2>${roll}</h2>
            `)
    }
}