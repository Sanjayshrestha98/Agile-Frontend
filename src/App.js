import './App.css';
import './custom.css';
import { BrowserRouter } from 'react-router-dom';
import Container from './Container/Container';
import Header from './Header/Header';
import AdminDashboard from './AdminContainer/AdminDashboard';
import AdminSideNav from './AdminContainer/AdminSideNav';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Container></Container>
        <AdminDashboard/>
        <AdminSideNav/>
      </div>
    </BrowserRouter>
  );
}

export default App;
