import { Routes, Route } from 'react-router-dom';
import Leagues from '../pages/leagues/Leagues';

const routes = () => (
  <Routes>
    <Route path="/" element={<Leagues />} />
  </Routes>
);

export default routes;
