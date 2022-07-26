import React from 'react';
import Carousel from '~/components/Carousel';
import HotelList from '~/components/HotelList';
import Offer from '~/components/Offer';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Offer />
      <HotelList />
    </div>
  );
};

export default Home;
