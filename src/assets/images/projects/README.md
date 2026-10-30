# Foto project

Taruh foto atau screenshot project di folder ini (png, jpg, webp, atau avif), lalu tulis **nama filenya**
di field `images` pada `src/content/projects.js`:

```js
images: ['dineeat-1.webp', 'dineeat-2.webp', 'dineeat-3.webp'],
```

- Foto pertama tampil sebagai gambar utama. Saat kartu di-hover (atau difokus dengan keyboard), foto
  berganti satu per satu; saat kursor keluar, kembali ke foto pertama. Di layar sentuh, titik kecil di
  bawah foto bisa diketuk untuk berganti.
- Rasio terbaik 16:9 (mis. 1200×675 px); rasio lain dipotong dari tengah. Format webp atau jpg, di bawah 150 KB per foto.
- Satu project boleh punya satu foto atau lebih.
