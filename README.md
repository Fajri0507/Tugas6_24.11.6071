# Aplikasi Product Catalog dengan Fake Store API

Tugas Praktikum 6 - Pemrograman Web (ST084)  
**Nama:** Fajri  
**NIM:** 24.11.6071  

---

## 🚀 Fitur-Fitur yang Diimplementasikan

Aplikasi ini dibangun menggunakan React dan Axios dengan memenuhi seluruh kriteria rubrik penilaian wajib serta ditambahkan dengan fitur tantangan (*challenge*):

### 1. Fitur Wajib (Core Features)
* **GET Request dengan Axios:** Berhasil melakukan penarikan data secara asinkronus dan menampilkan lebih dari 20 item produk secara lengkap (gambar, judul, harga, dan rating).
* **Loading Indicator:** Menampilkan animasi spinner dan teks indikator pemuatan yang informatif bagi pengguna sebelum data dari API selesai dimuat sepenuhnya.
* **Error Handling:** Sistem penanganan kesalahan yang *user-friendly* apabila terjadi kegagalan koneksi atau kegagalan *request* ke server API, lengkap dengan tombol coba lagi (*retry*).
* **Category Filter (Dinamis dari API):** Mengambil daftar kategori langsung dari endpoint Fake Store API dan menyaring produk secara otomatis berdasarkan kategori yang dipilih.
* **Search Produk:** Kolom pencarian produk yang bekerja secara *real-time* dan akurat berdasarkan judul produk yang diketik oleh pengguna.
* **Product Detail Modal:** Jendela *pop-up* detail (overlay) yang interaktif untuk menampilkan deskripsi produk secara lengkap, kategori, serta gambar berukuran besar saat tombol "Lihat Detail" diklik.

### 2. Fitur Tambahan (Challenge Features)
* **Dropdown Sorting Harga:** Fitur untuk mengurutkan katalog produk berdasarkan harga, mulai dari harga termurah ke termahal (*Low to High*) maupun dari harga termahal ke termurah (*High to Low*).
* **Simulasi Keranjang Belanja (+ Add to Cart):** Fitur interaktif untuk menambahkan produk ke dalam keranjang yang akan memperbarui jumlah item pada *widget* keranjang di bagian *header* secara *real-time*, dilengkapi dengan *Toast Notification* (notifikasi melayang) di pojok bawah layar.

---

## 🛠️ Cara Menjalankan Aplikasi

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lingkungan lokal (*local environment*) komputer Anda:

### Prasyarat
Pastikan komputer Anda sudah terinstal **Node.js** dan **npm**.

### Langkah-Langkah Instalasi

1. **Clone Repositori Ini**
   ```bash
   git clone [https://github.com/Fajri0507/Tugas6_24.11.6071.git](https://github.com/Fajri0507/Tugas6_24.11.6071.git)
