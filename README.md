# 🤖 Ollama Chatbot with Node.js

Aplikasi web chatbot sederhana yang terintegrasi dengan **Ollama** untuk menjalankan Large Language Model (LLM) secara lokal di komputer Anda. Proyek ini dibangun menggunakan **Node.js**, **Express**, **EJS**, dan **Tailwind CSS**.

## ✨ Fitur

  * **Antarmuka Chat**: Tampilan chat yang bersih dan modern untuk berinteraksi dengan AI.
  * **100% Lokal**: Semua proses AI dijalankan di mesin Anda sendiri menggunakan Ollama. Tidak memerlukan koneksi internet (setelah model diunduh) dan tidak perlu API key.
  * **Riwayat Percakapan**: Aplikasi menyimpan riwayat percakapan selama sesi berjalan.

## ⚙️ Prasyarat

Sebelum melanjutkan, pastikan perangkat lunak berikut sudah terpasang di komputer Anda:

  * [**Git**](https://git-scm.com/)
  * [**Node.js**](https://nodejs.org/en/) (disarankan versi LTS)
  * [**Ollama**](https://ollama.com/)

-----

## 🚀 Panduan Instalasi dan Penggunaan

Ikuti langkah-langkah ini untuk menjalankan proyek secara lokal.

### 1\. Clone Repositori

Buka terminal atau Git Bash, lalu jalankan perintah berikut untuk meng-clone repositori ini.

```bash
git clone https://github.com/emzedt/chatbot-ollama.git
```


### 2\. Masuk ke Direktori Proyek

```bash
cd chatbot-ollama
```

### 3\. Install Dependensi Node.js

Jalankan perintah ini untuk menginstall semua package yang dibutuhkan, seperti Express, EJS, dan Ollama.

```bash
npm install
```

### 4\. Setup Ollama dan Model AI

Ini adalah langkah paling penting. Pastikan aplikasi Ollama sudah berjalan di latar belakang.

1.  Buka terminal baru (biarkan terminal proyek tetap terbuka).
2.  Unduh dan install Ollama: https://ollama.com/download
3.  Tarik (pull) model AI yang akan digunakan. Proyek ini dikonfigurasi untuk menggunakan **`llama3:8b`**.

    ```bash
    ollama pull llama3:8b
    ```

    Tunggu hingga proses unduh selesai. Anda hanya perlu melakukan ini sekali.

### 5\. Jalankan Aplikasi Web

Kembali ke terminal proyek Anda dan jalankan server Node.js.

```bash
node app.js
```

*(Anda juga bisa menambahkan `"start": "node app.js"` di file `package.json` untuk menjalankan dengan `npm start`)*

### 6\. Buka Chatbot di Browser

Setelah server berjalan, buka browser web Anda dan kunjungi:

**http://localhost:3000**

Sekarang Anda bisa mulai bercakap-cakap dengan AI yang berjalan di komputer Anda sendiri\! 🎉
