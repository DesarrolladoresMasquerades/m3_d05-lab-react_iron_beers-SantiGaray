import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage'
import Beers from './pages/Beers'
import NewBeer from './pages/NewBeer'
import RandomBeer from './pages/RandomBeer'
import SingleBeer from './pages/SingleBeer'
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/beers" element={<Beers />} />
        <Route exact path="/beers/:beerId" element={<SingleBeer />} />
        <Route exact path="/random-beer" element={<RandomBeer />} />
        <Route exact path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
