import './App.css';
import NavBar from './components/NavBar.js';
import Home from './pages/Home.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
            <Route path="/" exact component={Home}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
