import { useNavigate } from "react-router-dom";

function MessagePage() {
  const navigate = useNavigate();

  return (
    <div className="page message-page">
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <div className="message-card">
        <h2> A Special Message For You</h2>

        <p>
          Happy Birthday   
        </p>

        <p>
          Today is not just a special day for you, but also a reminder of how
          important you are to the people around you. we are really grateful to
          have you in my life.
        </p>

        <p>
          I hope this new chapter brings you peace, growth, happiness, and
          endless opportunities. May you achieve everything you’ve been
          working for and more than you ever dreamed of.
        </p>

        <p>
          Never forget how strong, kind, and amazing you are. Even on days
          when things feel difficult, keep going — because great things are
          waiting for you ahead.
        </p>

        <p>
          Enjoy your day, celebrate yourself and know that you are truly
          appreciated 
        </p>

        <h3>With love from sisi ni sisi </h3>
      </div>
    </div>
  );
}

export default MessagePage;