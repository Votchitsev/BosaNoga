import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { del } from '../../reduxStore/slices/cartSlice';

export default function Cart() {
  const style = {
    maxWidth: '30rem',
    margin: '0 auto',
  };

  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

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
              <tr key={item.product.id} id={item.product.id}>
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
          <form className="card-body">
            <div className="form-group">
              <label htmlFor="phone">
                Телефон
                <input className="form-control" id="phone" placeholder="Ваш телефон" />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="address">
                Адрес доставки
                <input className="form-control" id="address" placeholder="Адрес доставки" />
              </label>
            </div>
            <div className="form-group form-check">
              <label className="form-check-label" htmlFor="agreement">
                <input type="checkbox" className="form-check-input" id="agreement" />
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
