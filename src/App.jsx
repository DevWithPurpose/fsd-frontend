import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import LandingPage from "./components/Group1/landing-page/LandingPage";
import Dashboard from "./components/Group1/dashboard/Dashboard";
import Services from "./components/Group1/services/Services";
import Welcome from "./components/welocme";
import ThemeProvider from "./components/Group 2/context/ThemeProvider";

import ProfilePage from "./components/Group 2/Page";
import AboutUs from "./components/Group 2/pages/AboutUs";
import ContactUs from "./components/Group 2/pages/ContactUs";

import Page from "./components/Group 3/Page";
import HelpSupportPage from "./Pages/HelpSupportPage";
import AccountSettings from "./components/Group 3/Accountsettings";
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/feed" element={<ProfilePage />} />
          <Route path="/profile/*" element={<ProfilePage />} />
          <Route path="/privacy" element={<ProfilePage />} />
          <Route path="/guidelines" element={<ProfilePage />} />
          <Route path="/support" element={<ProfilePage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="/createpost" element={<Page />} />
          <Route path="/Help" element={<HelpSupportPage />} />
          <Route path="/account-settings" element={<AccountSettings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
