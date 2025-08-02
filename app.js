// app.js
const express = require('express');
const path = require('path');
const { Ollama } = require('ollama');

const app = express();
const port = 3000;

// Setup EJS dan folder views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware untuk parsing body dari form
app.use(express.urlencoded({ extended: true }));

// Inisialisasi Ollama
const ollama = new Ollama({ host: 'http://localhost:11434' });

// Array sederhana untuk menyimpan riwayat chat (in-memory)
let chatHistory = [];

// Route untuk menampilkan halaman utama
app.get('/', (req, res) => {
  res.render('chat', { chatHistory });
});

// Route untuk menerima pesan dari user dan mengirim response AI
app.post('/chat', async (req, res) => {
  const userInput = req.body.message;

  // Tambahkan pesan user ke riwayat
  chatHistory.push({ role: 'user', content: userInput });

  try {
    // Panggil model AI dengan seluruh riwayat chat
    const response = await ollama.chat({
      model: 'llama3:8b', // Pastikan model ini sudah di-pull
      messages: chatHistory,
    });

    // Tambahkan respons AI ke riwayat
    const aiResponse = response.message.content;
    chatHistory.push({ role: 'assistant', content: aiResponse });

    // Redirect kembali ke halaman utama untuk menampilkan chat terbaru
    res.redirect('/');
  } catch (error) {
    console.error('Error from Ollama:', error);
    // Jika error, tambahkan pesan error ke riwayat dan redirect
    chatHistory.push({ role: 'assistant', content: 'Maaf, terjadi kesalahan.' });
    res.redirect('/');
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});