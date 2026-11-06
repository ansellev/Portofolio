export const profile = {
  name: {
    full: 'Anselmus Levin Lukman',
    nickname: 'Ansel',
    nicknameRest: 'mus',
    surname: 'Levin Lukman',
  },
  role: { id: 'Mahasiswa Ilmu Komputer', en: 'Computer Science Student' },
  tagline: {
    id: 'Berpengalaman dalam merancang dan membangun berbagai project software dan mendesain UI/UX. Tertarik dalam pengembangan software (web dan mobile), frontend development, UI/UX, dan analisis bisnis. ',
    en: 'Experienced in building software projects and UI/UX design. Passionate and interested in software engineering (web and mobile), frontend development, UI/UX, and bussiness analysis',
  },
  bio: {
    id: 'Mahasiswa S1 Ilmu Komputer di Universitas Bina Nusantara dengan pengalaman praktis dalam mengembangkan aplikasi web dan seluler menggunakan HTML, CSS, JavaScript, React, TypeScript, NestJS, Flutter, serta basis data SQL. Berpengalaman dalam membangun REST API, mengimplementasikan autentikasi dan fitur aplikasi, merancang UI/UX, serta berkolaborasi dalam proyek perangkat lunak menggunakan Git. Memahami pembuatan wireframe, prototipe, mockup, pengembangan antarmuka responsif, dan penggunaan umpan balik untuk meningkatkan kegunaan (usability). Memiliki minat di bidang rekayasa perangkat lunak, pengembangan frontend, serta penciptaan pengalaman digital yang praktis, intuitif, dan berorientasi pada pengguna.',
    en: 'Computer Science undergraduate at Bina Nusantara University with hands-on experience developing web and mobile applications using HTML, CSS, JavaScript, React, TypeScript, NestJS, Flutter, and SQL databases. Experienced in building REST APIs, implementing authentication and application features, designing UI/UX, and collaborating on software projects using Git. Familiar with wireframing, prototyping, mockups, responsive interface development, and usability feedback. Interested in software engineering, frontend development, and creating practical, intuitive, user-focused digital experiences.',
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
