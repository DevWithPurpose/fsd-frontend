import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/welocme";
import ThemeProvider from "./components/Group 2/context/ThemeProvider";

import ProfilePage from "./components/Group 2/Page";
import AboutUs from "./components/Group 2/pages/AboutUs";
import ContactUs from "./components/Group 2/pages/ContactUs";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/feed" element={<ProfilePage />} />
          <Route path="/profile/*" element={<ProfilePage />} />
          <Route path="/privacy" element={<ProfilePage />} />
          <Route path="/guidelines" element={<ProfilePage />} />
          <Route path="/support" element={<ProfilePage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
