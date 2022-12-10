import React, { useEffect, useState } from 'react';
import request from '../../api/request';
import Card from '../Catalog/Card';

export default function TopSales() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    request('/api/top-sales', 'GET')
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((error) => alert(error));
  }, []);

  return (
    items && items.length > 0 ? (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <div className="row">
          {items.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              img={item.images[0]}
            />
          ))}
        </div>
      </section>
    ) : null
  );
}
