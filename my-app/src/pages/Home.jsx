import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();

  const text = "Happy Birthday!";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="envelope-page">
      <h1 className="typing-text">{displayText}</h1>

      <div className="envelope" onClick={() => navigate("/hero")}>
        <div className="seal"></div>
        <p>Click to open</p>
      </div>
    </div>
  );
}

export default Home;