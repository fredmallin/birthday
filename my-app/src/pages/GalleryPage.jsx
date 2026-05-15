import { useNavigate } from "react-router-dom";

function GalleryPage() {
  const navigate = useNavigate();

  const memories = [
    {
      image: "/linda 2.jpeg",
      caption: "alooh",
    },
    {
      image: "/linda 3.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 4.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 5.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 6.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 7.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 8.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 9.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 10.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 11.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 12.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 13.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 14.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 15.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 16.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 17.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 18.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 19.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 20.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 21.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 22.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda 23.jpeg",
      caption: "happy birthday linda",
    },
   
     {
      image: "/linda 24.jpeg",
      caption: "happy birthday linda",
    },

    {
      image: "/linda 26.jpeg",
      caption: "happy birthday linda",
    },
     {
      image: "/linda 27.jpeg",
      caption: "happy birthday linda",
    },
     {
      image: "/linda 28.jpeg",
      caption: "happy birthday linda",
    },
     {
      image: "/linda 29.jpeg",
      caption: "happy birthday linda",
    },
     {
      image: "/linda 30.jpeg",
      caption: "happy birthday linda",
    },
    {
      image: "/linda hero.jpeg",
      caption: "happy birthday linda",
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