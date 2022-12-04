import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Card({
  id, title, price, img,
}) {
  return (
    <div className="col-4">
      <div className="card catalog-item-card">
        <img src={img} className="card-img-top img-fluid" alt={title} />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{ `${price} руб.` }</p>
          <NavLink to={`/catalog/${id}`} className="btn btn-outline-primary">Заказать</NavLink>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};
