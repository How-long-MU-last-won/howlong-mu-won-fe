import { Route, Routes } from 'react-router-dom';
import Landing from '@/app/pages/landing/landing';
import Players from '@/app/pages/players/players';
import Managers from '@/app/pages/managers/managers';
import NavBar from '@components/nav-bar/nav-bar';
import Footer from '@components/footer/footer';

export function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        {/* <Route path="/test" element={<Trophies />}></Route> */}
        <Route path="/players" element={<Players />}></Route>
        <Route path="/managers" element={<Managers />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
