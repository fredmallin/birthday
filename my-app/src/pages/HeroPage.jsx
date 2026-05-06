
import { useNavigate } from "react-router-dom";

function HeroPage() {
  const navigate = useNavigate();

  return (
    <div className="hero-page">
      <h1>Happy Birthday [Name] 🎉</h1>
      <p>I hope this little gift will make you happy 💖</p>

      <button onClick={() => navigate("/options")}>
        Click here
      </button>
    </div>
  );
}

export default HeroPage;