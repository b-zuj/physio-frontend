import React from 'react';

const Video = ({ url }) => {
  let videoUrl = url;
  if (url?.match('https://youtu.be/')) {
    videoUrl = url.replace(
      'https://youtu.be/',
      'https://www.youtube.com/embed/'
    );
  }

  console.log(videoUrl);
  return (
    <>
      {videoUrl && (
        <iframe
          src={videoUrl}
          title={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
};

export default Video;
