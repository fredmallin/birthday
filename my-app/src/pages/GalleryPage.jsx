import { useNavigate } from "react-router-dom";

function GalleryPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h2>📸 Memories</h2>

      <div className="images">
        <img src="/images/pic1.jpg" />
        <img src="/images/pic2.jpg" />
        <img src="/images/pic3.jpg" />
      </div>
    </div>
  );
}

export default GalleryPage;