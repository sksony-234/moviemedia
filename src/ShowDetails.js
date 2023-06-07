import React from 'react';

const ShowDetails = ({ show, onBookTicket }) => {
    return (
        <div>
            <h1>Show Details</h1>
            <img src={show.image?.medium} alt={show.name} />
            <p>{show.summary}</p>
            <button onClick={() => onBookTicket(show)}>Book Ticket</button>
        </div>
    );
};

export default ShowDetails;
