import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Features from './pages/Features'
import Installation from './pages/Installation'
import SMSIntegration from './pages/SMSIntegration'
import AndroidSetup from './pages/AndroidSetup'
import IPhoneSetup from './pages/IPhoneSetup'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/sms-integration" element={<SMSIntegration />} />
          <Route path="/android-setup" element={<AndroidSetup />} />
          <Route path="/iphone-setup" element={<IPhoneSetup />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
