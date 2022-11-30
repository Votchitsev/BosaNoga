import React, { useEffect, useState } from 'react';
import request from '../../api/request';
import Card from './Card';
import Categories from './Categories';
import createParamsObject from './createParamsObject';

export default function Catalog() {
  const [items, setItems] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [offset, setOffset] = useState(null);

  useEffect(() => {
    request('/api/items/', 'GET', createParamsObject(offset, categoryId))
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [categoryId, offset]);

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
            title={item.title}
            price={item.price}
            img={item.images[0]}
          />
        ))}
      </div>
      { items.length > 6
        ? (
          <div className="text-center">
            <button type="button" className="btn btn-outline-primary" onClick={onOffsetClick}>Загрузить ещё</button>
          </div>
        ) : null}
    </section>
  );
}
