import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import MusicPage from "./pages/MusicPage";
import CounterContainer from "./containers/CounterContainer";

import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <>
      <BrowserRouter>
        <InnerDiv>
          <Routes>
            <Route path="/" element={<MusicPage />} />
          </Routes>
        </InnerDiv>
      </BrowserRouter>
    </>
  );
}

const InnerDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export default App;
