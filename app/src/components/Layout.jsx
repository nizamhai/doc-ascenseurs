import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import VoiceAssistant from './VoiceAssistant'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg-primary)' }}>
      <Navbar />
      <main className="flex-1 pt-14 md:pt-16">
        <Outlet />
      </main>
      <Footer />
      <VoiceAssistant />
    </div>
  )
}
