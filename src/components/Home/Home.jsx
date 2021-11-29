import React from 'react';
import Carousel from './Carousel';
import Content from './Content';

function Home() {
  return (
    <>
      <div className="container-fluid px-4">
        <div className="row wh-90 my-3 align-items-center justify-content-between">
          <Content />
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default Home;
