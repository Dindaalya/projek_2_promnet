// Data pengguna untuk autentikasi sederhana
const users = {
    '123456': 'password123',  // NIM/ID : Password
    '654321': 'mypassword',
    '987654': 'abc123'
};

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nim = document.getElementById('nim').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;
    const errorMessage = document.getElementById('error-message');

    // Reset pesan error setiap kali submit form
    errorMessage.innerHTML = '';
    errorMessage.style.display = 'none';

    if (!terms) {
        // Jika checkbox terms tidak dicentang
        errorMessage.innerHTML = 'You must agree to the terms and conditions.';
        errorMessage.style.display = 'block';
        return; // Hentikan eksekusi jika terms tidak dicentang
    }

    // Validasi apakah nim dan password ada di dalam data pengguna
    if (users[nim] && users[nim] === password) {
        // Jika berhasil login
        alert(`Welcome, ${nim}! Login successful.`);
        window.location.href = '../form_input/input.html';
    } else {
        // Jika nim atau password salah
        errorMessage.innerHTML = 'Invalid NIM or Password. Please try again.';
        errorMessage.style.display = 'block';
    }
});



