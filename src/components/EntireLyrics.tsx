import { useEffect, useState } from "react";
import styled from "styled-components";
import { Scrollbar } from "smooth-scrollbar-react";
import Lyric from "./Lyric";

const EntireLyrics = ({ music, setLyricsPage, time }) => {
  let firstTime = 0;
  let middleTime = 0;
  let sumTime = 0;
  const slicedLyrics = music.lyrics.split("\n");
  const lyricsTime = String(slicedLyrics)
    .match(/((\[)(.*?)(\]))/g)
    ?.map((e) => {
      firstTime = e.substr(1, 2);
      middleTime = e.substr(4, 2);
      sumTime = firstTime * 60 + Number(middleTime);
      return sumTime;
    });
  const lyricsText = slicedLyrics.map((e) => e.replace(/((\[)(.*?)(\]))/g, ""));
  const lyricsObject = lyricsTime?.reduce((acc, curr, idx) => {
    {
      acc.push({
        time: curr,
        text: lyricsText[idx],
      });
      return acc;
    }
  }, []);

  const [lyricList, setLyricList] = useState(lyricsObject);

  const backPage = () => {
    setLyricsPage();
  };

  const changeLyrics = () => {
    const index = lyricsObject.findIndex((e) => e.time + 3 > time);
    lyricsObject?.forEach((e, i) => {
      if (index === i) {
        e.color = true;
      }
    });
    setLyricList(lyricsObject);
  };
  useEffect(() => {
    changeLyrics();
  }, [time]);

  return (
    <MainContainer>
      <MusicContainer>
        <div>
          <Img
            onClick={() => backPage()}
            src={"https://cdn-icons-png.flaticon.com/512/83/83989.png"}
          />
        </div>
        <Title>{music.title}</Title>
        <Album>{music.album}</Album>
        <Singer>{music.singer}</Singer>
        <Scrollbar
          className="custom-class"
          alwaysShowTracks
          plugins={{
            overscroll: {
              effect: "glow",
            } as const,
          }}
          style={{
            width: "450px",
            height: "450px",
            textAlign: "center",
            gap: "50px",
          }}
        >
          <LyricList>
            {lyricList.map((lyric) => (
              <div key={lyric.time}>
                <Lyric lyric={lyric} />
              </div>
            ))}
          </LyricList>
        </Scrollbar>
      </MusicContainer>
    </MainContainer>
  );
};

const LyricList = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  font-size: 17px;
  margin-bottom: 20px;
  align-items: center;
  color: #a6a6a6;
`;
const Img = styled.img`
  width: 35x;
  height: 35px;
  align-self: center;
  margin-top: 15px;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
`;
const MusicContainer = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: lighter;
  margin-top: 20px;
`;

const Album = styled.div`
  font-size: 17px;
`;

const Singer = styled.div`
  font-size: 15px;
  color: #5d5d5d;
`;

export default EntireLyrics;
