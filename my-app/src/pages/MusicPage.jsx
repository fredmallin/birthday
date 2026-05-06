import { useNavigate } from "react-router-dom";

function MusicPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h2>🎵 Birthday Music</h2>

      <iframe
        width="100%"
        height="300"
        src="https://www.youtube.com/embed/3GwjfUFyY6M"
        title="Birthday"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MusicPage;