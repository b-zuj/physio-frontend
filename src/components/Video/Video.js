import React from 'react';

const Video = ({ id, url }) => {
  const embedUrl = `https://www.youtube.com/embed/${id}`;
  return (
    <iframe
      src={url ? url : embedUrl}
      title={url ? url : embedUrl}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default Video;
