import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/welocme";
import ProfilePage from "./components/Group 2/Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/feed" element={<ProfilePage />} />
        <Route path="/profile/*" element={<ProfilePage />} />
        <Route path="/privacy" element={<ProfilePage />} />
        <Route path="/guidelines" element={<ProfilePage />} />
        <Route path="/support" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
