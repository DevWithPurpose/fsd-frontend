import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/welocme";
import Page from "./components/Group 3/Page";
import HelpSupportPage from "./Pages/HelpSupportPage";
import AccountSettings from "./components/Group 3/Accountsettings";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/createpost" element={<Page />} />
          <Route path="/Help" element={<HelpSupportPage />} />
          <Route path="/account-settings" element={<AccountSettings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
