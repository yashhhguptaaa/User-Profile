import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route ,Link ,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        {/* <Route path="/details" exact component={Details} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
