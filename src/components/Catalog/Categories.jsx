import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import request from '../../api/request';

export default function Categories({ categoryId, offset }) {
  const [categiries, setCategories] = useState([]);

  useEffect(() => {
    request('/api/categories/', 'GET')
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, []);

  const onClickHandler = (id) => {
    categoryId(id);
    offset(null);
  };

  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
        <NavLink className="nav-link active" onClick={() => onClickHandler(null)}>Все</NavLink>
      </li>
      { categiries.map((category) => (
        <li className="nav-item">
          <NavLink className="nav-link" onClick={() => onClickHandler(category.id)}>{ category.title }</NavLink>
        </li>
      ))}
    </ul>
  );
}

Categories.propTypes = {
  categoryId: PropTypes.func.isRequired,
  offset: PropTypes.func.isRequired,
};
