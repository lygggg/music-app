import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTime } from "../modules/MusicControl";

import styled from "styled-components";

function PlayFooter({ music, newTime }) {
  const [trackProgress, setTrackProgress] = useState(0);
  const [durationTime, setDurationTime] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>();
  const intervalRef = useRef(0);
  const dispatch = useDispatch();

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    setDurationTime(audioRef.current.duration);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        setIsPlaying(false);
      }
      if (isPlaying == true) {
        setTrackProgress(audioRef.current.currentTime);
        dispatch(setCurrentTime(audioRef.current?.currentTime));
      }
    }, [1000]);
  };
  const onScrub = (value) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    dispatch(setCurrentTime(trackProgress));
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const offPalying = () => {
    setIsPlaying(false);
  };

  const onPalying = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    audioRef.current = new Audio(music.file);
    audioRef.current!.onloadeddata = () => {
      setIsLoaded(true);
      setDurationTime(audioRef.current!.duration);
    };
  }, []);

  useEffect(() => {
    if (isPlaying === true) {
      audioRef.current!.play();
      startTimer();
    } else {
      audioRef.current!.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = newTime.time;
    setTrackProgress(audioRef.current.currentTime);
    startTimer();
  }, [newTime]);

  return (
    <Footer>
      <InputDiv>
        <input
          value={trackProgress}
          max={String(durationTime)}
          type="range"
          min="0"
          step="1"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onTouchEnd={onScrubEnd}
        ></input>
      </InputDiv>
      <StyledDiv>
        <TimeDiv>
          <LeftScore>
            {String(Math.floor(trackProgress / 60)).padStart(2, "0")}:
            {String(Math.ceil(trackProgress) % 60).padStart(2, "0")}
          </LeftScore>
          <RightScore>
            {isLoaded && (
              <>
                {String(Math.floor(durationTime / 60)).padStart(2, "0")}:
                {String(Math.floor(durationTime) % 60).padStart(2, "0")}
              </>
            )}
          </RightScore>
        </TimeDiv>
      </StyledDiv>
      <ImgDiv>
        <Img src="../../assets/img/playbutton.png" />
        {isPlaying ? (
          <PlayImg
            src="../../assets/img/pausebutton.png"
            onClick={offPalying}
          />
        ) : (
          <PlayImg
            src="../../assets/img/play-button1.png"
            onClick={onPalying}
          />
        )}
        <Img src="../../assets/img/play-button.png" />
      </ImgDiv>
    </Footer>
  );
}

const StyledDiv = styled.div`
  text-align: -webkit-center;
`;
const InputDiv = styled.div`
  width: 80%;
`;
const LeftScore = styled.div`
  margin-left: 7px;
  color: #0054ff;
`;

const RightScore = styled.div`
  margin-right: 7px;
  color: #bdbdbd;
`;

const TimeDiv = styled.div`
  display: flex;
  width: 80%;
  heigth: 100%;
  font-size: 14px;
  justify-content: space-between;
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 30px;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 3px;
`;
const PlayImg = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;

const Footer = styled.footer`
  height: 100px;
  width: 100%;
  bottom: 0px;
  position: absolute;
  margin-bottom: 40px;
  text-align: -webkit-center;
`;

export default PlayFooter;
