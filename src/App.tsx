import { Outlet } from 'react-router-dom'
import { ScrollToTop } from './components/layout'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  )
}
