import { useState, useEffect } from "react";
import { getMusic } from "../service/MusicService";
import styled from "styled-components";

function MusicPlay({ music }) {
  // const [music, setMusic] = useState(Object);

  // const fetchMusic = async () => {
  //   try {
  //     const data = await getMusic();
  //     console.log(data, data.lyrics);
  //     setMusic(data);
  //   } catch (e) {}
  // };

  useEffect(() => {
    // fetchMusic();
  }, []);

  return (
    <StyledMain>
      <StyledInner>
        <TitleDiv>{music.title}</TitleDiv>
        <AlbumDiv>{music.album}</AlbumDiv>
        <SingerDiv>{music.singer}</SingerDiv>
        <ImgDiv>
          <StyledImg src={music.image} />
        </ImgDiv>
        <div>
          <div> 난 얼어버렸다 새하얀 추억만</div>
          <div> 난 얼어버렸다 새하얀 추억만</div>
        </div>
      </StyledInner>
    </StyledMain>
  );
}

const TitleDiv = styled.div`
  margin-top: 80px;
  font-size: 20px;
  font-weight: lighter;
`;

const AlbumDiv = styled.div`
  font-size: 15px;
`;

const ImgDiv = styled.div`
  margin-top: 30px;
  color: #353535;
`;

const SingerDiv = styled.div`
  font-size: 13px;
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
