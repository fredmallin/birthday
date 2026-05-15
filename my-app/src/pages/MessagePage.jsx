import { useNavigate } from "react-router-dom";

function MessagePage() {
  const navigate = useNavigate();

  return (
    <div className="page message-page">
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <div className="message-card">
        <h2> A Special Message For You</h2>

        <p>
           Happy Birthday Linda 🎉❤️
        </p>

        <p>
          Today is all about celebrating you — our sister, our cousin, our biggest sister, our best friend, and honestly one of the greatest blessings in our lives. You have such a beautiful heart, and the love, care, and warmth you give to everyone around you never go unnoticed.
        </p>

        <p>
         Thank you for always being there for us, for guiding us, supporting us, making us laugh, and loving us so genuinely. You are the kind of person who makes life feel lighter and happier just by being present. Home feels like home because of you.
        </p>

        <p>
         We truly thank God for your life, because you are heaven-sent. Your strength, kindness, and soft heart inspire us more than you know. Even when life gets hard, you still manage to smile and show love to the people around you, and that is something so special about you.
        </p>

        <p>
          As you grow older, we pray that happiness never leaves your side, that peace fills your heart, and that every dream you carry finds its way to you. May this new year of your life bring you endless blessings, beautiful memories, and love in its purest form.
        </p>
        <p>
          Please never forget how deeply loved and appreciated you are. We are so lucky to have you.
        </p>

        <p>
          Happy Birthday once again to the best big sister anyone could ever ask for 🥹❤️

        </p>

        <h3>With love,
Sisi ni Sisi ❤️ </h3>
      </div>
    </div>
  );
}

export default MessagePage;