import { Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/layout'
import { ROUTES } from './config/routes'
import { AboutPage } from './features/about/AboutPage'
import { ContactPage } from './features/contact/ContactPage'
import { GalleryPage } from './features/gallery/GalleryPage'
import { HomePage } from './features/home/HomePage'
import { QuickOrderPage } from './features/quick-order/QuickOrderPage'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
        <Route path={ROUTES.gallery} element={<GalleryPage />} />
        <Route path={ROUTES.quickOrder} element={<QuickOrderPage />} />
        <Route path={ROUTES.contact} element={<ContactPage />} />
      </Routes>
    </>
  )
}
