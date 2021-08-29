import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route ,Link ,Switch} from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Detailsscreen from './screens/Detailsscreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/details" exact component={Detailsscreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
