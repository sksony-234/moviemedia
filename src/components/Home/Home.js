import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './home.scss'

const Home = ({ onSelectShow }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='home'>
      <h1>Show List</h1>
      <div className="show_container">
        {shows.map((show) => (
          <div key={show.show.id} className='show_card'>
            <NavLink to={`/details/${show.show.id}`} onClick={() => onSelectShow(show.show)}>
              <div className="card-inner">
                <div className="card-top">
                  <img src={show.show.image.original} alt={show.show.name} />
                </div>
                <div className="card-bottom">
                  <div className="card-info">
                    <h4>{show.show.name}</h4>
                    <p>{show.show.rating.average}</p>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
