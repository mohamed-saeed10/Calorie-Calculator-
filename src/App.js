import Home from './components/Home';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <BrowserRouter> {/* BrowserRouter allows routing between children elements */}
       
          <Home /> 
       
      </BrowserRouter>
    </div>
  );
}

export default App;