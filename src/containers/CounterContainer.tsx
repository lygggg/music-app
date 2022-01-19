import React from "react";
import Counter from "../components/Lyrics";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../modules/MusicControl";

function CounterContainer() {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
