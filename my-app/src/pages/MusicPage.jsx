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
        src="https://www.youtube.com/embed/tVIyYfU014g?autoplay=1&mute=1"
        title="Birthday"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MusicPage;