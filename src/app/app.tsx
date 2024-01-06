import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/landing';
import Trophies from './pages/trophies/trophies';
import Players from './pages/players/players';
import Managers from './pages/managers/managers';
import NavBar from './components/nav-bar/nav-bar';

export function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/trophies" element={<Trophies />}></Route>
        <Route path="/players" element={<Players />}></Route>
        <Route path="/managers" element={<Managers />}></Route>
      </Routes>
    </>
  );
}

export default App;
