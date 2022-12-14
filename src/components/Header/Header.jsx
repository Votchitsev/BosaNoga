import React, { useState, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import headerLogo from './img/header-logo.png';
import './Header.css';
import { setSearchValue, addCatalogSearchFormFillText } from '../../reduxStore/slices/searchSlice';

function Header() {
  const [searchIsAvailable, setSearchIsAvailable] = useState(false);
  const navigate = useNavigate();

  const searchValue = useRef();

  const dispatch = useDispatch();

  const itemsInCart = useSelector((state) => state.cart.cart).length;

  const searchOnClickHandler = () => {
    setSearchIsAvailable(true);
  };

  const searchOnSubmitHandler = (e) => {
    e.preventDefault();

    navigate('/catalog');

    dispatch(
      setSearchValue(searchValue.current.value),
    );

    dispatch(
      addCatalogSearchFormFillText(searchValue.current.value),
    );

    searchValue.current.value = '';

    setSearchIsAvailable(false);
  };

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              <img src={headerLogo} alt="Bosa Noga" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Главная</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/catalog">Каталог</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">О магазине</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contacts">Контакты</NavLink>
                </li>
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div data-id="search-expander" className="header-controls-pic header-controls-search" tabIndex="0" role="button" onKeyUp={() => {}} onClick={searchOnClickHandler} label="search" />
                  {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                  <NavLink to="/cart" className="header-controls-pic header-controls-cart">
                    { itemsInCart ? <div className="header-controls-cart-full">{itemsInCart}</div> : null }
                    <div className="header-controls-cart-menu" />
                  </NavLink>
                </div>
                <form
                  data-id="search-form"
                  className={`header-controls-search-form form-inline ${searchIsAvailable ? '' : 'invisible'}`}
                  onSubmit={searchOnSubmitHandler}
                >
                  <input className="form-control" placeholder="Поиск" ref={searchValue} />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
