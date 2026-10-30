/**
 * Daftar project. Setiap objek = satu project; urutannya = urutan tampil.
 * Untuk MENAMBAH project: salin satu objek, ubah isinya, dan taruh fotonya di
 * src/assets/images/projects/. Jalankan `npm run check:content` untuk memastikan semuanya lengkap.
 *
 *   key          id unik (huruf kecil, tanpa spasi)
 *   featured     true = tampil di carousel "Top Projects" (selain di "All Projects")
 *   type         'uiux' | 'frontend' | 'backend' | 'fullstack'  (lihat content/projectTypes.js)
 *   name         nama project
 *   stack        daftar teknologi (opsional)
 *   description  { id, en } deskripsi singkat
 *   images       nama file foto di src/assets/images/projects/ (satu atau lebih; bisa kosong)
 *   githubUrl    link GitHub (opsional)
 *   demoUrl      link demo yang sudah di-deploy (opsional; tombol Demo hanya muncul bila diisi)
 */
export const projects = [
  {
    key: 'dineeat',
    featured: true,
    type: ['fullstack'],
    name: 'DineEat',
    stack: ['Flutter', 'Node.js', 'Supabase'],
    description: {
      id: 'DineEat merupakan platform booking online dimana user dapat membuat reservasi meja, memesan makanan atau minuman, dan melihat antrian restoran di sekitarnya secara real-time. Aplikasi ini dibuat oleh saya beserta empat teman saya lainnya sebagai project kuliah. Saya berperan sebagai product manager dan desain UI/UX serta frontend.',
      en: 'DineEat is an online booking app where users or customers can book a table, order food in advance, and also see how long the waiting list live on each restaurants nearby. DineEat is built using Flutter, NestJS, and Supabase. This app was created by me and 4 friends as a group project. I worked as the project manager and frontend design.',
    },
    images: ['dineeat-1.webp', 'dineeat-2.webp', 'dineeat-3.webp'],
    githubUrl: 'https://github.com/Ritadolo/DineEatFIX-main',
    demoUrl: null,
  },
  {
    key: 'nestmart',
    featured: true,
    type: 'fullstack',
    name: 'NestMart',
    stack: ['Flutter', 'NestJS', 'MySQL', 'Prisma ORM'],
    description: {
      id: 'NestMart merupakan platform marketplace online dimana user dapat mencari dan membeli produk yang mereka inginkan. User juga dapat menjual produk mereka sendiri dengan mudah. Aplikasi ini dibuat oleh saya beserta empat teman saya lainnya sebagai project kuliah. Saya berperan sebagai product manager dan frontend.',
      en: 'NestMart is an online marketplace where users or customers can search and buy a product that they want to buy. Users can also sell their own products easily. NestMart is built using Flutter, NestJS, and MySQL. This app was created by me and 4 friends as a group project. I worked as the project manager and frontend design.',
    },
    images: ['nestmart-1.webp', 'nestmart-2.webp'],
    githubUrl: 'https://github.com/ansellev/Project-NestMart-MobileHybridSolution',
    demoUrl: null,
  },
  {
    key: 'mywuling-redesign',
    featured: false,
    type: 'uiux',
    name: 'MyWuling+ UI/UX Redesign',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description: {
      id: 'Study Case ini merupakan tugas kuliah yang saya kerjakan bersama empat teman lain. Dalam studi kasus ini, kami menganalisa masalah yang terdapat di aplikasi MyWuling+ (yang merupakan aplikasi untuk mengecek mobil Wuling) dalam segi desain UI/UX, dan flow aplikasinya menggunakan panduan dari 8 Golden Rules of HCI. Setelah kami menganalisa, kami membuat desain prototipe UI hasil revisinya menggunakan Figma, HTML, CSS, dan Javascript. Saya berperan sebagai desainer UI/UX.',
      en: 'This case study project was actually a group project that I worked with 4 other friends. In this case study, we analyzed the problems of the MyWuling+ app (which is a personal Wuling car app) in terms of the UI/UX designs and application flow based on 8 Golden Rules of HCI. After we analyzed it, we designed a prototype which is the revised UI of the app using Figma, HTML, CSS, and Javascript. My role in this case study is the UI/UX designer.',
    },
    images: ['mywuling-1.webp'],
    githubUrl: 'https://github.com/ansellev/Project-MyWulingUIUXRevised-HCI',
    demoUrl: 'https://my-wuling-revised-klmpk5.netlify.app/',
  },
  {
    key: 'v-phone',
    featured: false,
    type: 'uiux',
    name: 'V-Phone Website',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description: {
      id: 'V-Phone adalah website untuk mempromosikan dan menjual produk-produk V-Phone. Saya membuat situs web ini untuk mempelajari cara merancang situs web dengan UI dan UX yang baik, berdasarkan prinsip "8 Golden Rules of Interface Design". Situs web ini terdiri dari halaman Beranda, Produk, Promosi, Tentang, dan Registrasi. Saya merancang sendiri seluruh aset web menggunakan Figma (kecuali ikon dan gambar).',
      en: 'V-Phone is a online website for promoting and selling V-Phone products. I made this website to learn how to design a website that has good UI and UX based on the 8 Golden Rules of Interface Design. This website consists of Home Page, Products Page, Promotion Page, About Page, and Register Page. I designed all the web assets myself using Figma (except for the icons and images).',
    },
    images: ['v-phone1.png','v-phone2.png','v-phone3.png','v-phone4.png','v-phone5.png'],
    githubUrl: 'https://github.com/ansellev/Project-V-Phone-HCI.git',
    demoUrl: 'https://v-phone-web.vercel.app/',
  },
  {
    key: 'ezrun',
    featured: false,
    type: 'fullstack',
    name: 'ezrun.com',
    stack: ['React', 'NestJS', 'MySQL','PrismaORM'],
    description: {
      id: 'ezrun adalah situs web tempat para pemain dapat mengirimkan rekor speedrun mereka saat memainkan gim tertentu. Di ezrun, pemain dapat mengunggah speedrun mereka, bersaing dalam papan peringkat untuk setiap gim, serta memberikan komentar atau menanggapi komentar pemain lain. Untuk mengirimkan rekor tersebut, pemain wajib menyertakan bukti berupa video dari sesi permainan mereka melalui tautan YouTube. Selain pemain, terdapat juga peran admin yang memiliki akses untuk menambahkan gim, membuat kategori, menyetujui atau menghapus rekor, serta menghapus komentar.',
      en: 'ezrun is an online website where players could submit their speedrun record when playing a spesific game. In ezrun, players could submit their speedruns, compete with the leaderboard from each game, and comment on other players comments. To submit their run, players must have a video proof of their speedrun gameplay attempt by providing a YouTube URL of their video. Besides players, there is also an admin role where admin could add games, add categories, approve runs, delete runs, and delete comments if necessary.',
    },
    images: ['ezrun-1.png','ezrun-2.png','ezrun-3.png','ezrun-4.png','ezrun-5.png','ezrun-6','ezrun-7'],
    githubUrl: 'https://github.com/ansellev/Project-EZRun-SoftwareArchitecture.git',
  },
  {
    key: 'sahabattuli',
    featured: true,
    type: 'fullstack',
    name: 'SahabatTuli (Ongoing)',
    stack: ['Flutter', 'TypeScript', 'Supabase'],
    description: {
      id: 'SahabatTuli adalah aplikasi yang dirancang untuk membantu tunarungu/penyandang tuli dalam berkomunikasi sehari-hari menggunakan fitur Text-to-Speech, Speech-to-Text, & Save Conversation. Saya berperan dalam merancang desain UI/UXnya menggunakan Figma dan membantu implementasi frontendnya. Aplikasi ini masih dalam proses pengembangan.',
      en: 'SahabatTuli is an application designed to assist deaf or hard-of-hearing individuals in their daily communication, featuring Text-to-Speech, Speech-to-Text, and conversation-saving capabilities. I designed the all of the pages using Figma and now helping the frontend implementation. This app is currently under development.',
    },
    images: ['tuli-1.png','tuli-2.png','tuli-3.png'],
    githubUrl: 'https://github.com/SahabatTuli',
    demoUrl: 'https://sahabattuli.com/'
  },
]
