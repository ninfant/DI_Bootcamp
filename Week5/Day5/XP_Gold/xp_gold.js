let myForm = document.getElementById('userForm');

myForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let lastname = document.getElementById('lastName').value.trim();

    // save on localStorage
    localStorage.setItem('formData', JSON.stringify({ name, lastname }));

    // Redirigir a display.html
    window.location.href = 'display.html';
});
