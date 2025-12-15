import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import HowItWorksPage from './pages/HowItWorksPage'
import TestimonialsPage from './pages/TestimonialsPage'
import FAQPage from './pages/FAQPage'
import FeaturesPage from './pages/FeaturesPage'
import ComingSoonFeaturesPage from './pages/ComingSoonFeaturesPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import DownloadPage from './pages/DownloadPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import BrandingPage from './pages/BrandingPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import CookiePolicyPage from './pages/CookiePolicyPage'
import SecurityPage from './pages/SecurityPage'
import AccessibilityPage from './pages/AccessibilityPage'
import PressPage from './pages/PressPage'
import CareersPage from './pages/CareersPage'
import ThankYouPage from './pages/ThankYouPage'
import HelpPage from './pages/HelpPage'
import SitemapPage from './pages/SitemapPage'
import WaitlistPage from './pages/WaitlistPage'
import DeleteAccountPage from './pages/DeleteAccountPage'
import NotFoundPage from './pages/NotFoundPage'
import PricingPage from './pages/PricingPage'
import UseCasesPage from './pages/UseCasesPage'
import FamiliesUseCasePage from './pages/FamiliesUseCasePage'
import ChurchesUseCasePage from './pages/ChurchesUseCasePage'
import SchoolsUseCasePage from './pages/SchoolsUseCasePage'
import FriendGroupsUseCasePage from './pages/FriendGroupsUseCasePage'
import WorkplaceUseCasePage from './pages/WorkplaceUseCasePage'
import CommunityOrganizationsUseCasePage from './pages/CommunityOrganizationsUseCasePage'
import WhatsAppGroupsComparisonPage from './pages/WhatsAppGroupsComparisonPage'
import ExcelSpreadsheetsComparisonPage from './pages/ExcelSpreadsheetsComparisonPage'
import ComparisonsPage from './pages/ComparisonsPage'
import LocationsPage from './pages/LocationsPage'
import ResourcesPage from './pages/ResourcesPage'
import HowToOrganizeBirthdayContributionsPage from './pages/HowToOrganizeBirthdayContributionsPage'
import BirthdayContributionEtiquettePage from './pages/BirthdayContributionEtiquettePage'
import CalculatingGroupContributionsPage from './pages/CalculatingGroupContributionsPage'
import MultiCurrencyGroupPaymentsPage from './pages/MultiCurrencyGroupPaymentsPage'
import ManagingLargeGroupContributionsPage from './pages/ManagingLargeGroupContributionsPage'
import AvoidingBirthdayContributionMistakesPage from './pages/AvoidingBirthdayContributionMistakesPage'
import SettingUpYourFirstGroupPage from './pages/SettingUpYourFirstGroupPage'
import UnderstandingMemberReliabilityScoresPage from './pages/UnderstandingMemberReliabilityScoresPage'
import BudgetingForGroupContributionsPage from './pages/BudgetingForGroupContributionsPage'
import ChoosingTheRightContributionAmountPage from './pages/ChoosingTheRightContributionAmountPage'
import AdvancedGroupManagementStrategiesPage from './pages/AdvancedGroupManagementStrategiesPage'
import OptimizingPaymentConfirmationWorkflowsPage from './pages/OptimizingPaymentConfirmationWorkflowsPage'
import NigeriaLocationPage from './pages/NigeriaLocationPage'
import LagosLocationPage from './pages/LagosLocationPage'
import UnitedStatesLocationPage from './pages/UnitedStatesLocationPage'
import CanadaLocationPage from './pages/CanadaLocationPage'
import AustraliaLocationPage from './pages/AustraliaLocationPage'
import GhanaLocationPage from './pages/GhanaLocationPage'
import SouthAfricaLocationPage from './pages/SouthAfricaLocationPage'
import BrazilLocationPage from './pages/BrazilLocationPage'
import GermanyLocationPage from './pages/GermanyLocationPage'
import IrelandLocationPage from './pages/IrelandLocationPage'
import FranceLocationPage from './pages/FranceLocationPage'
import NetherlandsLocationPage from './pages/NetherlandsLocationPage'
import SwitzerlandLocationPage from './pages/SwitzerlandLocationPage'
import NewYorkLocationPage from './pages/NewYorkLocationPage'
import TorontoLocationPage from './pages/TorontoLocationPage'
import SydneyLocationPage from './pages/SydneyLocationPage'
import AccraLocationPage from './pages/AccraLocationPage'
import JohannesburgLocationPage from './pages/JohannesburgLocationPage'
import SaoPauloLocationPage from './pages/SaoPauloLocationPage'
import BerlinLocationPage from './pages/BerlinLocationPage'
import DublinLocationPage from './pages/DublinLocationPage'
import ParisLocationPage from './pages/ParisLocationPage'
import AmsterdamLocationPage from './pages/AmsterdamLocationPage'
import ZurichLocationPage from './pages/ZurichLocationPage'
import UnitedKingdomLocationPage from './pages/UnitedKingdomLocationPage'
import IndiaLocationPage from './pages/IndiaLocationPage'
import KenyaLocationPage from './pages/KenyaLocationPage'
import MexicoLocationPage from './pages/MexicoLocationPage'
import LondonLocationPage from './pages/LondonLocationPage'
import MumbaiLocationPage from './pages/MumbaiLocationPage'
import NairobiLocationPage from './pages/NairobiLocationPage'
import MexicoCityLocationPage from './pages/MexicoCityLocationPage'
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
        <Route path="/coming-soon-features" element={<Layout><ComingSoonFeaturesPage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/blog/:slug" element={<Layout><BlogPostPage /></Layout>} />
        <Route path="/download" element={<Layout><DownloadPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/branding" element={<Layout><BrandingPage /></Layout>} />
        <Route path="/privacy" element={<Layout><PrivacyPolicyPage /></Layout>} />
        <Route path="/terms" element={<Layout><TermsOfServicePage /></Layout>} />
        <Route path="/cookie-policy" element={<Layout><CookiePolicyPage /></Layout>} />
        <Route path="/security" element={<Layout><SecurityPage /></Layout>} />
        <Route path="/accessibility" element={<Layout><AccessibilityPage /></Layout>} />
        <Route path="/press" element={<Layout><PressPage /></Layout>} />
        <Route path="/careers" element={<Layout><CareersPage /></Layout>} />
        <Route path="/thank-you" element={<Layout><ThankYouPage /></Layout>} />
        <Route path="/help" element={<Layout><HelpPage /></Layout>} />
        <Route path="/sitemap" element={<Layout><SitemapPage /></Layout>} />
        <Route path="/waitlist" element={<Layout><WaitlistPage /></Layout>} />
        <Route path="/delete-account" element={<Layout><DeleteAccountPage /></Layout>} />
        <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
        <Route path="/use-cases" element={<Layout><UseCasesPage /></Layout>} />
        <Route path="/use-cases/families" element={<Layout><FamiliesUseCasePage /></Layout>} />
        <Route path="/use-cases/churches" element={<Layout><ChurchesUseCasePage /></Layout>} />
        <Route path="/use-cases/schools" element={<Layout><SchoolsUseCasePage /></Layout>} />
        <Route path="/use-cases/friend-groups" element={<Layout><FriendGroupsUseCasePage /></Layout>} />
        <Route path="/use-cases/workplace" element={<Layout><WorkplaceUseCasePage /></Layout>} />
        <Route path="/use-cases/community-organizations" element={<Layout><CommunityOrganizationsUseCasePage /></Layout>} />
        <Route path="/comparisons" element={<Layout><ComparisonsPage /></Layout>} />
        <Route path="/comparisons/whatsapp-groups" element={<Layout><WhatsAppGroupsComparisonPage /></Layout>} />
        <Route path="/comparisons/excel-spreadsheets" element={<Layout><ExcelSpreadsheetsComparisonPage /></Layout>} />
        <Route path="/locations" element={<Layout><LocationsPage /></Layout>} />
        <Route path="/locations/nigeria" element={<Layout><NigeriaLocationPage /></Layout>} />
        <Route path="/locations/lagos" element={<Layout><LagosLocationPage /></Layout>} />
        <Route path="/locations/united-states" element={<Layout><UnitedStatesLocationPage /></Layout>} />
        <Route path="/locations/canada" element={<Layout><CanadaLocationPage /></Layout>} />
        <Route path="/locations/australia" element={<Layout><AustraliaLocationPage /></Layout>} />
        <Route path="/locations/ghana" element={<Layout><GhanaLocationPage /></Layout>} />
        <Route path="/locations/south-africa" element={<Layout><SouthAfricaLocationPage /></Layout>} />
        <Route path="/locations/brazil" element={<Layout><BrazilLocationPage /></Layout>} />
        <Route path="/locations/germany" element={<Layout><GermanyLocationPage /></Layout>} />
        <Route path="/locations/ireland" element={<Layout><IrelandLocationPage /></Layout>} />
        <Route path="/locations/france" element={<Layout><FranceLocationPage /></Layout>} />
        <Route path="/locations/netherlands" element={<Layout><NetherlandsLocationPage /></Layout>} />
        <Route path="/locations/switzerland" element={<Layout><SwitzerlandLocationPage /></Layout>} />
        <Route path="/locations/new-york" element={<Layout><NewYorkLocationPage /></Layout>} />
        <Route path="/locations/toronto" element={<Layout><TorontoLocationPage /></Layout>} />
        <Route path="/locations/sydney" element={<Layout><SydneyLocationPage /></Layout>} />
        <Route path="/locations/accra" element={<Layout><AccraLocationPage /></Layout>} />
        <Route path="/locations/johannesburg" element={<Layout><JohannesburgLocationPage /></Layout>} />
        <Route path="/locations/sao-paulo" element={<Layout><SaoPauloLocationPage /></Layout>} />
        <Route path="/locations/berlin" element={<Layout><BerlinLocationPage /></Layout>} />
        <Route path="/locations/dublin" element={<Layout><DublinLocationPage /></Layout>} />
        <Route path="/locations/paris" element={<Layout><ParisLocationPage /></Layout>} />
        <Route path="/locations/amsterdam" element={<Layout><AmsterdamLocationPage /></Layout>} />
        <Route path="/locations/zurich" element={<Layout><ZurichLocationPage /></Layout>} />
        <Route path="/locations/united-kingdom" element={<Layout><UnitedKingdomLocationPage /></Layout>} />
        <Route path="/locations/india" element={<Layout><IndiaLocationPage /></Layout>} />
        <Route path="/locations/kenya" element={<Layout><KenyaLocationPage /></Layout>} />
        <Route path="/locations/mexico" element={<Layout><MexicoLocationPage /></Layout>} />
        <Route path="/locations/london" element={<Layout><LondonLocationPage /></Layout>} />
        <Route path="/locations/mumbai" element={<Layout><MumbaiLocationPage /></Layout>} />
        <Route path="/locations/nairobi" element={<Layout><NairobiLocationPage /></Layout>} />
        <Route path="/locations/mexico-city" element={<Layout><MexicoCityLocationPage /></Layout>} />
        <Route path="/resources" element={<Layout><ResourcesPage /></Layout>} />
        <Route path="/resources/how-to-organize-birthday-contributions" element={<Layout><HowToOrganizeBirthdayContributionsPage /></Layout>} />
        <Route path="/resources/birthday-contribution-etiquette" element={<Layout><BirthdayContributionEtiquettePage /></Layout>} />
        <Route path="/resources/calculating-group-contributions" element={<Layout><CalculatingGroupContributionsPage /></Layout>} />
        <Route path="/resources/multi-currency-group-payments" element={<Layout><MultiCurrencyGroupPaymentsPage /></Layout>} />
        <Route path="/resources/managing-large-group-contributions" element={<Layout><ManagingLargeGroupContributionsPage /></Layout>} />
        <Route path="/resources/avoiding-birthday-contribution-mistakes" element={<Layout><AvoidingBirthdayContributionMistakesPage /></Layout>} />
        <Route path="/resources/setting-up-your-first-group" element={<Layout><SettingUpYourFirstGroupPage /></Layout>} />
        <Route path="/resources/understanding-member-reliability-scores" element={<Layout><UnderstandingMemberReliabilityScoresPage /></Layout>} />
        <Route path="/resources/budgeting-for-group-contributions" element={<Layout><BudgetingForGroupContributionsPage /></Layout>} />
        <Route path="/resources/choosing-the-right-contribution-amount" element={<Layout><ChoosingTheRightContributionAmountPage /></Layout>} />
        <Route path="/resources/advanced-group-management-strategies" element={<Layout><AdvancedGroupManagementStrategiesPage /></Layout>} />
        <Route path="/resources/optimizing-payment-confirmation-workflows" element={<Layout><OptimizingPaymentConfirmationWorkflowsPage /></Layout>} />
        
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
