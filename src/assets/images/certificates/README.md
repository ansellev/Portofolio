# Gambar sertifikat

Taruh gambar sertifikat atau penghargaan di folder ini (png, jpg, webp, atau avif), lalu tulis
**nama filenya** di field `image` pada `src/content/certifications.js`:

```js
{
  key: 'azure-ai-fundamentals',
  kind: 'certification',
  year: 2025,
  name: 'Microsoft Certified: Azure AI Fundamentals',
  issuer: 'Microsoft',
  image: 'Azure-Ai-Fundamentals.jpeg',
},
```

Saran: lebar 1200 sampai 1600 px, format webp atau jpg, di bawah 300 KB. Gambar tampil utuh (tidak
terpotong) dalam bingkai rasio 4:3 dan bisa diklik untuk membuka ukuran penuh di tab baru.
Kartu tanpa `image` (atau `image: null`) tampil tanpa gambar.
