import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/HeroSection';
import { QingSection } from '@/components/QingSection/QingSection';
import { PlatformSection } from '@/components/PlatformSection/PlatformSection';
import { Footer } from '@/components/layout/Footer';
import { Privacy } from '@/pages/Privacy';
import { Terms } from '@/pages/Terms';

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <QingSection />
        <PlatformSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}