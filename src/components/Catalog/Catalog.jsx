import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import request from '../../api/request';
import Card from './Card';
import Categories from './Categories';
import Search from './Search';
import createParamsObject from './createParamsObject';

export default function Catalog({ catalogPage }) {
  const [items, setItems] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [offset, setOffset] = useState(null);
  // const [searchValue, setSearchValue] = useState(null);

  const searchValue = useSelector((state) => state.search.searchValue);

  useEffect(() => {
    request('/api/items/', 'GET', createParamsObject(offset, categoryId, searchValue))
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [categoryId, offset, searchValue]);

  const onOffsetClick = () => {
    if (!offset) {
      setOffset(6);
      return;
    }

    setOffset(offset + 6);
  };

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      { catalogPage ? <Search setOffset={setOffset} /> : null }
      <Categories categoryId={setCategoryId} offset={setOffset} />
      {/* <div className="preloader">
        <span />
        <span />
        <span />
        <span />
      </div> */}
      <div className="row">
        { items.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.images[0]}
          />
        ))}
      </div>
      { items.length >= 6
        ? (
          <div className="text-center">
            <button type="button" className="btn btn-outline-primary" onClick={onOffsetClick}>Загрузить ещё</button>
          </div>
        ) : null}
    </section>
  );
}

Catalog.propTypes = {
  catalogPage: PropTypes.bool.isRequired,
};
