import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeagues, setSearchString } from '../../redux/feature/leagues/leaguesSlice';
import Loader from '../../components/Loader';
import Filter from '../../components/filter/Filter';
import LeagueCard from '../../components/league-card/LeagueCard';
import Style from './Leagues.module.css';

export default function Leagues() {
  const { leagues, searchString, loading } = useSelector((state) => state.league);
  const { showSearchForm } = useSelector((state) => state.appInfo);
  const dispatch = useDispatch();
  const leagueMatches = (league) => league.name.toLowerCase().includes(searchString.toLowerCase());
  const filterHandler = (data) => {
    dispatch(setSearchString(data));
  };
  useEffect(() => {
    dispatch(fetchLeagues());
  }, []);

  return (
    <div className={`${Style.PageContainer}`}>
      {loading && <Loader />}
      {!loading && leagues.length && (
        <>
          {
          showSearchForm && <Filter filterHandler={filterHandler} />
        }
          <ul className={`${Style.ListContainer}`}>
            {leagues.filter((league) => leagueMatches(league)).map((league) => (
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
        </>
      )}
    </div>
  );
}
