function submitForm(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var branch = document.getElementById('branch').value;
    
    if(fname == ""|| lname == ""|| email ==""|| branch == ""){
        window.alert('Field must not be Empty!!')
    }else{
        var display = document.getElementById('displaydata');
        display.innerHTML += `
            <tr>
                <td>${fname}</td>
                <td>${lname}</td>
                <td>${email}</td>
                <td>${branch}</td>
            </tr>
        `
    }
}