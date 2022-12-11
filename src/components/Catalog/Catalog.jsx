/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import request from '../../api/request';
import Card from './Card';
import Categories from './Categories';
import Search from './Search';
import createParamsObject from './createParamsObject';
import Loader from '../Loader/Loader';

export default function Catalog({ catalogPage }) {
  const [items, setItems] = useState([]);
  const [categiries, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [offset, setOffset] = useState(null);
  const [catalogIsLoaded, setCatalogIsLoaded] = useState(false);
  const [categiriesIsLoaded, setCategoriesIsLoaded] = useState(false);

  const searchValue = useSelector((state) => state.search.searchValue);
  const navigate = useNavigate();

  useEffect(() => {
    const f = () => {
      setCatalogIsLoaded(false);
      request('/api/items/', 'GET', createParamsObject(offset, categoryId, searchValue))
        .then((response) => response.json())
        .then((json) => {
          setItems(json);
          setCatalogIsLoaded(true);
        })
        .catch((error) => {
          alert(error);
          f();
        });
    };

    f();
  }, [categoryId, offset, searchValue, navigate]);

  useEffect(() => {
    const f = () => {
      request('/api/categories/', 'GET')
        .then((response) => response.json())
        .then((json) => {
          setCategories(json);
          setCategoriesIsLoaded(true);
        })
        .catch((error) => {
          alert(error);
          f();
        });
    };

    f();
  }, [navigate]);

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
      { (catalogIsLoaded && categiriesIsLoaded) ? (
        <>
          <Categories
            categoryId={setCategoryId}
            offset={setOffset}
            categiries={categiries}
          />
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
        </>
      ) : <Loader /> }
    </section>
  );
}

Catalog.propTypes = {
  catalogPage: PropTypes.bool.isRequired,
};
