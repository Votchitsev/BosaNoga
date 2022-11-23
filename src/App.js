import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import './App.css';
import Banner from './components/Banner/Banner';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='container'>
        <div className='row'>
          <div className='col'>
            <Banner />
          </div>
        </div>
      </main>
    </BrowserRouter>
  )
}
