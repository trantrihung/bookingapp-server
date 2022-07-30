import React from 'react';
import Carousel from '~/components/Carousel';
import Featured from '~/components/Featured';
// import HotelList from '~/components/HotelList';
import Offer from '~/components/Offer';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Offer />
      <Featured />
      {/* <HotelList /> */}
    </div>
  );
};

export default Home;
