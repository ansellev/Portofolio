import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

/**
 * Ikon, warna, dan nama setiap platform sosial.
 * `darkColor` (opsional) = warna di mode gelap, untuk ikon yang terlalu gelap di atas kaca gelap.
 * Menambah platform baru: tambahkan di sini, lalu pakai namanya di `platform` pada src/content/profile.js.
 */
export const SOCIAL_PLATFORMS = {
  instagram: { Icon: FaInstagram, color: '#E4405F', darkColor: '#FF6B86', label: 'Instagram' },
  linkedin: { Icon: FaLinkedin, color: '#0A66C2', darkColor: '#4D9BEA', label: 'LinkedIn' },
  github: { Icon: FaGithub, color: '#181717', darkColor: '#F0F0F5', label: 'GitHub' },
  email: { Icon: SiGmail, color: '#EA4335', darkColor: '#FF6B5E', label: 'Email' },
}
