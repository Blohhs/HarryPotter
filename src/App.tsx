import Header from './components/Header';
import Filters from './components/Filters';
import CharacterList from './components/CharacterList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Filters />
      <CharacterList />
    </div>
  );
}

export default App;