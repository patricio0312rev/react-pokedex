import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokedexPage from './pages/pokedex/pokedex.component';
import Navigator from './components/navigator/navigator.component';
import PokemonDetailPage from './pages/pokemon-detail/pokemon-detail.component';
import PokemonFavouritesPage from './pages/pokemon-favourites/pokemon-favourites.component';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
              <Navigator />

              <Routes>
                <Route path="/" element={<PokedexPage />} />
                <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
                <Route path="/pokemon/favourites" element={<PokemonFavouritesPage />} />
              </Routes>
            </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
