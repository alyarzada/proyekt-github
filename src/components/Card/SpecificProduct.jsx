import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductContext } from '../contextAPI';

import BasicTabs from './BasicTabs';

function SpecificProduct() {
  const { code } = useParams();

  const { products } = useContext(ProductContext);

  const findItem = products.find((item) => item.id === parseInt(code));
  console.log(products)

  return (
    <>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb px-4">
        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
        <li class="breadcrumb-item"><Link to="/Store">Store</Link></li>
        <li class="breadcrumb-item active" aria-current="page">{findItem.title}</li>
      </ol>
    </nav>
    <div className="container mt-5">
      <div className="row gy-4 bg-light">
        <div className="col-md-4">
          <img src={findItem.image} className='w-50' alt={findItem.title} />
        </div>
        <div className="col-md-8">
          <BasicTabs findItem={findItem} />
        </div>
      </div>
    </div>
    </>
  );
}

export default SpecificProduct;
