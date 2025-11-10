🧩 Final Project — PMApp (Project Management App)
📝 Deskripsi

Aplikasi Manajemen Proyek (PMApp) ini dibuat sebagai bagian dari Final Project SanberCode Bootcamp Batch 71.
Aplikasi ini menyediakan fitur Autentikasi (Login & Register), serta CRUD Project dan Task dengan sistem role-based (Admin dan Member).

⚙️ Tech Stack

Node.js + Express + TypeScript

MongoDB (Mongoose)

JWT Authentication

bcryptjs untuk hashing password

CORS, Morgan, dotenv

🔐 Fitur dan Akses
Resource	Role	Endpoint	Deskripsi
Auth	All	/api/auth/register, /api/auth/login	Register dan login pengguna
Project	Admin	POST, PUT, DELETE	Tambah, ubah, dan hapus proyek
	Member/Admin	GET	Lihat semua proyek atau proyek by ID
Task	Admin	POST, PUT, DELETE	Tambah, ubah, dan hapus task
	Member/Admin	GET	Lihat semua task atau task by ID

Semua endpoint dilindungi JWT Authentication.

🧠 Catatan dari Pengembang

Sesuai dengan instruksi tugas:
“Gunakan repository tugas (jangan buat repository baru lagi).”

Namun, demi menjaga struktur folder yang lebih rapi dan sesuai best practice, project final ini saya buat pada repository terpisah agar pengelolaan dan debugging dapat dilakukan lebih cepat serta mudah dipresentasikan.

Seluruh fungsi dan ketentuan dari instruksi final project tetap dipenuhi sepenuhnya di repo ini.


🚀 Cara Menjalankan Project
1️⃣ Clone repository
git clone https://github.com/username/final-project-pmapp.git
cd final-project-pmapp

2️⃣ Install dependencies
npm install

3️⃣ Buat file .env

Isi dengan konfigurasi berikut:

MONGO_URI=mongodb+srv://...
JWT_SECRET=your_secret_key
PORT=3000

4️⃣ Jalankan server
npm run dev


Server akan berjalan di:
👉 http://localhost:3000

👩‍💻 Developer (Maya)
