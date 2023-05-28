import styled from "styled-components";

export interface IMain {}
export interface ITitle {}

export const Main = styled.div<IMain>`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1<ITitle>`
  color: white;
`;
