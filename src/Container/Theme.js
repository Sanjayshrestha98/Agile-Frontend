import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  // fontColor: "#000",s
  color: "black",
  

};

export const darkTheme = {
  body: "#000",
  color: "white",

};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.color}
	}
`;