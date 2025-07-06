import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

import CookiesPage from "./pages/CookiePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurTeam from "./pages/OurTeam";
import ScrollToTop from "./components/ScrollToTop";
import BlogPostPage from "./pages/BlogPostPage";

import CookieConsentModal from "./components/CookieCondentModal";

import UnderConstruction_homepage from "./pages/UnderConstruction";

import "../src/i18n";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/OurTeam" element={<OurTeam />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/" element={<UnderConstruction_homepage />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsentModal />
      </div>
    </>
  );
}
