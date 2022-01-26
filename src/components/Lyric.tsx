import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSelectMusic } from "../modules/MusicControl";

const Lyric = ({ lyric }) => {
  const dispatch = useDispatch();

  const changeCurrentTime = () => {
    dispatch(setSelectMusic(lyric));
  };

  return (
    <div>
      {lyric.color ? (
        <ColorText>{lyric.text}</ColorText>
      ) : (
        <Text onClick={changeCurrentTime}>{lyric.text}</Text>
      )}
    </div>
  );
};

const Text = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const ColorText = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #1ddb16;
`;

export default Lyric;
