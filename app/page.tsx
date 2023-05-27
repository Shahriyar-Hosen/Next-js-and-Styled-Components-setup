"use client";

import { Main, Title } from "@styles/Home";
import styled from "styled-components";

const Home = () => {
  return (
    <Main>
      <Title>Home Page</Title>
    </Main>
  );
};

export default Home;

const Div = styled.div`
  width: 100%;
  height: 100vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1`
  color: white;
`;
