import { useNavigate } from "react-router-dom";

function GalleryPage() {
  const navigate = useNavigate();

  const memories = [
    {
      image: "/Gemini_Generated_Image_2w3xh12w3xh12w3x.png",
      caption: "First adventure together",
    },
    {
      image: "/images/Gemini_Generated_Image_1fet9y1fet9y1fet.png",
      caption: "Late night talks",
    },
    {
      image: "/images/Gemini_Generated_Image_1fet9y1fet9y1fet.png",
      caption: "Late night talks",
    },
    {
      image: "/images/Gemini_Generated_Image_1fet9y1fet9y1fet.png",
      caption: "Late night talks",
    },
    {
      image: "/images/Gemini_Generated_Image_1fet9y1fet9y1fet.png",
      caption: "Late night talks",
    },
    {
      image: "/images/Gemini_Generated_Image_1fet9y1fet9y1fet.png",
      caption: "Late night talks",
    },
    {
      image: "/images/Gemini_Generated_Image_5udzlz5udzlz5udz.png",
      caption: "Beautiful memories",
    },
  ];

  return (
    <div className="gallery">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <h2 className="gallery-title">
        Moments frozen in time 
      </h2>

      <div className="images">
        {memories.map((memory, index) => (
          <div className="photo-card" key={index}>
            <img src={memory.image} alt={memory.caption} />
            <p className="caption">{memory.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;