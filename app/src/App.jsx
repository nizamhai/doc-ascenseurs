import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import BrandPage from './pages/BrandPage'
import DocPage from './pages/DocPage'
import SettingsPage from './pages/SettingsPage'
import CustomTabsPage from './pages/CustomTabsPage'
import PdfImportPage from './pages/PdfImportPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <ThemeProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="marque/:brandId" element={<BrandPage />} />
            <Route path="doc/:docSlug" element={<DocPage />} />
            <Route path="options" element={<SettingsPage />} />
            <Route path="mes-onglets" element={<CustomTabsPage />} />
            <Route path="import-pdf" element={<PdfImportPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}
