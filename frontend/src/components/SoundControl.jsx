import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

const SoundControl = ({ backgroundmusic, writechalksound }) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleSound = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    backgroundmusic.muted = isMuted;
    writechalksound.muted = isMuted;
  }, [isMuted, backgroundmusic, writechalksound]);

  return (
    <button
      onClick={toggleSound}
      className="bg-transparent text-white text-2xl focus:outline-none absolute top-4 right-4 lg:top-auto lg:bottom-4 lg:right-4"
    >
      <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
    </button>
  );
};

export default SoundControl;

