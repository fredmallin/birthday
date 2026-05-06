import { useNavigate } from "react-router-dom";

function GalleryPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h2>Memories</h2>

      <div className="images">
        <img src="/Gemini_Generated_Image_2w3xh12w3xh12w3x.png" />
        <img src="/images/Gemini_Generated_Image_1fet9y1fet9y1fet.png" />
        <img src="/images/Gemini_Generated_Image_5udzlz5udzlz5udz.png" />
      </div>
    </div>
  );
}

export default GalleryPage;