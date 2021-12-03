import React from 'react';
import Typed from 'react-typed';
import cv from './CV.pptx';

function Content() {
  return (
    <div className="mb-3 mb-md-0 col-12 col-md-6">
      <h1 className="d-md-block d-none">
        <Typed
          strings={[
            'Welcome Portfolio Project',
            'by Front-End Developer',
            'Alyarzada Tunar',
          ]}
          typeSpeed={40}
          backSpeed={20}
          loop
        />
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        culpa. Quam, blanditiis accusamus atque, impedit odit officiis fuga
        laudantium consequatur quasi esse aliquam praesentium facilis error
        nesciunt aut ullam quaerat?
      </p>
      <button data-aos="slide-right" className="btn admin mt-2" id='download-cv-btn' type="button">
        <a href={cv} download className='text-decoration-none text-black'>Download CV</a>
      </button>
    </div>
  );
}

export default Content;
