import SocialLink from '@/components/ui/SocialLink'
import { profile } from '@/content/profile'

/** Daftar semua media sosial dari src/content/profile.js. `fill`: lihat SocialLink (untuk grid yang rapat). */
export default function SocialLinks({ label, showHandle = false, fill = false, className }) {
  return (
    <ul aria-label={label} className={className}>
      {profile.socials.map((social) => (
        <li key={social.platform} className={fill ? 'flex' : undefined}>
          <SocialLink {...social} showHandle={showHandle} fill={fill} />
        </li>
      ))}
    </ul>
  )
}
