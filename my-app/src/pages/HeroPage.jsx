import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function HeroPage() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 4000); // disappears after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="hero-page"
      style={{
        position: "relative",
        overflow: "hidden",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
      }}
    >
      {/* Glitter / Confetti */}
      {showConfetti && (
        <>
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background:
                  i % 4 === 0
                    ? "#ff4d6d"
                    : i % 4 === 1
                    ? "#ffd60a"
                    : i % 4 === 2
                    ? "#4cc9f0"
                    : "#80ed99",
                top: "-20px",
                left: `${Math.random() * 100}%`,
                animation: `fall ${
                  1 + Math.random() * 2
                }s linear forwards`,
              }}
            />
          ))}

          <style>
            {`
              @keyframes fall {
                0% {
                  transform: translateY(0) rotate(0deg);
                  opacity: 1;
                }
                100% {
                  transform: translateY(110vh) rotate(720deg);
                  opacity: 0;
                }
              }
            `}
          </style>
        </>
      )}

      <h1>Happy Birthday Grace 🎉</h1>
      <p>I hope this little gift will make you happy</p>

      <button onClick={() => navigate("/options")}>
        Click here
      </button>
    </div>
  );
}

export default HeroPage;