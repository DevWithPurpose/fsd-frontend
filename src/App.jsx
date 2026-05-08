import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/welocme";
import Page from "./components/Group 3/Page";
import HelpSupportPage from "./Pages/HelpSupportPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/createpost" element={<Page />} />
          <Route path="/Help" element={<HelpSupportPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
