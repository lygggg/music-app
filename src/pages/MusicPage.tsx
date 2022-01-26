import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import MusicPlay from "../components/MusicPlay";
import PlayFooter from "../components/PlayFooter";
import { getMusic } from "../modules/Music";

const MusicPage = () => {
  const { data, loading, error } = useSelector((state) => state.music.music);
  const time = useSelector((state) => state.musicControl.musicControl.time);
  const newTime = useSelector((state) => state.musicControl.selectMusic.object);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMusic());
  }, [dispatch]);

  if (!data) return null;
  return (
    <Main>
      <MusicPlay music={data} time={time} />
      <PlayFooter music={data} newTime={newTime} />
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export default MusicPage;
