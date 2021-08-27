import './App.css';
import './custom.css';
import 'dotenv';
import { BrowserRouter } from 'react-router-dom';
import Container from './Container/Container';
import React, { useEffect, useState } from 'react'
import AdminContainer from './AdminContainer/AdminContainer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Container/Theme";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {

  const [theme, setTheme] = useState({});
  const [themeSelected, setThemeSelected] = useState()

  localStorage.setItem('theme', "light")

  const themeToggler = () => {
    if (localStorage.getItem('theme', "light") === "light") {
      localStorage.setItem('theme', "dark")
      setThemeSelected("dark")
      // themeSelected = "dark"
    }
    else {
      localStorage.setItem('theme', "light")
      setThemeSelected("light")
      // themeSelected = "light"
    }
    // theme === localStorage.getItem("theme") ? setTheme("dark") : setTheme("light");

  };

  const [isAdmin, setIsAdmin] = useState(false);

  const getURL = () => {
    var splitURL = window.location.pathname.split("/");
    if (splitURL[1] == "admin") {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }
  }

  useEffect(() => {
    getURL()
  }, [])

  useEffect(() => {
    setTheme(localStorage.getItem("theme") === "light" ? lightTheme : darkTheme)
  }, [themeSelected])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <StyledApp>


        <BrowserRouter>
          <div>
            {/* <button onClick={() => themeToggler()}>Change Theme</button> */}
            {
              !isAdmin ?
                <Container>

                </Container>
                :
                <AdminContainer>

                </AdminContainer>
            }
          </div>
        </BrowserRouter>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
