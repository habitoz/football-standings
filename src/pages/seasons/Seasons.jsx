import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeasons } from '../../redux/feature/seasons/seasonSlice';
import Loader from '../../components/Loader';

import './Seasons.css';

export default function Seasons() {
  const { leagueId } = useParams();
  const { seasons, loading, leagueInfo } = useSelector((state) => state.season);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSeasons(leagueId));
  }, []);
  return (
    <div className="pageContainer">
      {
        loading && (
          <Loader />
        )
      }
      {
        !loading && (
          <>
            <div className="leagueInfo">
              <p className="leagueName">
                { leagueInfo?.name }
              </p>
              <p className="seasonsCount">{seasons.length.toLocaleString()}</p>
              <p>Count</p>
            </div>
            <p className="seasonsHeader">all seasons</p>
            <ul className="seasonsListContainer">
              {
          seasons.map((season) => (
            <li key={season.year} className="seasonsList">{season.displayName}</li>
          ))
        }
            </ul>
          </>
        )
      }
    </div>
  );
}
