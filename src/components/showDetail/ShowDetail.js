import React from 'react';
import './showDetail.scss'

const ShowDetail = ({ show, onBookTicket }) => {
  return (
    <div className="show_details">
    <div className="show_box">
      <div className="left">
        <h1>{show.name}</h1>
        <p>{show.summary}</p>
        <div className='more_info'>
          <span>rating: {show.rating?.average}</span>
          <span>language: {show.language}</span>
          <span>Release date: {show.premiered}</span>
        </div>
      </div>
      <div className="right">
        <img src={show.image?.medium} alt={show.name} />
      </div>
    </div>
      <button onClick={() => onBookTicket(show)}>Book Ticket</button>
    </div>
  );
};

export default ShowDetail;
