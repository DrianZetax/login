// Fungsi untuk menghasilkan captcha acak
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

// Menampilkan captcha yang dihasilkan
const captchaText = generateCaptcha();
document.getElementById('captchaText').textContent = captchaText;

// Fungsi untuk memverifikasi input pengguna
function verifyCaptcha() {
    const userInput = document.getElementById('captchaInput').value;
    const resultMessage = document.getElementById('resultMessage');

    if (userInput === captchaText) {
        resultMessage.textContent = 'Captcha berhasil diverifikasi!';
        resultMessage.style.color = 'green';
    } else {
        resultMessage.textContent = 'Captcha salah, coba lagi!';
        resultMessage.style.color = 'red';
    }
}
