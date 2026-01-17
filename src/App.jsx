import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import CreatorPage from "./pages/CreatorPage";
import HeaderComponent from "./components/HeaderComponent";


function App() {

  return (
    <div>
      <Router>
        <HeaderComponent/>
        <Routes>
          <Route path="/Scribble" element={<LandingPage />} />
          <Route path="/Scribble/about" element={<AboutPage />} />
          <Route path="/Scribble/creator" element={<CreatorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
