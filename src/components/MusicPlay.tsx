import { useState } from "react";
import styled from "styled-components";
import Lyrics from "./Lyrics";
import EntireLyrics from "./EntireLyrics";

const MusicPlay = ({ music, time }) => {
  const [lyricsPage, setLyricsPage] = useState(true);

  const clickBackLyricsPage = () => {
    setLyricsPage(true);
  };

  const clickLyricsPage = () => {
    setLyricsPage(false);
  };

  return (
    <StyledMain>
      <StyledInner>
        {lyricsPage ? (
          <>
            <Title>{music.title}</Title>
            <Album>{music.album}</Album>
            <Singer>{music.singer}</Singer>
            <Img>
              <StyledImg src={music.image} />
            </Img>
            <div onClick={clickLyricsPage}>
              <Lyrics lyrics={music.lyrics} time={Math.ceil(time)} />
            </div>
          </>
        ) : (
          <EntireLyrics
            music={music}
            LyricsPage={clickBackLyricsPage}
            time={Math.ceil(time)}
          />
        )}
      </StyledInner>
    </StyledMain>
  );
};

const Title = styled.div`
  margin-top: 80px;
  font-size: 22px;
  font-weight: lighter;
`;

const Album = styled.div`
  font-size: 17px;
`;

const Img = styled.div`
  margin-top: 30px;
  color: #353535;
`;

const Singer = styled.div`
  font-size: 15px;
  color: #5d5d5d;
`;

const StyledMain = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
`;
const StyledInner = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const StyledImg = styled.img`
  width: 310px;
  height: 300px;
  border-radius: 8px;
`;

export default MusicPlay;
