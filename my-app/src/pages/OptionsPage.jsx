import { useNavigate } from "react-router-dom";

function OptionsPage() {
  const navigate = useNavigate();

  return (
    <div className="options">
      {/* Back button */}
      <button className="back-btn" onClick={() => navigate(-1)}>⬅ Back</button>

      <h1>These are for you 💖</h1>

      <div className="cards">

        <div className="card" onClick={() => navigate("/message")}>
          💌
          <p>Message</p>
        </div>

        <div className="card" onClick={() => navigate("/music")}>
          🎵
          <p>Music</p>
        </div>

        <div className="card" onClick={() => navigate("/gallery")}>
          📸
          <p>Gallery</p>
        </div>

      </div>
    </div>
  );
}

export default OptionsPage;
