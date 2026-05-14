import { useNavigate } from "react-router-dom";

function GalleryPage() {
  const navigate = useNavigate();

  const memories = [
    {
      image: "/linda 2.jpeg",
      caption: "First adventure together",
    },
    {
      image: "/linda 3.jpeg",
      caption: "Late night talks",
    },
    {
      image: "/linda 4.jpeg",
      caption: "Late night talks",
    },
    {
      image: "/linda 5.jpeg",
      caption: "Late night talks",
    },
    {
      image: "/linda 6.jpeg",
      caption: "Late night talks",
    },
    {
      image: "/linda 7.jpeg",
      caption: "Late night talks",
    },
    {
      image: "/linda 8.jpeg",
      caption: "Late night talks",
    },
    {
      image: "/linda 9.jpeg",
      caption: "Late night talks",
    },
    {
      image: "/linda 10.jpeg",
      caption: "Late night talks",
    },
    {
      image: "/linda 11.jpeg",
      caption: "Late night talks",
    },
    {
      image: "/linda 12.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 13.jpeg",
      caption: "Late night talks",
    },
    {
      image: "/linda 14.jpeg",
      caption: "Late night talks",
    },
    {
      image: "/linda 15.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 16.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 17.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 18.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 19.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 20.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 21.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 22.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 23.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda 24.jpeg",
      caption: "Late night talks",
    },
    {
      image: "my-app/public/linda hero.jpeg",
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