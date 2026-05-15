import { useNavigate } from "react-router-dom";

function MusicPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h2>Song that reminds me of you</h2>

   <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/gyCPkNBz918?autoplay=1&mute=1&loop=1&playlist=gyCPkNBz918"
        title="YouTube music player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MusicPage;