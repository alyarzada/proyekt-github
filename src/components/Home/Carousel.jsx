import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from './carousel-images/microsoft-edge-8tvoDBqOHZU-unsplash.jpg';
import img2 from './carousel-images/reed-geiger-I1gs2HXWrPc-unsplash.jpg';
import img3 from './carousel-images/sonja-prein-Gg01DgNAZHg-unsplash.jpg';
import img4 from './carousel-images/surface-5dgyw4yXLKU-unsplash.jpg';
import img5 from './carousel-images/surface-AKOlQ6dE8Nc-unsplash.jpg';

function Carousel() {
  return (
    <div className="col-12 col-md-5">
      <OwlCarousel
        className="owl-theme"
        loop
        autoplay
        margin={10}
        items="1"
        nav
        navText={[
          '<i class="fas fa-chevron-left fa-2x text-light position-absolute top-40 start-5"></i>',
          '<i class="fas fa-chevron-right fa-2x text-light position-absolute top-40 end-5"></i>',
        ]}
      >
        <div className="item">
          <img src={img1} alt="" />
        </div>
        <div className="item">
          <img src={img2} alt="" />
        </div>
        <div className="item">
          <img src={img3} alt="" />
        </div>
        <div className="item">
          <img src={img4} alt="" />
        </div>
        <div className="item">
          <img src={img5} alt="" />
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Carousel;
