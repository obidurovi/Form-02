// Get Tags/elements/id
const basic_form = document.getElementById('basic_form');
const msg = document.querySelector('.msg');

const name_req = document.querySelector('.name-req');
const email_req = document.querySelector('.email-req');
const cell_req = document.querySelector('.cell-req');
const user_req = document.querySelector('.user-req');


basic_form.onsubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const cell = document.getElementById('cell');
    const user = document.getElementById('user');

    if (name.value == '') {
        name_req.innerHTML = `<span style="color:red;">* Feild Is Required</span>`;
        name.style.borderColor = 'red';
    } else {
        name_req.innerHTML = ``;
        name.style.borderColor = '';
    }

    if (email.value == ''|| emailChecked(email.value) == false) {
        email_req.innerHTML = `<span style="color:red;">* Feild Is Required</span>`;
        email.style.borderColor = 'red';
    } else{
        email_req.innerHTML = ``;
        email.style.borderColor = '';
    }

    if (cell.value == '' || phoneChecked(cell.value) == false) {
        cell_req.innerHTML = `<span style="color:red;">* Feild Is Required</span>`;
        cell.style.borderColor = 'red';
    } else {
        cell_req.innerHTML = ``;
        cell.style.borderColor = '';
    }

    if (user.value == '') {
        user_req.innerHTML = `<span style="color:red;">* Feild Is Required</span>`;
        user.style.borderColor = 'red';
    } else {
        user_req.innerHTML = ``;
        user.style.borderColor = '';
    }

    if (name.value == '' || email.value == '' || cell.value == '' || user.value == '') {
        msg.innerHTML = setAlert('All Fields Are Required');
    } else if (emailChecked(email.value) == false) {
        msg.innerHTML = setAlert('Invalid Email Address', 'warning')
    }else if (phoneChecked(cell.value) == false) {
        msg.innerHTML = setAlert('Invalid Phone Number', 'warning')
    }else{
        msg.innerHTML = setAlert('Data Stable', 'success');
    }

    email.onkeyup = () => {
        email_req.innerHTML = ``;
        email.style.borderColor = '';
    }
    cell.onkeyup = () => {
        cell_req.innerHTML = ``;
        cell.style.borderColor = '';
    }
}
