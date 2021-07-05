import logo from './logo.svg';
import './App.css';
import './custom.css';
import {BrowserRouter} from 'react-router-dom';
import Container from './Container/Registration'


function App() {
  return (
    <BrowserRouter>
    <Container></Container>
    </BrowserRouter>
  );
}

export default App;
