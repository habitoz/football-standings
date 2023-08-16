import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeagues } from '../../redux/feature/leagues/leaguesSlice';
import Loader from '../../components/Loader';
import LeagueCard from '../../components/league-card/LeagueCard';
import Style from './Leagues.module.css';

export default function Leagues() {
  const { leagues, loading } = useSelector((state) => state.league);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeagues());
  }, []);
  return (
    <div>
      {loading && <Loader />}
      {!loading && leagues.length && (
        <ul className={`${Style.ListContainer}`}>
          {leagues.map((league) => (
            <li key={league.id}>
              {' '}
              <LeagueCard
                id={league.id}
                name={league.name}
                slug={league.slug}
                abbrevation={league.abbr}
                image={league.logos.dark}
              />
              {' '}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
