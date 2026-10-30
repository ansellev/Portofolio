# Foto pengalaman organisasi

Taruh foto kegiatan atau sertifikat di folder ini (png, jpg, webp, atau avif), lalu tulis **nama filenya**
di field `images` pada `src/content/experiences.js`:

```js
images: ['techno-2025-1.webp', 'techno-2025-2.webp'],
```

- Foto pertama tampil sebagai gambar utama. Saat kartu di-hover (atau difokus dengan keyboard), foto
  berganti satu per satu; di layar sentuh, ketuk titik kecil di bawah foto.
- Bingkai fotonya berasio 16:9 dan gambar dipotong dari tengah (foto sertifikat yang lebih tinggi
  akan terpotong sedikit di atas dan bawah). Format webp atau jpg, lebar sekitar 1200 px, di bawah 150 KB per foto.
- Satu pengalaman boleh punya satu foto atau lebih.
