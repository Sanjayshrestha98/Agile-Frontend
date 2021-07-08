import './App.css';
import './custom.css';
import {BrowserRouter} from 'react-router-dom';
import Container from './Container/Container'


function App() {
  return (
    <BrowserRouter>
    <div>
    <Container></Container>

    </div>
    </BrowserRouter>
  );
}

export default App;
