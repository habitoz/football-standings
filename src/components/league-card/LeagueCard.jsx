import React from 'react';
import PropTypes from 'prop-types';
import './LeagueCard.module.css';

function LeagueCard({
  name, id, slug, abbrevation, image,
}) {
  // const leagueSeasons = (id) => {
  //   usero
  // };

  return (
    <div className="CardContainer">
      {name}
      {id}
      {slug}
      {abbrevation}
      {image}
    </div>
  );
}

LeagueCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  abbrevation: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default LeagueCard;
