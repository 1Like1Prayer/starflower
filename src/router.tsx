import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { ROUTES } from './config/routes'
import { AboutPage } from './features/about/AboutPage'
import { ContactPage } from './features/contact/ContactPage'
import { GalleryPage } from './features/gallery/GalleryPage'
import { HomePage } from './features/home/HomePage'
import { QuickOrderPage } from './features/quick-order/QuickOrderPage'

// Routes must be declared here (a data router), not via nested <Routes>:
// <Link viewTransition> is silently ignored for non-data routes.
export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: ROUTES.home, element: <HomePage /> },
      { path: ROUTES.about, element: <AboutPage /> },
      { path: ROUTES.gallery, element: <GalleryPage /> },
      { path: ROUTES.quickOrder, element: <QuickOrderPage /> },
      { path: ROUTES.contact, element: <ContactPage /> },
    ],
  },
])
