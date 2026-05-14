import { useNavigate } from "react-router-dom";

function GalleryPage() {
  const navigate = useNavigate();

  const memories = [
    {
      image: "/linda 2.jpeg",
      caption: "First adventure together",
    },
    {
      image: "my-app/public/linda 3.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 4.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 5.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 6.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 7.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 8.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 9.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 10.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 11.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 12.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 13.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 14.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 15.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 16.jpeg",
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