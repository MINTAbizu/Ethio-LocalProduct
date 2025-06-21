import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Placeholder ad images (replace with your own or use assets)
import ad1 from '../../component/image/image/Beauty.jpg';
import ad2 from '../../component/image/image/Kitchen.jpg';
import ad3 from '../../component/image/image/Toys.jpg';


const Advertisement = () => {
  return (
    <div style={{ maxWidth: 900, margin: '20px auto', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={4000}>
        <div style={{ position: 'relative' }}>
          <img src={ad1} alt="Beauty Sale" style={{ width: '100%', height: 220, objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 30, left: 40, color: '#fff', background: 'rgba(0,0,0,0.4)', padding: '16px 24px', borderRadius: 8 }}>
            <h2 style={{ margin: 0 }}>Big Beauty Sale!</h2>
            <p>Up to 50% off on all beauty products.</p>
            <a href="#" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 'bold' }}>Shop Now</a>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img src={ad2} alt="Kitchen Essentials" style={{ width: '100%', height: 220, objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 30, left: 40, color: '#fff', background: 'rgba(0,0,0,0.4)', padding: '16px 24px', borderRadius: 8 }}>
            <h2 style={{ margin: 0 }}>Kitchen Essentials</h2>
            <p>Discover the best deals for your home.</p>
            <a href="#" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 'bold' }}>Explore</a>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img src={ad3} alt="Toys & Games" style={{ width: '100%', height: 220, objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 30, left: 40, color: '#fff', background: 'rgba(0,0,0,0.4)', padding: '16px 24px', borderRadius: 8 }}>
            <h2 style={{ margin: 0 }}>Toys & Games</h2>
            <p>Fun for all ages. New arrivals in stock!</p>
            <a href="#" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 'bold' }}>See More</a>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Advertisement; 