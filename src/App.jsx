import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/welocme";
import HelpSupportPage from "./Pages/HelpSupportPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Help" element={<HelpSupportPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
