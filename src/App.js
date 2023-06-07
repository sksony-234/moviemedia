import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css'
import ShowDetail from './components/showDetail/ShowDetail';

const App = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleSelectShow = (show) => {
    setSelectedShow(show);
  };

  const handleBookTicket = (show) => {
    // Handle booking ticket logic here
    console.log('Booking ticket for:', show.name);
  };

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home onSelectShow={handleSelectShow} />} />
        <Route path="/details/:id" element={selectedShow && (
          <ShowDetail show={selectedShow} onBookTicket={handleBookTicket} />
        )} />
      </Routes>
    </div>
  );
};

export default App;
