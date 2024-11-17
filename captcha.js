import { createCanvas } from 'canvas';

export default function handler(req, res) {
    const captchaText = generateCaptcha();

    // Simpan captcha dalam session atau memori untuk verifikasi nanti
    req.session = req.session || {};
    req.session.captcha = captchaText;

    const canvas = createCanvas(200, 50);
    const ctx = canvas.getContext('2d');

    // Mengatur warna latar belakang dan teks
    ctx.fillStyle = '#f1f1f1';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000';
    ctx.font = '30px Arial';
    ctx.fillText(captchaText, 50, 35);

    // Mengirimkan gambar captcha
    res.setHeader('Content-Type', 'image/png');
    res.send(canvas.toBuffer('image/png'));
}

// Fungsi untuk menghasilkan captcha
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}
