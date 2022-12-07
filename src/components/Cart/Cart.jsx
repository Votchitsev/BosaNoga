import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import request from '../../api/request';
import { addDataToStorage as updateStorage } from '../../localStorage/localStorage';
import { del, reset } from '../../reduxStore/slices/cartSlice';

export default function Cart() {
  const style = {
    maxWidth: '30rem',
    margin: '0 auto',
  };

  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  const phone = useRef();
  const address = useRef();
  const agreement = useRef();

  const navigate = useNavigate();

  const calculateTotalSum = () => {
    const result = cart.reduce((previousValue, currentValue) => {
      let previous = previousValue;
      previous += (currentValue.amount * currentValue.product.price);
      return previous;
    }, 0);

    return result;
  };

  const deleteHandler = (e) => {
    dispatch(
      del(e.target.closest('tr').id),
    );
  };

  const sendOrder = (e) => {
    e.preventDefault();

    if (agreement.current.checked && cart.length) {
      request('/api/order', 'POST', null, {
        owner: {
          phone: phone.current.value,
          address: address.current.value,
        },
        items: cart.map((item) => {
          const result = {
            id: item.product.id,
            price: item.product.price,
            count: item.amount,
          };

          return result;
        }),
      })
        .then((response) => {
          if (response.ok) {
            dispatch(
              reset(),
            );
            updateStorage(null);
            // eslint-disable-next-line no-alert
            alert('Заказ успешно оформлен');
            phone.current.value = '';
            address.current.value = '';
            agreement.current.checked = false;
            navigate('/');
          }
        });
    }
  };

  return (
    <>
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Размер</th>
              <th scope="col">Кол-во</th>
              <th scope="col">Стоимость</th>
              <th scope="col">Итого</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>
          <tbody>
            { cart.map((item) => (
              <tr key={item.product.id + item.size} id={item.product.id}>
                <td>1</td>
                <td><a href="/products/1.html">{item.product.title}</a></td>
                <td>{item.size}</td>
                <td>{item.amount}</td>
                <td>{item.product.price}</td>
                <td>{`${item.amount * item.product.price} руб.`}</td>
                <td><button className="btn btn-outline-danger btn-sm" type="submit" onClick={deleteHandler}>Удалить</button></td>
              </tr>
            ))}
            <tr>
              <td colSpan="5" className="text-right">Общая стоимость</td>
              <td>{ `${calculateTotalSum()} руб.` }</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        <div className="card" style={style}>
          <form className="card-body" onSubmit={sendOrder}>
            <div className="form-group">
              <label htmlFor="phone">
                Телефон
                <input className="form-control" id="phone" placeholder="Ваш телефон" ref={phone} />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="address">
                Адрес доставки
                <input className="form-control" id="address" placeholder="Адрес доставки" ref={address} />
              </label>
            </div>
            <div className="form-group form-check">
              <label className="form-check-label" htmlFor="agreement">
                <input type="checkbox" className="form-check-input" id="agreement" ref={agreement} />
                Согласен с правилами доставки
              </label>
            </div>
            <button type="submit" className="btn btn-outline-secondary">Оформить</button>
          </form>
        </div>
      </section>
    </>
  );
}
