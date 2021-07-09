import './App.css';
import './custom.css';
import { BrowserRouter } from 'react-router-dom';
import Container from './Container/Container';
import Header from './Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Container></Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
