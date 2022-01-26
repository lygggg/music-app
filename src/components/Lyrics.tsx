import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Lyrics = ({ lyrics, time }) => {
  let firstTime = 0;
  let middleTime = 0;
  let sumTime = 0;
  const sliceLyrics = lyrics.split("\n");
  const lyricsTime = String(sliceLyrics)
    .match(/((\[)(.*?)(\]))/g)
    ?.map((e) => {
      firstTime = e.substr(1, 2);
      middleTime = e.substr(4, 2);
      sumTime = firstTime * 60 + Number(middleTime);
      return sumTime;
    });
  const lyricsText = sliceLyrics.map((e) => e.replace(/((\[)(.*?)(\]))/g, ""));
  const [text, setText] = useState(lyricsText[0]);
  const [nextText, setNextText] = useState(lyricsText[1]);
  const lyricsObject = lyricsTime?.reduce((acc, curr, idx) => {
    {
      acc.push({
        time: curr,
        text: lyricsText[idx],
      });
      return acc;
    }
  }, []);

  const changeLyrics = () => {
    const lyric =
      lyricsObject[lyricsObject?.findIndex((e) => e.time >= time - 2.5)];
    const nextLyric =
      lyricsObject[lyricsObject?.findIndex((e) => e.time >= time - 2.5) + 1];

    if (lyric) {
      setText(lyric.text);
      if (nextLyric) setNextText(nextLyric.text);
    }
  };

  useEffect(() => {
    changeLyrics();
  }, [time]);

  return (
    <TextContainer>
      <Text>{text}</Text>
      <NextText>{nextText}</NextText>
    </TextContainer>
  );
};
const TextContainer = styled.div`
  margin-top: 20px;
`;
const Text = styled.div`
  font-size: 20px;
  text-align: center;
`;

const NextText = styled.div`
  font-size: 20px;
  text-align: center;
  color: #a6a6a6;
`;

export default Lyrics;
