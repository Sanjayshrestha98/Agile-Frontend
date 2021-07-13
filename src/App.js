import './App.css';
import './custom.css';
import { BrowserRouter } from 'react-router-dom';
import Container from './Container/Container';
import React , {useEffect, useState} from 'react'
import Header from './Header/Header';
import AdminDashboard from './AdminContainer/AdminDashboard';
import AdminSideNav from './AdminContainer/AdminSideNav';
import AddProduct from './AdminContainer/AddProduct';
import AdminContainer from './AdminContainer/AdminContainer';

function App() {

  const [isAdmin, setIsAdmin] = useState(false);

  const getURL = () => {
    var splitURL = window.location.pathname.split("/");
    if(splitURL[1] == "admin"){
      setIsAdmin(true)
    }else{
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
         <Container></Container>
         :
         <AdminContainer></AdminContainer>
       }
 
      </div>
    </BrowserRouter>
  );
}

export default App;
