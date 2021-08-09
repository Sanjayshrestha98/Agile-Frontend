import './App.css';
import './custom.css';
import { BrowserRouter } from 'react-router-dom';
import Container from './Container/Container';
import React, { useEffect, useState } from 'react'
import Header from './Header/Header';
import AdminDashboard from './AdminContainer/AdminDashboard';
import AdminSideNav from './AdminContainer/AdminSideNav';
import AddProduct from './AdminContainer/Product/AddProduct';
import AdminContainer from './AdminContainer/AdminContainer';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import { ThemeProvider } from 'react-bootstrap';


const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}



function App() {

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

  return (
    <BrowserRouter>
      <div>

        {
          !isAdmin ?
            <Container>
              <ThemeProvider theme={themes[theme]}>
                <Splash theme={theme} setTheme={setTheme} />
              </ThemeProvider>

            </Container>
            :
            <AdminContainer></AdminContainer>
        }

      </div>
    </BrowserRouter>
  );
}

export default App;
