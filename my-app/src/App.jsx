import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeroPage from "./pages/HeroPage";
import OptionsPage from "./pages/OptionsPage";
import MessagePage from "./pages/MessagePage";
import MusicPage from "./pages/MusicPage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hero" element={<HeroPage />} />
      <Route path="/options" element={<OptionsPage />} />
      <Route path="/message" element={<MessagePage />} />
      <Route path="/music" element={<MusicPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
}

export default App;