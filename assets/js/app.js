// Alert Function
const setAlert = (msg, type = "danger") => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss="alert" class="btn-close"></button></p>`;
}


// Email Pattern 
const emailChecked = (email) => {
    const emailChecked = /^[a-z0-9\._]{1,}@[a-z0-9]{1,}\.[a-z]{1,4}$/;

    return emailChecked.test(email);
}

// Phone Pattern
const phoneChecked = (phone) => {
    const pattern = /^(01||8801||\+8801||)[0-9]{9}$/;

    return pattern.test(phone);
}
