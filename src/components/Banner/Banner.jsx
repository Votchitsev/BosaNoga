import React from 'react';

import './Banner.css';
import BannerImg from './img/banner.jpg';

export default function Banner() {
  return (
    <div className="banner">
      <img src={BannerImg} className="img-fluid" alt="К весне готовы!" />
      <h2 className="banner-header">К весне готовы!</h2>
    </div>
  );
}
