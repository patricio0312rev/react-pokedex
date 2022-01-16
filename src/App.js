import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokedexPage from './pages/pokedex/pokedex.component';
import Navigator from './components/navigator/navigator.component';

function App() {
  return (
    <div className="App">
        <Router>
          <Navigator />

          <Routes>
            <Route path="/" element={<PokedexPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
