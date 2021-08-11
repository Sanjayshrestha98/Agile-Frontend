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
import { ThemeProvider } from "styled-components";
import Splash from "./Header/Header";


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

            </Container>
            :
            <AdminContainer></AdminContainer>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
