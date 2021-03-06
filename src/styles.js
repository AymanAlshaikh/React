import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body {
    background-color:${(props) => props.theme.backgroundcolor}
}`;

export const Title = styled.h1`
  font-family: Georgia, "Times New Roman", Times, serif;
  color: cyan;
  text-align: center;
`;
export const Description = styled.h2`
  font-style: unset;
  font-stretch: extra-expanded;
  font-family: fantasy;
  color: chocolate;
  text-align: center;
`;
export const Details = styled.h3`
  text-align: center;
  color: black;
  align-item: center;
`;
export const Pics = styled.img`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  margin-top: auto;
  align-item: center;
`;
export const Sidebyside = styled.div`
  margin-bottom: auto;
  margin-top: 50 px;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
`;
export const Btn = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  align-item: center;
`;
