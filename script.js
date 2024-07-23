
var selectedRow = null;

function getValue(event) {
    event.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const password = document.getElementById("password").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    console.log(fname, lname, email, age, password, gender);

    document.getElementById("demo").innerHTML = 
        `<div class="demo-item fname">First name: ${fname}</div>
        <div class="demo-item lname">Last name: ${lname}</div>
        <div class="demo-item email">Email: ${email}</div>
        <div class="demo-item age">Age: ${age}</div>
        <div class="demo-item password">Password: ${password}</div>
        <div class="demo-item gender">Gender: ${gender}</div>`;


        disableFormFields();

}

function disableFormFields() {
    const fields = document.querySelectorAll('#myform input[type="text"], #myform input[type="password"], #myform input[type="radio"]');
    fields.forEach(field => field.disabled = true);
}



function clearContent() {
    document.getElementById("demo").innerHTML = "";
    document.getElementById("myform").reset() = "";
}


function editContent() {
    const fields = document.querySelectorAll('#myform input[type="text"], #myform input[type="password"], #myform input[type="radio"]');
    fields.forEach(field => field.disabled = false);

    const form = document.getElementById("myform");
    selectedRow = form.querySelectorAll("input[type='text'], input[type='password'], input[type='radio']:checked");
    
    document.getElementById("fname").value = selectedRow[0].value;
    document.getElementById("lname").value = selectedRow[1].value;
    document.getElementById("email").value = selectedRow[2].value;
    document.getElementById("age").value = selectedRow[3].value;
    document.getElementById("password").value = selectedRow[4].value;
    if (selectedRow[5].value === "Male") {
        document.getElementById("male").checked = true;
    } else {
        document.getElementById("female").checked = true;
    }
}
