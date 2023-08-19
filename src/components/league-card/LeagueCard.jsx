import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { chengePage } from '../../redux/feature/app-info/appInfoSlice';
import './LeagueCard.css';

function LeagueCard({
  name, id, image,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const leagueSeasons = (id) => {
    navigate(`/seasons/${id}`);
    dispatch(chengePage('Seasons'));
  };
  return (
    <div className="CardContainer" onKeyUp={() => {}} role="navigation" onClick={() => leagueSeasons(id)}>
      <div style={{ backgroundImage: `url("${image}")` }} className="LeagueImage" />
      <p className="LeagueName">{name}</p>
    </div>
  );
}

LeagueCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default LeagueCard;
