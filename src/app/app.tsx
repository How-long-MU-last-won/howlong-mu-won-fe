import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/landing';
import Players from './pages/players/players';
import Managers from './pages/managers/managers';
import NavBar from './components/nav-bar/nav-bar';
import Footer from './components/footer/footer';
import { useAppDispatch } from '../hooks';
import { useEffect } from 'react';
import {
  setTrophies,
  finishTrophiesLoading,
} from '../redux/slices/landing/landing.slice';
import {
  setManagers,
  finishManagersLoading,
} from '../redux/slices/managers/managers.slice';
import {
  setPlayers,
  finishPlayersLoading,
} from '../redux/slices/players/players.slice';

const API_URL = import.meta.env.VITE_API_URL;
export function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetch(API_URL + 'trophies/')
      .then((res) => res.json())
      .then((data) => {
        dispatch(setTrophies(data));
        dispatch(finishTrophiesLoading());
      });

    fetch(API_URL + 'coaches/')
      .then((res) => res.json())
      .then((data) => {
        dispatch(setManagers(data));
        dispatch(finishManagersLoading());
      });
    fetch(API_URL + 'players/')
      .then((res) => res.json())
      .then((data) => {
        dispatch(setPlayers(data));
        dispatch(finishPlayersLoading());
      });
  }, [dispatch]);

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
