import { useNavigate } from "react-router-dom";

function MessagePage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h2>💖 Message</h2>
      <p>
        Happy Birthday! You mean so much to me.
        I wish you happiness, success, and love always 🎉
      </p>
    </div>
  );
}

export default MessagePage;