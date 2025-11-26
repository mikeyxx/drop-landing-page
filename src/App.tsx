import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DriverTerms from './pages/DriverTerms';
import PassengerTerms from './pages/PassengerTerms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VerifyEmail from './pages/VerifyEmail';
import Support from './pages/Support';
import DownloadPage from './pages/DownloadPage';
import DeleteDropAccount from './pages/DeleteDropAccount';
import DeleteDropDriverAccount from './pages/DeleteDropDriverAccount';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/driver-terms" element={<DriverTerms />} />
          <Route path="/passenger-terms" element={<PassengerTerms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/delete-drop-account" element={<DeleteDropAccount />} />
          <Route path="/delete-drop-driver-account" element={<DeleteDropDriverAccount />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;