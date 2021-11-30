import React, { useContext, useState } from 'react';
import { ProductContext } from '../contextAPI';
import { HashLoader } from 'react-spinners';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function Store() {
  const { products, card, setCard, loading } = useContext(ProductContext);
  const [findProducts, setFindProducts] = useState([]);

  const addCardHandler = (findItem) => {
    findItem['amount'] = 1;

    let hasCard = card.filter((item) => item.id === findItem.id);
    console.log(hasCard);

    if (!hasCard.length) {
      card.unshift(findItem);
      store.addNotification({
        title: 'Shopping Card',
        message: 'Mehsul sebete elave edildi',
        type: 'success',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 1000,
        },
      });
    }

    setCard([...card]);
    localStorage.setItem('card', JSON.stringify(card));
  };

  if (loading) {
    return <HashLoader />;
  }
  const searchHandler = (e) => {
    let text = e.target.value;
    let findProducts = products.filter((product) => {
      return product.title.toLowerCase().search(text) !== -1;
    });
    setFindProducts(findProducts);
  };
  return (
    <>
      <ReactNotification />
      <div className="container-fluid">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb px-4">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
            Store
            </li>
          </ol>
        </nav>
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Products</h1>
        <div className="row justify-content-center my-3">
          <div className="col-5">
            <input
              type="search"
              className="form-control"
              onChange={(e) => searchHandler(e)}
              placeholder="Search"
            />
          </div>
        </div>
        <div className="row justify-content-center gap-1">
          {findProducts.length === 0
            ? products.map((mapItem) => {
                const { id, image, price, title } = mapItem;
                return (
                  <div
                    data-aos="flip-left"
                    key={id}
                    className="card card-own col-lg-2 col-md-3 col-sm-4 m-1"
                    style={{ width: '18rem' }}
                  >
                    <img src={image} className="img-fluid" alt={title} />
                    <div className="card-body">
                      <Link to={`/Store/${id}`}>
                        <h5 className="card-title">{title}</h5>
                      </Link>
                      <div className="d-flex gap-3">
                        <span className="card-price">${price}</span>
                        <del className="card-price">${price}</del>
                      </div>
                      <button
                        className="btn btn-light btn-card"
                        onClick={() => addCardHandler(mapItem)}
                      >
                        Add to card
                      </button>
                    </div>
                  </div>
                );
              })
            : findProducts.map((mapItem) => {
                const { id, image, price, title } = mapItem;
                return (
                  <div
                    data-aos="flip-left"
                    key={id}
                    className="card card-own col-lg-2 col-md-3 col-sm-4 m-1"
                    style={{ width: '18rem' }}
                  >
                    <img src={image} className="img-fluid" alt={title} />
                    <div className="card-body">
                      <Link to={`/Store/${id}`}>
                        <h5 className="card-title">{title}</h5>
                      </Link>
                      <div className="d-flex gap-3">
                        <span className="card-price">${price}</span>
                        <del className="card-price">${price}</del>
                      </div>
                      <button
                        className="btn btn-light btn-card"
                        onClick={() => addCardHandler(mapItem)}
                      >
                        Add to card
                      </button>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
}

export default Store;
