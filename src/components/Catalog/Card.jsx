import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ title, price, img }) {
  return (
    <div className="col-4">
      <div className="card catalog-item-card">
        <img src={img} className="card-img-top img-fluid" alt={title} />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{ `${price} руб.` }</p>
          <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};
