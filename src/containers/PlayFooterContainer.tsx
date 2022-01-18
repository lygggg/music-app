import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PlayFooter from "../components/PlayFooter";
import { decrease } from "../modules/counter";
import { getMusic } from "../modules/music";

const PlayFooterContainer = () => {
  const { data, loading, error } = useSelector((state) => state.music.music);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMusic());
  }, [dispatch]);
  return <PlayFooter music={data} />;
};

export default PlayFooterContainer;
