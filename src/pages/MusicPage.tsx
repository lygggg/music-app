import React, { useEffect } from "react";
import styled from "styled-components";

import MusicPlayContainer from "../containers/MusicPlayContainer";
import PlayFooterContainer from "../containers/PlayFooterContainer";

function MusicPage() {
  return (
    <Main>
      <MusicPlayContainer />;
      <PlayFooterContainer />
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
export default MusicPage;
