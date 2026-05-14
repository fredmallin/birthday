import { useNavigate } from "react-router-dom";

function MusicPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h2>Song that reminds me of you</h2>

   <iframe
  width="100%"
  height="300"
  src="https://www.youtube.com/embed/TMcl90dbLjA"
  title="Music"
  frameBorder="0"
  allow="autoplay; encrypted-media; picture-in-picture"
  allowFullScreen
></iframe>
    </div>
  );
}

export default MusicPage;