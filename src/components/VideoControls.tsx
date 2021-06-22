// https://slider-react-component.vercel.app/demo/slider
// https://progress-react-component.vercel.app/demo/simple
// https://www.npmjs.com/package/react-multi-bar-slider

import Slider from "rc-slider";
import {
  MdPlayArrow,
  MdFastForward,
  MdFastRewind,
  MdPause,
  MdVolumeUp,
  MdSettings,
  MdFullscreen,
  MdCancel,
  MdVolumeOff,
  MdFullscreenExit,
} from "react-icons/md";
import { BiSkipNext } from "react-icons/bi";
import {
  ChangeEventHandler,
  Dispatch,
  FunctionComponent,
  MouseEventHandler,
  useState,
} from "react";
import classnames from "classnames";
import "rc-slider/assets/index.css";
import { useEffect } from "react";
const VideoControls: FunctionComponent<{ options: controlsOptions }> = ({
  options: {
    showControls,
    played,
    handlePlayPause,
    handleMute,
    playing,
    handleRewind,
    handleFastForward,
    handleVolumeChange,
    handleProgressBarChange,
    muted,
    volume,
    elapsedTime,
    totalDuration,
    handlePlaybackRate,
    toggleFullScreen,
    videoTitle,
    isFullScreen,
  },
}) => {
  const [showPlaybackSpeed, setShowPlaybackSpeed] = useState(false);

  return (
    <div
      className={classnames(
        "absolute bottom-2  flex opacity-0 left-2 right-2 rounded-lg p-2 bg-gray-600 bg-opacity-50 transition items-center space-x-4",
        {
          "opacity-100": showControls,
        }
      )}
    >
      {!playing ? (
        <MdPlayArrow size={25} className="cursor-pointer" onClick={handlePlayPause} />
      ) : (
        <MdPause size={25} className="cursor-pointer" onClick={handlePlayPause} />
      )}

      {!muted ? (
        <MdVolumeUp size={25} className="cursor-pointer" onClick={handleMute} />
      ) : (
        <MdVolumeOff size={25} className="cursor-pointer" onClick={handleMute} />
      )}
      <div className="w-20">
        <Slider value={volume * 100} onChange={handleVolumeChange} />
      </div>

      <span>
        {elapsedTime}/{totalDuration}
      </span>
      <div className="flex-1">
        <Slider value={played * 100} onChange={handleProgressBarChange} />
      </div>

      <MdSettings
        size={25}
        className="cursor-pointer"
        onClick={() => setShowPlaybackSpeed((value) => !value)}
      />

      {!isFullScreen ? (
        <MdFullscreen size={25} className="cursor-pointer" onClick={toggleFullScreen} />
      ) : (
        <MdFullscreenExit size={25} className="cursor-pointer" onClick={toggleFullScreen} />
      )}
      {
        <PlaybackSpeedControls
          showPlaybackSpeed={showPlaybackSpeed}
          handlePlaybackRate={handlePlaybackRate}
        />
      }
    </div>
  );
};

export default VideoControls;

interface controlsOptions {
  handlePlayPause: MouseEventHandler<any>;
  handleMute: MouseEventHandler<any>;
  handleRewind: MouseEventHandler<any>;
  handleFastForward: MouseEventHandler<any>;
  handlePlaybackRate: Function;
  handleVolumeChange: (value: number) => void;
  toggleFullScreen: MouseEventHandler<any>;
  handleProgressBarChange: (value: number) => void;
  playing: Boolean;
  muted: Boolean;
  videoTitle: string;
  volume: number;
  playbackRate: number;
  played: number;
  elapsedTime: string;
  totalDuration: string;
  showControls: boolean;
  isFullScreen: boolean;
}
const PlaybackSpeedControls = ({ handlePlaybackRate, showPlaybackSpeed }) => {
  return (
    <div
      className={classnames(
        "absolute flex-col flex opacity-0 space-y-3 bg-black rounded-sm w-52 bottom-10 right-4  bg-opacity-60  transition-all transform ",
        { " opacity-100 ": showPlaybackSpeed }
      )}
    >
      <div className="flex items-center justify-around px-4 py-2 space-x-2 border-b ">
        <MdCancel size={22} className="text-gray-500 cursor-pointer" />
        <span>Playback Speed</span>
      </div>
      <span
        className="px-4 py-1 cursor-pointer hover:bg-gray-800"
        onClick={() => handlePlaybackRate(0.25)}
      >
        0.25
      </span>
      <span
        className="px-4 py-1 cursor-pointer hover:bg-gray-800"
        onClick={() => handlePlaybackRate(0.5)}
      >
        0.5
      </span>
      <span
        className="px-4 py-1 cursor-pointer hover:bg-gray-800"
        onClick={() => handlePlaybackRate(1)}
      >
        Normal
      </span>
      <span
        className="px-4 py-1 cursor-pointer hover:bg-gray-800"
        onClick={() => handlePlaybackRate(1.5)}
      >
        1.5
      </span>
      <span
        className="px-4 py-1 cursor-pointer hover:bg-gray-800"
        onClick={() => handlePlaybackRate(2)}
      >
        2
      </span>
    </div>
  );
};
