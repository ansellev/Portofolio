import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import CenteredMessage from '@/components/ui/CenteredMessage'
import { useLanguage } from '@/i18n/useLanguage'

export default function NotFoundPage() {
  const { ui } = useLanguage()
  return (
    <CenteredMessage
      title={ui.pageTitles.notFound}
      text={ui.notFound.text}
      action={
        <Button as={Link} to="/">
          {ui.notFound.back}
        </Button>
      }
    />
  )
}
