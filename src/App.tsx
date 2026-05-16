import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import PreloaderTwo from './components/PreloaderTwo';

// Lazy loading pages for faster initial load time (Code Splitting)
const Home = lazy(() => import('./pages/Home'));
const Packages = lazy(() => import('./pages/Packages'));
const PackageDetails = lazy(() => import('./pages/PackageDetails'));
const About = lazy(() => import('./pages/About'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const CustomTour = lazy(() => import('./pages/CustomTour'));

const App: React.FC = () => {
  return (
    <Router>
      <PreloaderTwo />
      <ScrollToTop />
      <Suspense fallback={<div className="h-screen w-full bg-[#F8FAFC]" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/package-details" element={<PackageDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/custom-tour" element={<CustomTour />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
