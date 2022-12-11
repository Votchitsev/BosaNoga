/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import request from '../../api/request';
import makeSrcSet from '../../services/makeSrcSet';
import { add } from '../../reduxStore/slices/cartSlice';
import Loader from '../Loader/Loader';

export default function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(1);
  const [choosenSize, setChoosenSize] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const f = () => {
      request(`/api/items/${id}`, 'GET')
        .then((response) => response.json())
        .then((json) => {
          setProduct(json);
          setLoaded(true);
        }).catch((error) => {
          alert(error);
          f();
        });
    };
    f();
  }, [id]);

  const subOnClickHandler = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const addOnClickHandler = () => {
    if (amount < 10) {
      setAmount(amount + 1);
    }
  };

  const sizeOnClickHandler = (e) => {
    if (e.target.textContent !== choosenSize) {
      setChoosenSize(e.target.textContent);
    } else {
      setChoosenSize(null);
    }
  };

  const sizesAvailable = () => product.sizes.filter((size) => size.avalible === true).length > 0;

  const addProductToCartHandler = () => {
    if (choosenSize) {
      dispatch(
        add({
          product,
          amount,
          size: choosenSize,
        }),
      );

      navigate('/cart');
    }
  };

  return (
    <section className="catalog-item">
      { loaded ? (
        <>
          <h2 className="text-center">{product.title}</h2>
          <div className="row">
            <div className="col-5">
              {product.images ? <img srcSet={makeSrcSet(product.images)} className="img-fluid" alt="proguct" /> : ''}
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
                  {product.sizes ? product.sizes.map(
                    (size) => (size.avalible ? <span className={`catalog-item-size ${size.size === choosenSize ? 'selected' : null}`} key={size.size} tabIndex={0} role="button" onKeyUp={() => { }} onClick={sizeOnClickHandler}>{size.size}</span> : null),
                  ) : null}
                </p>
                {sizesAvailable ? (
                  <p>
                    Количество:
                    <span className="btn-group btn-group-sm pl-2">
                      <button className="btn btn-secondary" type="button" onClick={subOnClickHandler}>-</button>
                      <span className="btn btn-outline-primary">{amount}</span>
                      <button className="btn btn-secondary" type="button" onClick={addOnClickHandler}>+</button>
                    </span>
                  </p>
                ) : null}
              </div>
              {sizesAvailable ? <button className="btn btn-danger btn-block btn-lg" type="button" onClick={addProductToCartHandler}>В корзину</button> : null}
            </div>
          </div>
        </>
      ) : <Loader /> }
    </section>
  );
}
