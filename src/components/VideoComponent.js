import myVideo from '../assets/is.mp4'; 

function VideoComponent() {
  return (
    <div className="video-container">
      <video width="560" height="315" controls>
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;