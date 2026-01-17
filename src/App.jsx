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
import AppRulesPage from './pages/AppRulesPage'
import AccessibilityPage from './pages/AccessibilityPage'
import PressPage from './pages/PressPage'
import CareersPage from './pages/CareersPage'
import ThankYouPage from './pages/ThankYouPage'
import HelpPage from './pages/HelpPage'
import SitemapPage from './pages/SitemapPage'
import WaitlistPage from './pages/WaitlistPage'
import DeleteAccountPage from './pages/DeleteAccountPage'
import ReportPage from './pages/ReportPage'
import GlossaryPage from './pages/GlossaryPage'
import NotFoundPage from './pages/NotFoundPage'
import PricingPage from './pages/PricingPage'
import UseCasesPage from './pages/UseCasesPage'
import FamiliesUseCasePage from './pages/FamiliesUseCasePage'
import GroupTripsAndHolidaysUseCasePage from './pages/GroupTripsAndHolidaysUseCasePage'
import OfficeBirthdayFundUseCasePage from './pages/OfficeBirthdayFundUseCasePage'
import SharedRentAndBillsUseCasePage from './pages/SharedRentAndBillsUseCasePage'
import GroupBirthdayGiftsUseCasePage from './pages/GroupBirthdayGiftsUseCasePage'
import ChurchesUseCasePage from './pages/ChurchesUseCasePage'
import SchoolsUseCasePage from './pages/SchoolsUseCasePage'
import FriendGroupsUseCasePage from './pages/FriendGroupsUseCasePage'
import WorkplaceUseCasePage from './pages/WorkplaceUseCasePage'
import CommunityOrganizationsUseCasePage from './pages/CommunityOrganizationsUseCasePage'
import SharedSubscriptionsUseCasePage from './pages/SharedSubscriptionsUseCasePage'
import WeddingsUseCasePage from './pages/WeddingsUseCasePage'
import BabyShowersUseCasePage from './pages/BabyShowersUseCasePage'
import PartiesEventsUseCasePage from './pages/PartiesEventsUseCasePage'
import GraduationsUseCasePage from './pages/GraduationsUseCasePage'
import SportsTeamsUseCasePage from './pages/SportsTeamsUseCasePage'
import HobbyGroupsUseCasePage from './pages/HobbyGroupsUseCasePage'
import AlumniAssociationsUseCasePage from './pages/AlumniAssociationsUseCasePage'
import StudentsUseCasePage from './pages/StudentsUseCasePage'
import RoommatesUseCasePage from './pages/RoommatesUseCasePage'
import CouplesUseCasePage from './pages/CouplesUseCasePage'
import EmergencyFundsUseCasePage from './pages/EmergencyFundsUseCasePage'
import FuneralMemorialUseCasePage from './pages/FuneralMemorialUseCasePage'
import SavingsGroupsUseCasePage from './pages/SavingsGroupsUseCasePage'
import NonProfitsUseCasePage from './pages/NonProfitsUseCasePage'
import MovingRelocationUseCasePage from './pages/MovingRelocationUseCasePage'
import HomeRenovationUseCasePage from './pages/HomeRenovationUseCasePage'
import WhatsAppGroupsComparisonPage from './pages/WhatsAppGroupsComparisonPage'
import ExcelSpreadsheetsComparisonPage from './pages/ExcelSpreadsheetsComparisonPage'
import GoogleSheetsComparisonPage from './pages/GoogleSheetsComparisonPage'
import ManualMethodsComparisonPage from './pages/ManualMethodsComparisonPage'
import SplitwiseComparisonPage from './pages/SplitwiseComparisonPage'
import VenmoComparisonPage from './pages/VenmoComparisonPage'
import PaymentAppsWithChatComparisonPage from './pages/PaymentAppsWithChatComparisonPage'
import ComparisonsPage from './pages/ComparisonsPage'
import LocationsPage from './pages/LocationsPage'
import ResourcesPage from './pages/ResourcesPage'
import HowToOrganizeBirthdayContributionsPage from './pages/HowToOrganizeBirthdayContributionsPage'
import BirthdayContributionEtiquettePage from './pages/BirthdayContributionEtiquettePage'
import UsingBirthdayWishlistsPage from './pages/UsingBirthdayWishlistsPage'
import UsingWishlistsInGeneralGroupsPage from './pages/UsingWishlistsInGeneralGroupsPage'
import HowToCreateBirthdayWishlistPage from './pages/HowToCreateBirthdayWishlistPage'
import BirthdayWishlistMeaningPage from './pages/BirthdayWishlistMeaningPage'
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
import SettingUpBirthdayGroupsPage from './pages/SettingUpBirthdayGroupsPage'
import SettingUpSubscriptionGroupsPage from './pages/SettingUpSubscriptionGroupsPage'
import SettingUpAutoPayPage from './pages/SettingUpAutoPayPage'
import UsingYourWalletPage from './pages/UsingYourWalletPage'
import WithdrawingFundsPage from './pages/WithdrawingFundsPage'
import PaymentMethodsGuidePage from './pages/PaymentMethodsGuidePage'
import CoAdminPermissionsPage from './pages/CoAdminPermissionsPage'
import AutoPayBestPracticesPage from './pages/AutoPayBestPracticesPage'
import WalletManagementBestPracticesPage from './pages/WalletManagementBestPracticesPage'
import CreatingGeneralGroupsForEventsPage from './pages/CreatingGeneralGroupsForEventsPage'
import SubscriptionGroupBestPracticesPage from './pages/SubscriptionGroupBestPracticesPage'
import BirthdayGiftCollectionBestPracticesPage from './pages/BirthdayGiftCollectionBestPracticesPage'
import WorkplaceLeavingGiftCollectionBestPracticesPage from './pages/WorkplaceLeavingGiftCollectionBestPracticesPage'
import GroupTripCollectionBestPracticesPage from './pages/GroupTripCollectionBestPracticesPage'
import ManagingEventContributionsPage from './pages/ManagingEventContributionsPage'
import ChoosingBetweenGroupTypesPage from './pages/ChoosingBetweenGroupTypesPage'
import SubscriptionDeadlineManagementPage from './pages/SubscriptionDeadlineManagementPage'
import AdminAccountDetailsGuidePage from './pages/AdminAccountDetailsGuidePage'
import OrganizingInternationalGroupContributionsPage from './pages/OrganizingInternationalGroupContributionsPage'
import SubscriptionGroupPaymentSchedulesPage from './pages/SubscriptionGroupPaymentSchedulesPage'
import UsingGroupChatAndMessagingPage from './pages/UsingGroupChatAndMessagingPage'
import GroupChatBestPracticesPage from './pages/GroupChatBestPracticesPage'
import ContributionCalculatorPage from './pages/ContributionCalculatorPage'
import BestWayToCollectMoneyFromGroupPage from './pages/BestWayToCollectMoneyFromGroupPage'
import BestAppForSplittingBillsPage from './pages/BestAppForSplittingBillsPage'
import AppToManageGroupExpensesForBirthdaysPage from './pages/AppToManageGroupExpensesForBirthdaysPage'
import YearlyContributionEstimatorPage from './pages/YearlyContributionEstimatorPage'
import ToolsPage from './pages/ToolsPage'
import IndustriesPage from './pages/IndustriesPage'
import RealEstateIndustryPage from './pages/RealEstateIndustryPage'
import HealthcareIndustryPage from './pages/HealthcareIndustryPage'
import RetailIndustryPage from './pages/RetailIndustryPage'
import EducationIndustryPage from './pages/EducationIndustryPage'
import FinanceIndustryPage from './pages/FinanceIndustryPage'
import TechnologyIndustryPage from './pages/TechnologyIndustryPage'
import HospitalityIndustryPage from './pages/HospitalityIndustryPage'
import BestPracticesPage from './pages/BestPracticesPage'
import ManagingLargeGroupsBestPracticesPage from './pages/ManagingLargeGroupsBestPracticesPage'
import InternationalGroupsBestPracticesPage from './pages/InternationalGroupsBestPracticesPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import ChurchBirthdayGroupCaseStudyPage from './pages/ChurchBirthdayGroupCaseStudyPage'
import FamilyBirthdayFundCaseStudyPage from './pages/FamilyBirthdayFundCaseStudyPage'
import SchoolGroupCaseStudyPage from './pages/SchoolGroupCaseStudyPage'
import WorkplaceGroupCaseStudyPage from './pages/WorkplaceGroupCaseStudyPage'
import SeasonalPage from './pages/SeasonalPage'
import HolidayContributionsPage from './pages/HolidayContributionsPage'
import BackToSchoolContributionsPage from './pages/BackToSchoolContributionsPage'
import WeddingSeasonContributionsPage from './pages/WeddingSeasonContributionsPage'
import NewYearContributionsPage from './pages/NewYearContributionsPage'
import ValentineContributionsPage from './pages/ValentineContributionsPage'
import EasterContributionsPage from './pages/EasterContributionsPage'
import MothersDayContributionsPage from './pages/MothersDayContributionsPage'
import TeacherAppreciationContributionsPage from './pages/TeacherAppreciationContributionsPage'
import GraduationContributionsPage from './pages/GraduationContributionsPage'
import FathersDayContributionsPage from './pages/FathersDayContributionsPage'
import IndependenceDayContributionsPage from './pages/IndependenceDayContributionsPage'
import LaborDayContributionsPage from './pages/LaborDayContributionsPage'
import HalloweenContributionsPage from './pages/HalloweenContributionsPage'
import DiwaliContributionsPage from './pages/DiwaliContributionsPage'
import BabyShowerContributionsPage from './pages/BabyShowerContributionsPage'
import HousewarmingContributionsPage from './pages/HousewarmingContributionsPage'
import OfficePartyContributionsPage from './pages/OfficePartyContributionsPage'
import ThanksgivingContributionsPage from './pages/ThanksgivingContributionsPage'
import StPatricksDayContributionsPage from './pages/StPatricksDayContributionsPage'
import ChristmasContributionsPage from './pages/ChristmasContributionsPage'
import MemorialDayContributionsPage from './pages/MemorialDayContributionsPage'
import HanukkahContributionsPage from './pages/HanukkahContributionsPage'
import KwanzaaContributionsPage from './pages/KwanzaaContributionsPage'
import ChineseNewYearContributionsPage from './pages/ChineseNewYearContributionsPage'
import RamadanEidContributionsPage from './pages/RamadanEidContributionsPage'
import GroupTypesPage from './pages/GroupTypesPage'
import BirthdayGroupsPage from './pages/BirthdayGroupsPage'
import SubscriptionGroupsPage from './pages/SubscriptionGroupsPage'
import GeneralGroupsPage from './pages/GeneralGroupsPage'
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
import SpainLocationPage from './pages/SpainLocationPage'
import ItalyLocationPage from './pages/ItalyLocationPage'
import ChinaLocationPage from './pages/ChinaLocationPage'
import JapanLocationPage from './pages/JapanLocationPage'
import TokyoLocationPage from './pages/TokyoLocationPage'
import ShanghaiLocationPage from './pages/ShanghaiLocationPage'
import SingaporeCityLocationPage from './pages/SingaporeCityLocationPage'     
import SingaporeLocationPage from './pages/SingaporeLocationPage'
import EgyptLocationPage from './pages/EgyptLocationPage'
import ArgentinaLocationPage from './pages/ArgentinaLocationPage'
import ChileLocationPage from './pages/ChileLocationPage'
import PortugalLocationPage from './pages/PortugalLocationPage'
import GreeceLocationPage from './pages/GreeceLocationPage'
import BelgiumLocationPage from './pages/BelgiumLocationPage'
import DenmarkLocationPage from './pages/DenmarkLocationPage'
import NorwayLocationPage from './pages/NorwayLocationPage'
import NewZealandLocationPage from './pages/NewZealandLocationPage'
import ThailandLocationPage from './pages/ThailandLocationPage'
import CairoLocationPage from './pages/CairoLocationPage'
import BuenosAiresLocationPage from './pages/BuenosAiresLocationPage'
import SantiagoLocationPage from './pages/SantiagoLocationPage'
import LisbonLocationPage from './pages/LisbonLocationPage'
import AthensLocationPage from './pages/AthensLocationPage'
import BrusselsLocationPage from './pages/BrusselsLocationPage'
import CopenhagenLocationPage from './pages/CopenhagenLocationPage'
import OsloLocationPage from './pages/OsloLocationPage'
import AucklandLocationPage from './pages/AucklandLocationPage'
import BangkokLocationPage from './pages/BangkokLocationPage'
import AustriaLocationPage from './pages/AustriaLocationPage'
import BulgariaLocationPage from './pages/BulgariaLocationPage'
import CroatiaLocationPage from './pages/CroatiaLocationPage'
import CzechRepublicLocationPage from './pages/CzechRepublicLocationPage'
import HungaryLocationPage from './pages/HungaryLocationPage'
import IcelandLocationPage from './pages/IcelandLocationPage'
import LatviaLocationPage from './pages/LatviaLocationPage'
import LiechtensteinLocationPage from './pages/LiechtensteinLocationPage'
import LithuaniaLocationPage from './pages/LithuaniaLocationPage'
import LuxembourgLocationPage from './pages/LuxembourgLocationPage'
import MaltaLocationPage from './pages/MaltaLocationPage'
import RomaniaLocationPage from './pages/RomaniaLocationPage'
import SlovakiaLocationPage from './pages/SlovakiaLocationPage'
import SloveniaLocationPage from './pages/SloveniaLocationPage'
import ViennaLocationPage from './pages/ViennaLocationPage'
import SofiaLocationPage from './pages/SofiaLocationPage'
import ZagrebLocationPage from './pages/ZagrebLocationPage'
import PragueLocationPage from './pages/PragueLocationPage'
import BudapestLocationPage from './pages/BudapestLocationPage'
import ReykjavikLocationPage from './pages/ReykjavikLocationPage'
import RigaLocationPage from './pages/RigaLocationPage'
import VaduzLocationPage from './pages/VaduzLocationPage'
import VilniusLocationPage from './pages/VilniusLocationPage'
import LuxembourgCityLocationPage from './pages/LuxembourgCityLocationPage'
import VallettaLocationPage from './pages/VallettaLocationPage'
import BucharestLocationPage from './pages/BucharestLocationPage'
import BratislavaLocationPage from './pages/BratislavaLocationPage'
import LjubljanaLocationPage from './pages/LjubljanaLocationPage'
import WarsawLocationPage from './pages/WarsawLocationPage'
import IstanbulLocationPage from './pages/IstanbulLocationPage'
import BarcelonaLocationPage from './pages/BarcelonaLocationPage'
import MilanLocationPage from './pages/MilanLocationPage'
import ManilaLocationPage from './pages/ManilaLocationPage'
import HoChiMinhCityLocationPage from './pages/HoChiMinhCityLocationPage'
import JakartaLocationPage from './pages/JakartaLocationPage'
import BogotaLocationPage from './pages/BogotaLocationPage'
import HelsinkiLocationPage from './pages/HelsinkiLocationPage'
import StockholmLocationPage from './pages/StockholmLocationPage'
import SanaaLocationPage from './pages/SanaaLocationPage'
import BaghdadLocationPage from './pages/BaghdadLocationPage'
import AmmanLocationPage from './pages/AmmanLocationPage'
import KingstonLocationPage from './pages/KingstonLocationPage'
import BeirutLocationPage from './pages/BeirutLocationPage'
import ColomboLocationPage from './pages/ColomboLocationPage'
import BelgradeLocationPage from './pages/BelgradeLocationPage'
import SouthKoreaLocationPage from './pages/SouthKoreaLocationPage'
import TallinnLocationPage from './pages/TallinnLocationPage'
import KampalaLocationPage from './pages/KampalaLocationPage'
import IslamabadLocationPage from './pages/IslamabadLocationPage'
import MoscowLocationPage from './pages/MoscowLocationPage'
import KyivLocationPage from './pages/KyivLocationPage'
import KualaLumpurLocationPage from './pages/KualaLumpurLocationPage'
import MalaysiaLocationPage from './pages/MalaysiaLocationPage'
import AfghanistanLocationPage from './pages/AfghanistanLocationPage'
import KabulLocationPage from './pages/KabulLocationPage'
import SeoulLocationPage from './pages/SeoulLocationPage'
import PolandLocationPage from './pages/PolandLocationPage'
import EstoniaLocationPage from './pages/EstoniaLocationPage.jsx'
import UgandaLocationPage from './pages/UgandaLocationPage.jsx'
import PakistanLocationPage from './pages/PakistanLocationPage.jsx'
import RussiaLocationPage from './pages/RussiaLocationPage.jsx'
import UkraineLocationPage from './pages/UkraineLocationPage.jsx'
import TurkeyLocationPage from './pages/TurkeyLocationPage.jsx'
import IndonesiaLocationPage from './pages/IndonesiaLocationPage.jsx'
import ColombiaLocationPage from './pages/ColombiaLocationPage.jsx'
import FinlandLocationPage from './pages/FinlandLocationPage.jsx'
import SwedenLocationPage from './pages/SwedenLocationPage.jsx'
import VietnamLocationPage from './pages/VietnamLocationPage.jsx'
import IsraelLocationPage from './pages/IsraelLocationPage'
import VenezuelaLocationPage from './pages/VenezuelaLocationPage'
import MoroccoLocationPage from './pages/MoroccoLocationPage'
import TelAvivLocationPage from './pages/TelAvivLocationPage'
import CaracasLocationPage from './pages/CaracasLocationPage'
import CasablancaLocationPage from './pages/CasablancaLocationPage'
import MacauLocationPage from './pages/MacauLocationPage'
import SenegalLocationPage from './pages/SenegalLocationPage'
import SaudiArabiaLocationPage from './pages/SaudiArabiaLocationPage'
import GuineaBissauLocationPage from './pages/GuineaBissauLocationPage'
import MacauCityLocationPage from './pages/MacauCityLocationPage'
import DakarLocationPage from './pages/DakarLocationPage'
import RiyadhLocationPage from './pages/RiyadhLocationPage'
import BissauLocationPage from './pages/BissauLocationPage'
import BangladeshLocationPage from './pages/BangladeshLocationPage'
import DhakaLocationPage from './pages/DhakaLocationPage'
import YemenLocationPage from './pages/YemenLocationPage.jsx'
import IraqLocationPage from './pages/IraqLocationPage.jsx'
import JordanLocationPage from './pages/JordanLocationPage.jsx'
import JamaicaLocationPage from './pages/JamaicaLocationPage.jsx'
import LebanonLocationPage from './pages/LebanonLocationPage.jsx'
import SriLankaLocationPage from './pages/SriLankaLocationPage.jsx'
import SerbiaLocationPage from './pages/SerbiaLocationPage.jsx'
import SubscriptionGroupPage from './pages/SubscriptionGroupPage'
import NetflixPage from './pages/NetflixPage'
import SpotifyPage from './pages/SpotifyPage'
import DisneyPlusPage from './pages/DisneyPlusPage'
import HuluPage from './pages/HuluPage'
import HBOMaxPage from './pages/HBOMaxPage'
import AppleTVPlusPage from './pages/AppleTVPlusPage'
import YoutubePremiumPage from './pages/YoutubePremiumPage'
import AmazonPrimePage from './pages/AmazonPrimePage'
import ParamountPlusPage from './pages/ParamountPlusPage'
import AppleMusicPage from './pages/AppleMusicPage'
import ChatGPTPlusPage from './pages/ChatGPTPlusPage'  
import CanvaProPage from './pages/CanvaProPage'
import NowEntertainmentPage from './pages/NowEntertainmentPage'
import PeacockPage from './pages/PeacockPage'
import AmazonMusicPage from './pages/AmazonMusicPage'
import DeliverooPlusPage from './pages/DeliverooPlusPage'
import JustEatPlusPage from './pages/JustEatPlusPage'
import DoorDashDashPassPage from './pages/DoorDashDashPassPage'
import PostmatesUnlimitedPage from './pages/PostmatesUnlimitedPage'
import GrubhubPlusPage from './pages/GrubhubPlusPage'
import GoustoPage from './pages/GoustoPage'
import UberEatsPassPage from './pages/UberEatsPassPage'
import BlueApronPage from './pages/BlueApronPage'
import HelloFreshPage from './pages/HelloFreshPage'
import UniversalYumsPage from './pages/UniversalYumsPage'
import HomeChefPage from './pages/HomeChefPage'
import BokksuPage from './pages/BokksuPage'
import PureGymPlusPage from './pages/PureGymPlusPage'
import TheGymGroupUltimateSubscriptionPage from './pages/TheGymGroupUltimateSubscriptionPage' 
import LAFitnessPage from './pages/LAFitnessPage' 
import AppleFitnessPlusPage from './pages/AppleFitnessPlusPage'
import FitnessBlissPage from './pages/FitnessBlissPage'
import MindbodyFamilyPage from './pages/MindbodyFamilyPage'
import PlanetFitnessPage from './pages/PlanetFitnessPage'
import VirginActivePage from './pages/VirginActivePage'
import GetStartedPage from './pages/GetStartedPage'
import ShowtimePage from './pages/ShowtimePage'
import StarzPage from './pages/StarzPage'
import AMCPlusPage from './pages/AMCPlusPage'
import CrunchyrollPage from './pages/CrunchyrollPage'
import DiscoveryPlusPage from './pages/DiscoveryPlusPage'
import ESPNPlusPage from './pages/ESPNPlusPage'
import SlingTVPage from './pages/SlingTVPage'
import FuboTVPage from './pages/FuboTVPage'
import YouTubeTVPage from './pages/YouTubeTVPage'
import AdobeCreativeCloudPage from './pages/AdobeCreativeCloudPage'
import Microsoft365Page from './pages/Microsoft365Page'
import NotionPage from './pages/NotionPage'
import GrammarlyPremiumPage from './pages/GrammarlyPremiumPage'
import LinkedInPremiumPage from './pages/LinkedInPremiumPage'
import XboxGamePassPage from './pages/XboxGamePassPage'
import PlayStationPlusPage from './pages/PlayStationPlusPage'
import NintendoSwitchOnlinePage from './pages/NintendoSwitchOnlinePage'
import DropboxPage from './pages/DropboxPage'
import GoogleOnePage from './pages/GoogleOnePage'
import ICloudPlusPage from './pages/ICloudPlusPage'
import NordVPNPage from './pages/NordVPNPage'
import ExpressVPNPage from './pages/ExpressVPNPage'
import NewYorkTimesPage from './pages/NewYorkTimesPage'
import WallStreetJournalPage from './pages/WallStreetJournalPage'


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
import AdminReports from './pages/admin/AdminReports'
import AdminCustomEmails from './pages/admin/AdminCustomEmails'
import AdminCustomNotifications from './pages/admin/AdminCustomNotifications'
import AdminWithdrawals from './pages/admin/AdminWithdrawals'
import AdminAutopay from './pages/admin/AdminAutopay'
import AdminChangePassword from './pages/admin/AdminChangePassword'
import ProtectedRoute from './components/admin/ProtectedRoute'
import './App.css'
import PhilippinesLocationPage from './pages/PhilippinesLocationPage'

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
        <Route path="/app-rules" element={<Layout><AppRulesPage /></Layout>} />
        <Route path="/accessibility" element={<Layout><AccessibilityPage /></Layout>} />
        <Route path="/press" element={<Layout><PressPage /></Layout>} />
        <Route path="/careers" element={<Layout><CareersPage /></Layout>} />
        <Route path="/thank-you" element={<Layout><ThankYouPage /></Layout>} />
        <Route path="/help" element={<Layout><HelpPage /></Layout>} />
        <Route path="/sitemap" element={<Layout><SitemapPage /></Layout>} />
        <Route path="/glossary" element={<Layout><GlossaryPage /></Layout>} />
        <Route path="/resources/setting-up-auto-pay" element={<Layout><SettingUpAutoPayPage /></Layout>} />
        <Route path="/resources/using-your-wallet" element={<Layout><UsingYourWalletPage /></Layout>} />
        <Route path="/resources/withdrawing-funds" element={<Layout><WithdrawingFundsPage /></Layout>} />
        <Route path="/resources/payment-methods-guide" element={<Layout><PaymentMethodsGuidePage /></Layout>} />
        <Route path="/resources/co-admin-permissions" element={<Layout><CoAdminPermissionsPage /></Layout>} />
        <Route path="/best-practices/auto-pay-best-practices" element={<Layout><AutoPayBestPracticesPage /></Layout>} />
        <Route path="/best-practices/wallet-management-best-practices" element={<Layout><WalletManagementBestPracticesPage /></Layout>} />
        <Route path="/waitlist" element={<Layout><WaitlistPage /></Layout>} />
        <Route path="/delete-account" element={<Layout><DeleteAccountPage /></Layout>} />
        <Route path="/report" element={<Layout><ReportPage /></Layout>} />
        <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
        <Route path="/use-cases" element={<Layout><UseCasesPage /></Layout>} />
        <Route path="/use-cases/families" element={<Layout><FamiliesUseCasePage /></Layout>} />
        <Route path="/use-cases/group-trips-and-holidays" element={<Layout><GroupTripsAndHolidaysUseCasePage /></Layout>} />
        <Route path="/use-cases/office-birthday-fund" element={<Layout><OfficeBirthdayFundUseCasePage /></Layout>} />
        <Route path="/use-cases/shared-rent-and-bills" element={<Layout><SharedRentAndBillsUseCasePage /></Layout>} />
        <Route path="/use-cases/group-birthday-gifts" element={<Layout><GroupBirthdayGiftsUseCasePage /></Layout>} />
        <Route path="/use-cases/churches" element={<Layout><ChurchesUseCasePage /></Layout>} />
        <Route path="/use-cases/schools" element={<Layout><SchoolsUseCasePage /></Layout>} />
        <Route path="/use-cases/friend-groups" element={<Layout><FriendGroupsUseCasePage /></Layout>} />
        <Route path="/use-cases/workplace" element={<Layout><WorkplaceUseCasePage /></Layout>} />
        <Route path="/use-cases/community-organizations" element={<Layout><CommunityOrganizationsUseCasePage /></Layout>} />
        <Route path="/use-cases/shared-subscriptions" element={<Layout><SharedSubscriptionsUseCasePage /></Layout>} />
        <Route path="/use-cases/weddings" element={<Layout><WeddingsUseCasePage /></Layout>} />
        <Route path="/use-cases/baby-showers" element={<Layout><BabyShowersUseCasePage /></Layout>} />
        <Route path="/use-cases/parties-and-events" element={<Layout><PartiesEventsUseCasePage /></Layout>} />
        <Route path="/use-cases/graduations" element={<Layout><GraduationsUseCasePage /></Layout>} />
        <Route path="/use-cases/sports-teams" element={<Layout><SportsTeamsUseCasePage /></Layout>} />
        <Route path="/use-cases/hobby-groups" element={<Layout><HobbyGroupsUseCasePage /></Layout>} />
        <Route path="/use-cases/alumni-associations" element={<Layout><AlumniAssociationsUseCasePage /></Layout>} />
        <Route path="/use-cases/students" element={<Layout><StudentsUseCasePage /></Layout>} />
        <Route path="/use-cases/roommates" element={<Layout><RoommatesUseCasePage /></Layout>} />
        <Route path="/use-cases/couples" element={<Layout><CouplesUseCasePage /></Layout>} />
        <Route path="/use-cases/emergency-funds" element={<Layout><EmergencyFundsUseCasePage /></Layout>} />
        <Route path="/use-cases/funeral-memorial" element={<Layout><FuneralMemorialUseCasePage /></Layout>} />
        <Route path="/use-cases/savings-groups" element={<Layout><SavingsGroupsUseCasePage /></Layout>} />
        <Route path="/use-cases/non-profits" element={<Layout><NonProfitsUseCasePage /></Layout>} />
        <Route path="/use-cases/moving-relocation" element={<Layout><MovingRelocationUseCasePage /></Layout>} />
        <Route path="/use-cases/home-renovation" element={<Layout><HomeRenovationUseCasePage /></Layout>} />
        <Route path="/group-types" element={<Layout><GroupTypesPage /></Layout>} />
        <Route path="/group-types/birthday-groups" element={<Layout><BirthdayGroupsPage /></Layout>} />
        <Route path="/group-types/subscription-groups" element={<Layout><SubscriptionGroupsPage /></Layout>} />
        <Route path="/group-types/general-groups" element={<Layout><GeneralGroupsPage /></Layout>} />
        <Route path="/comparisons" element={<Layout><ComparisonsPage /></Layout>} />
        <Route path="/comparisons/whatsapp-groups" element={<Layout><WhatsAppGroupsComparisonPage /></Layout>} />
        <Route path="/comparisons/excel-spreadsheets" element={<Layout><ExcelSpreadsheetsComparisonPage /></Layout>} />
        <Route path="/comparisons/google-sheets" element={<Layout><GoogleSheetsComparisonPage /></Layout>} />
        <Route path="/comparisons/manual-methods" element={<Layout><ManualMethodsComparisonPage /></Layout>} />
        <Route path="/comparisons/splitwise" element={<Layout><SplitwiseComparisonPage /></Layout>} />
        <Route path="/comparisons/venmo" element={<Layout><VenmoComparisonPage /></Layout>} />
        <Route path="/comparisons/payment-apps-with-chat" element={<Layout><PaymentAppsWithChatComparisonPage /></Layout>} />
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
        <Route path="/locations/spain" element={<Layout><SpainLocationPage /></Layout>} />
        <Route path="/locations/italy" element={<Layout><ItalyLocationPage /></Layout>} />
        <Route path="/locations/china" element={<Layout><ChinaLocationPage /></Layout>} />
        <Route path="/locations/japan" element={<Layout><JapanLocationPage /></Layout>} />
         <Route path="/locations/barcelona" element={<Layout><BarcelonaLocationPage /></Layout>} />
        <Route path="/locations/milan" element={<Layout><MilanLocationPage /></Layout>} />
        <Route path="/locations/tokyo" element={<Layout><TokyoLocationPage /></Layout>} />
        <Route path="/locations/shanghai" element={<Layout><ShanghaiLocationPage /></Layout>} />
        <Route path="/locations/london" element={<Layout><LondonLocationPage /></Layout>} />
        <Route path="/locations/mumbai" element={<Layout><MumbaiLocationPage /></Layout>} />
        <Route path="/locations/nairobi" element={<Layout><NairobiLocationPage /></Layout>} />
        <Route path="/locations/mexico-city" element={<Layout><MexicoCityLocationPage /></Layout>} />
        <Route path="/locations/manila" element={<Layout><ManilaLocationPage /></Layout>} />
        <Route path="/locations/philippines" element={<Layout>< PhilippinesLocationPage /></Layout>} />
