import React, { useEffect, useState } from 'react';
import request from '../../api/request';
import Card from './Card';

export default function Catalog() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    request('/api/items/', 'GET')
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
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
    </section>
  );
}
