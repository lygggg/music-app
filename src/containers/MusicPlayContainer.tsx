import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MusicPlay from "../components/MusicPlay";
import { getMusic } from "../modules/Music";

const MusicPlayContainer = () => {
  const { data, loading, error } = useSelector((state) => state.music.music);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMusic());
  }, [dispatch]);

  if (!data) return null;
  return <MusicPlay music={data} />;
};

export default MusicPlayContainer;
