import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="envelope-page">
      <h1>Happy Birthday!</h1>

      <div className="envelope" onClick={() => navigate("/hero")}>
        <div className="seal">🎁</div>
        <p>Click to open</p>
      </div>
    </div>
  );
}

export default Home;