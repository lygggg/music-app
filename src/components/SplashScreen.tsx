import { useState } from "react";

function ButtomPlayBar() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/competition-imgs/2020-Flo-challenge/FLO_Splash-Img3x(1242x2688).png" />
    </div>
  );
}

export default ButtomPlayBar;
