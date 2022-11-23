import { Link } from 'react-router-dom';

import headerLogo from './img/header-logo.png'

function Header() {
    return(
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" href="/">
            <img src={ headerLogo } alt="Bosa Noga" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" href="/">Главная</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/catalog.html">Каталог</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about.html">О магазине</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contacts.html">Контакты</a>
                </li>
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                  {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                  <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                  <input className="form-control" placeholder="Поиск" />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    )
}

export default Header;
