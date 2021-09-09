import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  // fontColor: "#000",s
  color: "black",
  fontColor : "rgba(0,0,0,1) !important"
  

};

export const darkTheme = {
  body: "black",
  color: "white !important", 
  fontColor : "white !important"
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.color}
	}

  .nav-link, th, td, h1, h2, h3, h4, h5, h6, p{
    color: ${(props) => props.theme.fontColor}
  }

   
`;