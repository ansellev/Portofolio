import { Route, Routes } from 'react-router-dom'
import SiteLayout from '@/components/layout/SiteLayout'
import { ROUTES } from '@/config/routes'
import NotFoundPage from '@/pages/not-found/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        {ROUTES.map(({ key, path, Page }) => (
          <Route key={key} path={path} element={<Page />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
