import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";

import CookiesPage from "./CookiesPage";
import Navbar from "./assets/Components/Navbar";
import Footer from "./assets/Components/Footer";
import OurTeam from "./OurTeam";
import ScrollToTop from "./assets/Components/ScrollToTop";
import BlogPostPage from "./BlogPostPage";

import CookieConsentModal from "./assets/Components/CookieConsentModal";
import UnderConstruction_homepage from "./Under_construction";
import "./i18n";
import Blog from "./Blog";

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
