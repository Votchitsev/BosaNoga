import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import request from '../../api/request';

export default function Categories({ catalogState }) {
  const [categiries, setCategories] = useState([]);

  useEffect(() => {
    request('/api/categories/', 'GET')
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, []);

  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
        <NavLink className="nav-link active" onClick={() => catalogState('/api/items/')}>Все</NavLink>
      </li>
      { categiries.map((category) => (
        <li className="nav-item">
          <NavLink className="nav-link" onClick={() => catalogState(`/api/items?categoryId=${category.id}`)}>{ category.title }</NavLink>
        </li>
      ))}
    </ul>
  );
}

Categories.propTypes = {
  catalogState: PropTypes.func.isRequired,
};
