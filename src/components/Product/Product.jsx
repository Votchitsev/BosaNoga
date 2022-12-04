import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import request from '../../api/request';
import makeSrcSet from '../../serices/makeSrcSet';

export default function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    request(`/api/items/${id}`, 'GET')
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, [id]);

  return (
    <section className="catalog-item">
      <h2 className="text-center">{product.title}</h2>
      <div className="row">
        <div className="col-5">
          { product.images ? <img srcSet={makeSrcSet(product.images)} className="img-fluid" alt="proguct" /> : null }
        </div>
        <div className="col-7">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{product.sku}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{product.manufacturer}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{product.color}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{product.material}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{product.season}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{product.reason}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <p>
              Размеры в наличии:
              { product.sizes ? product.sizes.map((size) => (size.avalible ? <span className="catalog-item-size">{size.size}</span> : null)) : null }
            </p>
            <p>
              Количество:
              <span className="btn-group btn-group-sm pl-2">
                <button className="btn btn-secondary" type="button">-</button>
                <span className="btn btn-outline-primary">1</span>
                <button className="btn btn-secondary" type="button">+</button>
              </span>
            </p>
          </div>
          <button className="btn btn-danger btn-block btn-lg" type="button">В корзину</button>
        </div>
      </div>
    </section>
  );
}

// Product.propTypes = {
//   id: PropTypes.number.isRequired,
// };
