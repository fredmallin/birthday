function MusicPlayer() {
  return (
    <div className="music">
      <iframe
        width="100%"
        height="200"
        src="https://www.youtube.com/embed/3GwjfUFyY6M"
        title="Birthday Song"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MusicPlayer;