<Route path="/locations/poland" element={<Layout><PolandLocationPage /></Layout>} />
<Route path="/locations/south-korea" element={<Layout><SouthKoreaLocationPage /></Layout>} />
<Route path="/locations/estonia" element={<Layout><EstoniaLocationPage /></Layout>} />
<Route path="/locations/uganda" element={<Layout><UgandaLocationPage /></Layout>} />
<Route path="/locations/pakistan" element={<Layout><PakistanLocationPage /></Layout>} />
<Route path="/locations/russia" element={<Layout><RussiaLocationPage /></Layout>} />
<Route path="/locations/ukraine" element={<Layout><UkraineLocationPage /></Layout>} />
<Route path="/locations/turkey" element={<Layout><TurkeyLocationPage /></Layout>} />
<Route path="/locations/indonesia" element={<Layout><IndonesiaLocationPage /></Layout>} />
<Route path="/locations/malaysia" element={<Layout><MalaysiaLocationPage /></Layout>} />
<Route path="/locations/colombia" element={<Layout><ColombiaLocationPage /></Layout>} />
<Route path="/locations/finland" element={<Layout><FinlandLocationPage /></Layout>} />
<Route path="/locations/sweden" element={<Layout><SwedenLocationPage /></Layout>} />
<Route path="/locations/vietnam" element={<Layout><VietnamLocationPage /></Layout>} />
<Route path="/locations/israel" element={<Layout><IsraelLocationPage /></Layout>} />
<Route path="/locations/venezuela" element={<Layout><VenezuelaLocationPage /></Layout>} />
<Route path="/locations/morocco" element={<Layout><MoroccoLocationPage /></Layout>} />
<Route path="/locations/tel-aviv" element={<Layout><TelAvivLocationPage /></Layout>} />
<Route path="/locations/caracas" element={<Layout><CaracasLocationPage /></Layout>} />
<Route path="/locations/casablanca" element={<Layout><CasablancaLocationPage /></Layout>} />
<Route path="/locations/macau" element={<Layout><MacauLocationPage /></Layout>} />
<Route path="/locations/senegal" element={<Layout><SenegalLocationPage /></Layout>} />
<Route path="/locations/saudi-arabia" element={<Layout><SaudiArabiaLocationPage /></Layout>} />
<Route path="/locations/guinea-bissau" element={<Layout><GuineaBissauLocationPage /></Layout>} />
<Route path="/locations/macau-city" element={<Layout><MacauCityLocationPage /></Layout>} />
<Route path="/locations/dakar" element={<Layout><DakarLocationPage /></Layout>} />
<Route path="/locations/riyadh" element={<Layout><RiyadhLocationPage /></Layout>} />
<Route path="/locations/bissau" element={<Layout><BissauLocationPage /></Layout>} />
<Route path="/locations/bangladesh" element={<Layout><BangladeshLocationPage /></Layout>} />
<Route path="/locations/dhaka" element={<Layout><DhakaLocationPage /></Layout>} />
<Route path="/locations/yemen" element={<Layout><YemenLocationPage /></Layout>} />
<Route path="/locations/iraq" element={<Layout><IraqLocationPage /></Layout>} />
<Route path="/locations/jordan" element={<Layout><JordanLocationPage /></Layout>} />
<Route path="/locations/jamaica" element={<Layout><JamaicaLocationPage /></Layout>} />
<Route path="/locations/singapore" element={<Layout><SingaporeLocationPage /></Layout>} />
<Route path="/locations/lebanon" element={<Layout><LebanonLocationPage /></Layout>} />
<Route path="/locations/sri-lanka" element={<Layout><SriLankaLocationPage /></Layout>} />
<Route path="/locations/serbia" element={<Layout><SerbiaLocationPage /></Layout>} />
<Route path="/locations/afghanistan" element={<Layout><AfghanistanLocationPage /></Layout>} />
<Route path="/locations/warsaw" element={<Layout><WarsawLocationPage /></Layout>} />
<Route path="/locations/seoul" element={<Layout><SeoulLocationPage /></Layout>} />
<Route path="/locations/tallinn" element={<Layout><TallinnLocationPage /></Layout>} />
<Route path="/locations/kampala" element={<Layout><KampalaLocationPage /></Layout>} />
<Route path="/locations/islamabad" element={<Layout><IslamabadLocationPage /></Layout>} />
<Route path="/locations/moscow" element={<Layout><MoscowLocationPage /></Layout>} />
<Route path="/locations/kyiv" element={<Layout><KyivLocationPage /></Layout>} />
<Route path="/locations/istanbul" element={<Layout><IstanbulLocationPage /></Layout>} />
<Route path="/locations/jakarta" element={<Layout><JakartaLocationPage /></Layout>} />
<Route path="/locations/kuala-lumpur" element={<Layout><KualaLumpurLocationPage /></Layout>} />
<Route path="/locations/bogota" element={<Layout><BogotaLocationPage /></Layout>} />
<Route path="/locations/helsinki" element={<Layout><HelsinkiLocationPage /></Layout>} />
<Route path="/locations/stockholm" element={<Layout><StockholmLocationPage /></Layout>} />
<Route path="/locations/ho-chi-minh-city" element={<Layout><HoChiMinhCityLocationPage /></Layout>} />
<Route path="/locations/sanaa" element={<Layout><SanaaLocationPage /></Layout>} />
<Route path="/locations/baghdad" element={<Layout><BaghdadLocationPage /></Layout>} />
<Route path="/locations/amman" element={<Layout><AmmanLocationPage /></Layout>} />
<Route path="/locations/kingston" element={<Layout><KingstonLocationPage /></Layout>} />
<Route path="/locations/singapore-city" element={<Layout><SingaporeCityLocationPage /></Layout>} />
<Route path="/locations/beirut" element={<Layout><BeirutLocationPage /></Layout>} />
<Route path="/locations/colombo" element={<Layout><ColomboLocationPage /></Layout>} />
<Route path="/locations/belgrade" element={<Layout><BelgradeLocationPage /></Layout>} />
<Route path="/locations/kabul" element={<Layout><KabulLocationPage /></Layout>} />
<Route path="/locations/egypt" element={<Layout><EgyptLocationPage /></Layout>} />
<Route path="/locations/argentina" element={<Layout><ArgentinaLocationPage /></Layout>} />
<Route path="/locations/chile" element={<Layout><ChileLocationPage /></Layout>} />
<Route path="/locations/portugal" element={<Layout><PortugalLocationPage /></Layout>} />
<Route path="/locations/greece" element={<Layout><GreeceLocationPage /></Layout>} />
<Route path="/locations/belgium" element={<Layout><BelgiumLocationPage /></Layout>} />
<Route path="/locations/denmark" element={<Layout><DenmarkLocationPage /></Layout>} />
<Route path="/locations/norway" element={<Layout><NorwayLocationPage /></Layout>} />
<Route path="/locations/new-zealand" element={<Layout><NewZealandLocationPage /></Layout>} />
<Route path="/locations/thailand" element={<Layout><ThailandLocationPage /></Layout>} />
<Route path="/locations/cairo" element={<Layout><CairoLocationPage /></Layout>} />
<Route path="/locations/buenos-aires" element={<Layout><BuenosAiresLocationPage /></Layout>} />
<Route path="/locations/santiago" element={<Layout><SantiagoLocationPage /></Layout>} />
<Route path="/locations/lisbon" element={<Layout><LisbonLocationPage /></Layout>} />
<Route path="/locations/athens" element={<Layout><AthensLocationPage /></Layout>} />
<Route path="/locations/brussels" element={<Layout><BrusselsLocationPage /></Layout>} />
<Route path="/locations/copenhagen" element={<Layout><CopenhagenLocationPage /></Layout>} />
<Route path="/locations/oslo" element={<Layout><OsloLocationPage /></Layout>} />
<Route path="/locations/auckland" element={<Layout><AucklandLocationPage /></Layout>} />
<Route path="/locations/bangkok" element={<Layout><BangkokLocationPage /></Layout>} />
<Route path="/locations/austria" element={<Layout><AustriaLocationPage /></Layout>} />
<Route path="/locations/bulgaria" element={<Layout><BulgariaLocationPage /></Layout>} />
<Route path="/locations/croatia" element={<Layout><CroatiaLocationPage /></Layout>} />
<Route path="/locations/czech-republic" element={<Layout><CzechRepublicLocationPage /></Layout>} />
<Route path="/locations/hungary" element={<Layout><HungaryLocationPage /></Layout>} />
<Route path="/locations/iceland" element={<Layout><IcelandLocationPage /></Layout>} />
<Route path="/locations/latvia" element={<Layout><LatviaLocationPage /></Layout>} />
<Route path="/locations/liechtenstein" element={<Layout><LiechtensteinLocationPage /></Layout>} />
<Route path="/locations/lithuania" element={<Layout><LithuaniaLocationPage /></Layout>} />
<Route path="/locations/luxembourg" element={<Layout><LuxembourgLocationPage /></Layout>} />
<Route path="/locations/malta" element={<Layout><MaltaLocationPage /></Layout>} />
<Route path="/locations/romania" element={<Layout><RomaniaLocationPage /></Layout>} />
<Route path="/locations/slovakia" element={<Layout><SlovakiaLocationPage /></Layout>} />
<Route path="/locations/slovenia" element={<Layout><SloveniaLocationPage /></Layout>} />
<Route path="/locations/vienna" element={<Layout><ViennaLocationPage /></Layout>} />
<Route path="/locations/sofia" element={<Layout><SofiaLocationPage /></Layout>} />
<Route path="/locations/zagreb" element={<Layout><ZagrebLocationPage /></Layout>} />
<Route path="/locations/prague" element={<Layout><PragueLocationPage /></Layout>} />
<Route path="/locations/budapest" element={<Layout><BudapestLocationPage /></Layout>} />
<Route path="/locations/reykjavik" element={<Layout><ReykjavikLocationPage /></Layout>} />
<Route path="/locations/riga" element={<Layout><RigaLocationPage /></Layout>} />
<Route path="/locations/vaduz" element={<Layout><VaduzLocationPage /></Layout>} />
<Route path="/locations/vilnius" element={<Layout><VilniusLocationPage /></Layout>} />
<Route path="/locations/luxembourg-city" element={<Layout><LuxembourgCityLocationPage /></Layout>} />
<Route path="/locations/valletta" element={<Layout><VallettaLocationPage /></Layout>} />
<Route path="/locations/bucharest" element={<Layout><BucharestLocationPage /></Layout>} />
<Route path="/locations/bratislava" element={<Layout><BratislavaLocationPage /></Layout>} />
<Route path="/locations/ljubljana" element={<Layout><LjubljanaLocationPage /></Layout>} />
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
        <Route path="/resources/using-birthday-wishlists" element={<Layout><UsingBirthdayWishlistsPage /></Layout>} />
        <Route path="/resources/using-wishlists-in-general-groups" element={<Layout><UsingWishlistsInGeneralGroupsPage /></Layout>} />
        <Route path="/resources/how-to-create-birthday-wishlist" element={<Layout><HowToCreateBirthdayWishlistPage /></Layout>} />
        <Route path="/resources/birthday-wishlist-meaning" element={<Layout><BirthdayWishlistMeaningPage /></Layout>} />
        <Route path="/resources/setting-up-birthday-groups" element={<Layout><SettingUpBirthdayGroupsPage /></Layout>} />
        <Route path="/resources/setting-up-subscription-groups" element={<Layout><SettingUpSubscriptionGroupsPage /></Layout>} />
        <Route path="/resources/creating-general-groups-for-events" element={<Layout><CreatingGeneralGroupsForEventsPage /></Layout>} />
        <Route path="/resources/subscription-group-best-practices" element={<Layout><SubscriptionGroupBestPracticesPage /></Layout>} />
        <Route path="/resources/managing-event-contributions" element={<Layout><ManagingEventContributionsPage /></Layout>} />
        <Route path="/resources/choosing-between-group-types" element={<Layout><ChoosingBetweenGroupTypesPage /></Layout>} />
        <Route path="/resources/subscription-deadline-management" element={<Layout><SubscriptionDeadlineManagementPage /></Layout>} />
        <Route path="/resources/admin-account-details-guide" element={<Layout><AdminAccountDetailsGuidePage /></Layout>} />
        <Route path="/resources/organizing-international-group-contributions" element={<Layout><OrganizingInternationalGroupContributionsPage /></Layout>} />
        <Route path="/resources/subscription-group-payment-schedules" element={<Layout><SubscriptionGroupPaymentSchedulesPage /></Layout>} />
        <Route path="/resources/using-group-chat-and-messaging" element={<Layout><UsingGroupChatAndMessagingPage /></Layout>} />
        <Route path="/resources/best-app-for-splitting-bills" element={<Layout><BestAppForSplittingBillsPage /></Layout>} />
        <Route path="/resources/app-to-manage-group-expenses-for-birthdays" element={<Layout><AppToManageGroupExpensesForBirthdaysPage /></Layout>} />
        <Route path="/best-practices/group-chat-best-practices" element={<Layout><GroupChatBestPracticesPage /></Layout>} />
        <Route path="/best-practices/best-way-to-collect-money-from-group" element={<Layout><BestWayToCollectMoneyFromGroupPage /></Layout>} />
        <Route path="/app-to-manage-group-expenses-for-birthdays" element={<Layout><AppToManageGroupExpensesForBirthdaysPage /></Layout>} />
        <Route path="/best-app-for-splitting-bills" element={<Layout><BestAppForSplittingBillsPage /></Layout>} />
        <Route path="/tools" element={<Layout><ToolsPage /></Layout>} />
        <Route path="/tools/contribution-calculator" element={<Layout><ContributionCalculatorPage /></Layout>} />
        <Route path="/tools/yearly-contribution-estimator" element={<Layout><YearlyContributionEstimatorPage /></Layout>} />
        <Route path="/industries" element={<Layout><IndustriesPage /></Layout>} />
        <Route path="/industries/real-estate" element={<Layout><RealEstateIndustryPage /></Layout>} />
        <Route path="/industries/healthcare" element={<Layout><HealthcareIndustryPage /></Layout>} />
        <Route path="/industries/retail" element={<Layout><RetailIndustryPage /></Layout>} />
        <Route path="/industries/education" element={<Layout><EducationIndustryPage /></Layout>} />
        <Route path="/industries/finance" element={<Layout><FinanceIndustryPage /></Layout>} />
        <Route path="/industries/technology" element={<Layout><TechnologyIndustryPage /></Layout>} />
        <Route path="/industries/hospitality" element={<Layout><HospitalityIndustryPage /></Layout>} />
        <Route path="/best-practices" element={<Layout><BestPracticesPage /></Layout>} />
        <Route path="/best-practices/managing-large-groups" element={<Layout><ManagingLargeGroupsBestPracticesPage /></Layout>} />
        <Route path="/best-practices/international-groups" element={<Layout><InternationalGroupsBestPracticesPage /></Layout>} />
        <Route path="/best-practices/group-trips-with-friends" element={<Layout><GroupTripCollectionBestPracticesPage /></Layout>} />
        <Route path="/best-practices/workplace-leaving-gifts" element={<Layout><WorkplaceLeavingGiftCollectionBestPracticesPage /></Layout>} />
        <Route path="/best-practices/group-birthday-gifts" element={<Layout><BirthdayGiftCollectionBestPracticesPage /></Layout>} />
        <Route path="/case-studies" element={<Layout><CaseStudiesPage /></Layout>} />
        <Route path="/case-studies/church-birthday-group" element={<Layout><ChurchBirthdayGroupCaseStudyPage /></Layout>} />
        <Route path="/case-studies/family-birthday-fund" element={<Layout><FamilyBirthdayFundCaseStudyPage /></Layout>} />
        <Route path="/case-studies/school-subscription-group" element={<Layout><SchoolGroupCaseStudyPage /></Layout>} />
        <Route path="/case-studies/workplace-event-group" element={<Layout><WorkplaceGroupCaseStudyPage /></Layout>} />
        <Route path="/seasonal" element={<Layout><SeasonalPage /></Layout>} />
        <Route path="/seasonal/holiday-contributions" element={<Layout><HolidayContributionsPage /></Layout>} />
        <Route path="/seasonal/back-to-school-contributions" element={<Layout><BackToSchoolContributionsPage /></Layout>} />
        <Route path="/seasonal/wedding-season-contributions" element={<Layout><WeddingSeasonContributionsPage /></Layout>} />
        <Route path="/seasonal/new-year-contributions" element={<Layout><NewYearContributionsPage /></Layout>} />
          <Route path="/seasonal/valentine-contributions" element={<Layout><ValentineContributionsPage /></Layout>} />
          <Route path="/seasonal/easter-contributions" element={<Layout><EasterContributionsPage /></Layout>} />
          <Route path="/seasonal/mothers-day-contributions" element={<Layout><MothersDayContributionsPage /></Layout>} />
          <Route path="/seasonal/teacher-appreciation-contributions" element={<Layout><TeacherAppreciationContributionsPage /></Layout>} />
          <Route path="/seasonal/graduation-contributions" element={<Layout><GraduationContributionsPage /></Layout>} />
          <Route path="/seasonal/fathers-day-contributions" element={<Layout><FathersDayContributionsPage /></Layout>} />
          <Route path="/seasonal/independence-day-contributions" element={<Layout><IndependenceDayContributionsPage /></Layout>} />
          <Route path="/seasonal/labor-day-contributions" element={<Layout><LaborDayContributionsPage /></Layout>} />
          <Route path="/seasonal/baby-shower-contributions" element={<Layout><BabyShowerContributionsPage /></Layout>} />
          <Route path="/seasonal/housewarming-contributions" element={<Layout><HousewarmingContributionsPage /></Layout>} />
          <Route path="/seasonal/office-party-contributions" element={<Layout><OfficePartyContributionsPage /></Layout>} />
          <Route path="/seasonal/thanksgiving-contributions" element={<Layout><ThanksgivingContributionsPage /></Layout>} />
          <Route path="/seasonal/halloween-contributions" element={<Layout><HalloweenContributionsPage /></Layout>} />
          <Route path="/seasonal/diwali-contributions" element={<Layout><DiwaliContributionsPage /></Layout>} />
          <Route path="/seasonal/st-patricks-day-contributions" element={<Layout><StPatricksDayContributionsPage /></Layout>} />
          <Route path="/seasonal/christmas-contributions" element={<Layout><ChristmasContributionsPage /></Layout>} />
          <Route path="/seasonal/memorial-day-contributions" element={<Layout><MemorialDayContributionsPage /></Layout>} />
          <Route path="/seasonal/hanukkah-contributions" element={<Layout><HanukkahContributionsPage /></Layout>} />
          <Route path="/seasonal/kwanzaa-contributions" element={<Layout><KwanzaaContributionsPage /></Layout>} />
          <Route path="/seasonal/chinese-new-year-contributions" element={<Layout><ChineseNewYearContributionsPage /></Layout>} />
          <Route path="/seasonal/ramadan-eid-contributions" element={<Layout><RamadanEidContributionsPage /></Layout>} /> 
        <Route path="/subscription-groups" element={<Layout><SubscriptionGroupPage /></Layout>} />
        <Route path="/subscription-groups/netflix" element={<Layout><NetflixPage /></Layout>} />
        <Route path="/subscription-groups/spotify" element={<Layout><SpotifyPage /></Layout>} />
        <Route path="/subscription-groups/disney-plus" element={<Layout><DisneyPlusPage /></Layout>} />
        <Route path="/subscription-groups/hulu" element={<Layout><HuluPage /></Layout>} />
        <Route path="/subscription-groups/hbo-max" element={<Layout><HBOMaxPage /></Layout>} />
        <Route path="/subscription-groups/apple-tv" element={<Layout><AppleTVPlusPage /></Layout>} />
        <Route path="/subscription-groups/youtube-premium" element={<Layout><YoutubePremiumPage /></Layout>} />
        <Route path="/subscription-groups/amazon-prime" element={<Layout><AmazonPrimePage /></Layout>} />
        <Route path="/subscription-groups/paramount-plus" element={<Layout><ParamountPlusPage /></Layout>} />
        <Route path="/subscription-groups/apple-music" element={<Layout><AppleMusicPage /></Layout>} />
        <Route path="/subscription-groups/chatgpt-plus" element={<Layout><ChatGPTPlusPage /></Layout>} />
        <Route path="/subscription-groups/canva-pro" element={<Layout><CanvaProPage /></Layout>} />
        <Route path="/subscription-groups/now-entertainment" element={<Layout><NowEntertainmentPage /></Layout>} />
        <Route path="/subscription-groups/peacock" element={<Layout><PeacockPage /></Layout>} />
        <Route path="/subscription-groups/amazon-music" element={<Layout><AmazonMusicPage /></Layout>} />
        <Route path="/subscription-groups/deliveroo-plus" element={<Layout><DeliverooPlusPage /></Layout>} />
        <Route path="/subscription-groups/just-eat-plus" element={<Layout><JustEatPlusPage /></Layout>} />
        <Route path="/subscription-groups/doordash-dashpass" element={<Layout><DoorDashDashPassPage /></Layout>} />
        <Route path="/subscription-groups/postmates-unlimited" element={<Layout><PostmatesUnlimitedPage /></Layout>} />
        <Route path="/subscription-groups/grubhub-plus" element={<Layout><GrubhubPlusPage /></Layout>} />
        <Route path="/subscription-groups/gousto" element={<Layout><GoustoPage /></Layout>} />
        <Route path="/subscription-groups/universal-yums" element={<Layout><UniversalYumsPage /></Layout>} />
        <Route path="/subscription-groups/blue-apron" element={<Layout><BlueApronPage /></Layout>} />
        <Route path="/subscription-groups/hello-fresh" element={<Layout><HelloFreshPage /></Layout>} />
        <Route path="/subscription-groups/hellofresh" element={<Layout><HelloFreshPage /></Layout>} />
        <Route path="/subscription-groups/uber-eats-pass" element={<Layout><UberEatsPassPage /></Layout>} />
        <Route path="/subscription-groups/home-chef" element={<Layout><HomeChefPage /></Layout>} />
        <Route path="/subscription-groups/bokksu" element={<Layout><BokksuPage /></Layout>} />
        <Route path="/subscription-groups/puregym-plus" element={<Layout><PureGymPlusPage /></Layout>} />
        <Route path="/subscription-groups/the-gym-group-ultimate" element={<Layout><TheGymGroupUltimateSubscriptionPage /></Layout>} />
        <Route path="/subscription-groups/la-fitness" element={<Layout><LAFitnessPage /></Layout>} />
        <Route path="/subscription-groups/apple-fitness-plus" element={<Layout><AppleFitnessPlusPage /></Layout>} />
        <Route path="/subscription-groups/fitness-bliss" element={<Layout><FitnessBlissPage /></Layout>} />
        <Route path="/subscription-groups/mindbody-family" element={<Layout><MindbodyFamilyPage /></Layout>} />
        <Route path="/subscription-groups/planet-fitness" element={<Layout><PlanetFitnessPage /></Layout>} />
        <Route path="/subscription-groups/virgin-active" element={<Layout><VirginActivePage /></Layout>} />
        <Route path="/subscription-groups/showtime" element={<Layout><ShowtimePage /></Layout>} />
        <Route path="/subscription-groups/starz" element={<Layout><StarzPage /></Layout>} />
        <Route path="/subscription-groups/amc-plus" element={<Layout><AMCPlusPage /></Layout>} />
        <Route path="/subscription-groups/crunchyroll" element={<Layout><CrunchyrollPage /></Layout>} />
        <Route path="/subscription-groups/discovery-plus" element={<Layout><DiscoveryPlusPage /></Layout>} />
        <Route path="/subscription-groups/espn-plus" element={<Layout><ESPNPlusPage /></Layout>} />
        <Route path="/subscription-groups/sling-tv" element={<Layout><SlingTVPage /></Layout>} />
        <Route path="/subscription-groups/fubotv" element={<Layout><FuboTVPage /></Layout>} />
        <Route path="/subscription-groups/youtube-tv" element={<Layout><YouTubeTVPage /></Layout>} />
        <Route path="/subscription-groups/adobe-creative-cloud" element={<Layout><AdobeCreativeCloudPage /></Layout>} />
        <Route path="/subscription-groups/microsoft-365" element={<Layout><Microsoft365Page /></Layout>} />
        <Route path="/subscription-groups/notion" element={<Layout><NotionPage /></Layout>} />
        <Route path="/subscription-groups/grammarly-premium" element={<Layout><GrammarlyPremiumPage /></Layout>} />
        <Route path="/subscription-groups/linkedin-premium" element={<Layout><LinkedInPremiumPage /></Layout>} />
        <Route path="/subscription-groups/xbox-game-pass" element={<Layout><XboxGamePassPage /></Layout>} />
        <Route path="/subscription-groups/playstation-plus" element={<Layout><PlayStationPlusPage /></Layout>} />
        <Route path="/subscription-groups/nintendo-switch-online" element={<Layout><NintendoSwitchOnlinePage /></Layout>} />
        <Route path="/subscription-groups/dropbox" element={<Layout><DropboxPage /></Layout>} />
        <Route path="/subscription-groups/google-one" element={<Layout><GoogleOnePage /></Layout>} />
        <Route path="/subscription-groups/icloud-plus" element={<Layout><ICloudPlusPage /></Layout>} />
        <Route path="/subscription-groups/nordvpn" element={<Layout><NordVPNPage /></Layout>} />
        <Route path="/subscription-groups/expressvpn" element={<Layout><ExpressVPNPage /></Layout>} />
        <Route path="/subscription-groups/new-york-times" element={<Layout><NewYorkTimesPage /></Layout>} />
        <Route path="/subscription-groups/wall-street-journal" element={<Layout><WallStreetJournalPage /></Layout>} />
        <Route path="/get-started" element={<Layout><GetStartedPage /></Layout>} />
        <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
        
        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute><AdminUsers /></ProtectedRoute>} />
        <Route path="/admin/groups" element={<ProtectedRoute><AdminGroups /></ProtectedRoute>} />
        <Route path="/admin/contributions" element={<ProtectedRoute><AdminContributions /></ProtectedRoute>} />
        <Route path="/admin/withdrawals" element={<ProtectedRoute><AdminWithdrawals /></ProtectedRoute>} />
        <Route path="/admin/autopay" element={<ProtectedRoute><AdminAutopay /></ProtectedRoute>} />
        <Route path="/admin/contact-submissions" element={<ProtectedRoute><AdminContactSubmissions /></ProtectedRoute>} />
        <Route path="/admin/waitlist" element={<ProtectedRoute><AdminWaitlist /></ProtectedRoute>} />
        <Route path="/admin/notifications" element={<ProtectedRoute><AdminNotifications /></ProtectedRoute>} />
        <Route path="/admin/birthdays" element={<ProtectedRoute><AdminBirthdays /></ProtectedRoute>} />
        <Route path="/admin/reports" element={<ProtectedRoute><AdminReports /></ProtectedRoute>} />
        <Route path="/admin/custom-emails" element={<ProtectedRoute><AdminCustomEmails /></ProtectedRoute>} />
        <Route path="/admin/custom-notifications" element={<ProtectedRoute><AdminCustomNotifications /></ProtectedRoute>} />
        <Route path="/admin/change-password" element={<ProtectedRoute><AdminChangePassword /></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

export default App
