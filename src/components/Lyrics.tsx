import React, { useState, useEffect } from "react";

function Lyrics({ lyrics, time }) {
  let count = 1;
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
    return { ...acc, [curr]: lyricsText[idx] };
  }, new Object());

  const changeLyrics = () => {
    setText(lyricsObject[lyricsTime?.find((e) => e >= time - 2)]);
  };

  useEffect(() => {
    changeLyrics();
  }, [time]);

  useEffect(() => {
    setNextText(lyricsText[count]);
    count += 1;
    console.log("씨발");
  }, [setText]);

  return (
    <div>
      <div>{text}</div>
      <div>{nextText}</div>
    </div>
  );
}

export default Lyrics;
