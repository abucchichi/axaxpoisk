import React, { useState } from 'react';
import { Maximize2, Minimize2, Settings } from 'lucide-react';

const CustomPlayer = ({ iframeUrl }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState('auto');
  const [showControls, setShowControls] = useState(false);

  const toggleFullscreen = () => {
    const playerContainer = document.getElementById('player-container');
    
    if (!document.fullscreenElement) {
      playerContainer.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div id="player-container" className="relative w-full max-w-4xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden">
      {/* Player Header */}
      <div className="flex items-center justify-between p-2 bg-gray-800 text-white">
        <h3 className="text-sm font-medium">Now Playing</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowControls(!showControls)}
            className="p-1 hover:bg-gray-700 rounded"
          >
            <Settings className="w-4 h-4" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-1 hover:bg-gray-700 rounded"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Player Content */}
      <div className="relative">
        <iframe 
          src={iframeUrl}
          className="w-full aspect-video"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      {/* Player Controls */}
      {showControls && (
        <div className="absolute top-12 right-2 bg-gray-800 p-2 rounded shadow-lg z-10">
          <div className="text-white text-sm">
            <div className="mb-2">Quality</div>
            <select
              value={selectedQuality}
              onChange={(e) => setSelectedQuality(e.target.value)}
              className="bg-gray-700 text-white p-1 rounded w-full"
            >
              <option value="auto">Auto</option>
              <option value="1080p">1080p</option>
              <option value="720p">720p</option>
              <option value="480p">480p</option>
            </select>
          </div>
        </div>
      )}

      {/* Player Footer */}
      <div className="flex items-center justify-between p-2 bg-gray-800 text-white text-xs">
        <div>
          Quality: {selectedQuality}
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-green-500 h-2 w-2 rounded-full"></div>
          <span>HD Available</span>
        </div>
      </div>
    </div>
  );
};

export default CustomPlayer;
