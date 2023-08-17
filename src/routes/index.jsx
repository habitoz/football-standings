import { Routes, Route } from 'react-router-dom';
import Leagues from '../pages/leagues/Leagues';
import Seasons from '../pages/seasons/Seasons';

const routes = () => (
  <Routes>
    <Route path="/" element={<Leagues />} />
    <Route path="/seasons/:leagueId" element={<Seasons />} />
  </Routes>
);

export default routes;
