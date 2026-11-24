export const profile = {
  name: {
    full: 'Anselmus Levin Lukman',
    nickname: 'Ansel',
    nicknameRest: 'mus',
    surname: 'Levin Lukman',
  },
  role: { id: 'Mahasiswa Ilmu Komputer', en: 'Computer Science Student' },
  tagline: {
    id: 'Berpengalaman dalam merancang dan membangun berbagai project software. Tertarik dalam pengembangan software (web dan mobile) and fullstack development',
    en: 'Experienced in building software projects. Passionate and interested in software engineering (web and mobile) and fullstack development',
  },
  bio: {
    id: 'Mahasiswa S1 Ilmu Komputer di Universitas Bina Nusantara dengan pengalaman praktis dalam mengembangkan aplikasi web dan seluler menggunakan React, TypeScript, NestJS, Flutter, serta basis data relasional. Berpengalaman dalam membangun REST API, menerapkan autentikasi, mengembangkan fitur aplikasi, dan mengintegrasikan antarmuka frontend dengan layanan backend. Memahami manajemen basis data, arsitektur perangkat lunak, dan pengembangan perangkat lunak secara kolaboratif menggunakan Git. Memiliki minat dalam membangun solusi perangkat lunak yang andal dan berorientasi pada pengguna.',
    en: 'Computer Science undergraduate at Bina Nusantara University with hands-on experience in developing web and mobile applications using React, TypeScript, NestJS, Flutter, and relational databases. Experienced in building REST APIs, implementing authentication, developing application features, and integrating frontend interfaces with backend services. Familiar with database management, software architecture, and collaborative software development using Git. Interested in building reliable and user-focused software solutions.',
  },
  photoAlt: {
    id: 'Foto profil Anselmus Levin Lukman',
    en: 'Profile photo of Anselmus Levin Lukman',
  },
  /**
   * Media sosial. `platform` harus ada di src/components/ui/socialPlatforms.js
   * (instagram, linkedin, github, email). Urutan di sini = urutan tampil.
   */
  socials: [
    { platform: 'instagram', handle: '@ansellevinn', url: 'https://www.instagram.com/ansellevinn' },
    {
      platform: 'linkedin',
      handle: 'anselmus-lukman',
      url: 'https://www.linkedin.com/in/anselmus-lukman',
    },
    { platform: 'github', handle: 'ansellev', url: 'https://github.com/ansellev' },
    {
      platform: 'email',
      handle: 'anselmuslevinlukman@gmail.com',
      url: 'mailto:anselmuslevinlukman@gmail.com',
    },
  ],
}
