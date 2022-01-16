import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokedexPage from './pages/pokedex/pokedex.component';

function App() {
  return (
    <div className="App">
        <h1>Hello</h1>
        <Router>
          <Routes>
            <Route path="/" element={<PokedexPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
