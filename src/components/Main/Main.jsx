import React from 'react';
import PropTypes from 'prop-types';

export default function Main({ children }) {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          { children }
        </div>
      </div>
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
