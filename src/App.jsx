import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import HowItWorksPage from './pages/HowItWorksPage'
import TestimonialsPage from './pages/TestimonialsPage'
import FAQPage from './pages/FAQPage'
import FeaturesPage from './pages/FeaturesPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import DownloadPage from './pages/DownloadPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import BrandingPage from './pages/BrandingPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import ThankYouPage from './pages/ThankYouPage'
import HelpPage from './pages/HelpPage'
import SitemapPage from './pages/SitemapPage'
import WaitlistPage from './pages/WaitlistPage'
import DeleteAccountPage from './pages/DeleteAccountPage'
import NotFoundPage from './pages/NotFoundPage'
// Admin pages
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminUsers from './pages/admin/AdminUsers'
import AdminGroups from './pages/admin/AdminGroups'
import AdminContributions from './pages/admin/AdminContributions'
import AdminContactSubmissions from './pages/admin/AdminContactSubmissions'
import AdminWaitlist from './pages/admin/AdminWaitlist'
import AdminNotifications from './pages/admin/AdminNotifications'
import AdminBirthdays from './pages/admin/AdminBirthdays'
import ProtectedRoute from './components/admin/ProtectedRoute'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/how-it-works" element={<Layout><HowItWorksPage /></Layout>} />
        <Route path="/testimonials" element={<Layout><TestimonialsPage /></Layout>} />
        <Route path="/faq" element={<Layout><FAQPage /></Layout>} />
        <Route path="/features" element={<Layout><FeaturesPage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/blog/:slug" element={<Layout><BlogPostPage /></Layout>} />
        <Route path="/download" element={<Layout><DownloadPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/branding" element={<Layout><BrandingPage /></Layout>} />
        <Route path="/privacy" element={<Layout><PrivacyPolicyPage /></Layout>} />
        <Route path="/terms" element={<Layout><TermsOfServicePage /></Layout>} />
        <Route path="/thank-you" element={<Layout><ThankYouPage /></Layout>} />
        <Route path="/help" element={<Layout><HelpPage /></Layout>} />
        <Route path="/sitemap" element={<Layout><SitemapPage /></Layout>} />
        <Route path="/waitlist" element={<Layout><WaitlistPage /></Layout>} />
        <Route path="/delete-account" element={<Layout><DeleteAccountPage /></Layout>} />
        
        {/* 404 - Catch all unmatched routes */}
        <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
        
        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute><AdminUsers /></ProtectedRoute>} />
        <Route path="/admin/groups" element={<ProtectedRoute><AdminGroups /></ProtectedRoute>} />
        <Route path="/admin/contributions" element={<ProtectedRoute><AdminContributions /></ProtectedRoute>} />
        <Route path="/admin/contact-submissions" element={<ProtectedRoute><AdminContactSubmissions /></ProtectedRoute>} />
        <Route path="/admin/waitlist" element={<ProtectedRoute><AdminWaitlist /></ProtectedRoute>} />
        <Route path="/admin/notifications" element={<ProtectedRoute><AdminNotifications /></ProtectedRoute>} />
        <Route path="/admin/birthdays" element={<ProtectedRoute><AdminBirthdays /></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

export default App
