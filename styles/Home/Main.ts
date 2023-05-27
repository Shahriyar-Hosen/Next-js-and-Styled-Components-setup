import styled from "styled-components";

export interface IMain {}

export const Main = styled.div<IMain>`
  width: 100%;
  height: 100vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
