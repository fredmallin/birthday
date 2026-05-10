import { useNavigate } from "react-router-dom";
import { Mail, Music, Image } from "lucide-react";

function OptionsPage() {
  const navigate = useNavigate();

  return (
    <div className="options">
      {/ 
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <h1>These are for you </h1>

      <div className="cards">

        <div className="card" onClick={() => navigate("/message")}>
          <Mail size={42} color="#151314" />
          <p>Message</p>
        </div>

        <div className="card" onClick={() => navigate("/music")}>
          <Music size={42} color="#201b1c" />
          <p>Music</p>
        </div>

        <div className="card" onClick={() => navigate("/gallery")}>
          <Image size={42} color="#070707" />
          <p>Gallery</p>
        </div>

      </div>
    </div>
  );
}

export default OptionsPage;