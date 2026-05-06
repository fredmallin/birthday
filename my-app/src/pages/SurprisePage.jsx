import Gallery from "../components/Gallery";
import Message from "../components/Message";
import MusicPlayer from "../components/MusicPlayer";

function SurprisePage() {
  return (
    <div className="surprise-page">
      <h1>🎉 These Are For You 💖</h1>

      <div className="cards">

        <div className="card">
          <h2>📸 Memories</h2>
          <Gallery />
        </div>

        <div className="card">
          <h2>🎵 Music</h2>
          <MusicPlayer />
        </div>

        <div className="card">
          <h2>💌 Message</h2>
          <Message />
        </div>

      </div>
    </div>
  );
}

export default SurprisePage;