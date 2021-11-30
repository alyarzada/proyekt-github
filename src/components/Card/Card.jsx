import React, { useContext } from 'react';
import { ProductContext } from '../contextAPI';
import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function Card() {
  const { card, setCard } = useContext(ProductContext);


  const checkHandler = (e) => {
    let allCheckBoxes = document.querySelectorAll('input[type=checkbox]')

    if(e.target.checked){
      allCheckBoxes.forEach(checkBoxes => {
        checkBoxes.checked = true
      })
    }
    else{
      allCheckBoxes.forEach(checkBoxes => {
        checkBoxes.checked = false
      })
    }
  };

  const increaseHandler = (cardItem) => {
    let newCard = card.map((item) => {
      if (item.id === cardItem.id) {
        return {
          ...cardItem,
          amount: item.amount + 1,
        };
      }
      return item;
    });
    localStorage.setItem('card', JSON.stringify(newCard));
    setCard(newCard);
  };

  const decreaseHandler = (cardItem) => {
    let newCard = card.map((item) => {
      if (item.id === cardItem.id) {
        return {
          ...cardItem,
          amount: item.amount - 1,
        };
      }
      return item;
    });
    localStorage.setItem('card', JSON.stringify(newCard));
    setCard(newCard);
  };

  const removeHandler = (cardItem) => {
    let newCard = card.filter((filterItem) => cardItem.id !== filterItem.id);
    localStorage.setItem('card', JSON.stringify(newCard));
    setCard(newCard);

    store.addNotification({
      title: 'Shopping Card',
      message: 'Mehsul sebetden silindi',
      type: 'danger',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 1000,
      },
    });
  };

  return (
    <div className="container">
      <ReactNotification />
      <h1 style={{ textAlign: 'center', marginTop: '0.5rem' }}>My Card</h1>
      {card.length === 0 ? (
        <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '2rem' }}>
          No Items In Card
        </p>
      ) : (
        <table className="table bg-light rounded" data-aos="zoom-out">
          <thead>
            <tr>
              <th scope="col">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input checkallboxes"
                    id="admin"
                    onChange={checkHandler}
                  />
                  <label class="form-check-label cursor-pointer" for="admin">
                    Select All
                  </label>
                  <span className="ms-5">Products</span>
                </div>
              </th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {card.map((cardItem) => {
              const { price, image, title, id, amount } = cardItem;
              return (
                <tr key={id}>
                  <td style={{ display: 'flex' }}>
                    <input type="checkbox" className="form-check-input me-5" />
                    <img
                      style={{ width: '100px', height: '100px' }}
                      src={image}
                      alt={title}
                    />{' '}
                    <h5 style={{ width: '300px' }}>{title}</h5>
                  </td>
                  <td>
                    {' '}
                    <p style={{ color: 'black' }}>${price}</p>
                  </td>
                  <td>
                    {' '}
                    <div className="minus-plus-container">
                      <button
                        type="button"
                        onClick={() => increaseHandler(cardItem)}
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                      <span>{amount}</span>
                      <button
                        type="button"
                        onClick={() => decreaseHandler(cardItem)}
                      >
                        <i class="fa fa-minus"></i>
                      </button>
                    </div>
                  </td>
                  <td>
                    <p style={{ color: 'black', fontWeight: 'bolder' }}>
                      ${price * amount}
                    </p>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => removeHandler(cardItem)}
                      style={{ backgroundColor: 'transparent', border: 'none' }}
                    >
                      <i class="fas fa-times fa-2x text-danger"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>
                {' '}
                Subtotal: $
                {card
                  .reduce((acc, item) => acc + item.amount * item.price, 0)
                  .toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}

export default Card;
