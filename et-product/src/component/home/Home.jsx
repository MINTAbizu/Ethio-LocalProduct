import React, { useState } from 'react';
import homeimage from '../image/home.jpg';
import '../home/home.css';
import Product from '../../component/product/Product';
import image1 from '../../component/image/image/Beauty.jpg';
import image3 from '../../component/image/prodctimg.jpg';
import image4 from '../../assets/image.png'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import Advertisement from '../Advertisement/Advertisement';

function Home() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div>
      {/* Advertisement section above carousel */}
      {/* <Advertisement /> */}
      {/* Main Content */}
      <h6>Your trusted marketplace for local Ethiopian products. Shop local, support local!</h6>
      <div className='homeimage'>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
          <p className="legend text-align-center">Welcome to Ethio Local Product</p>
            <img src={homeimage} alt="Home Slide 1" className="img-fluid" />
         
          </div>
          <div>
            <img src={image4} alt="Home Slide 2" className="img-fluid" />
            <p className="legend">Discover Beauty Products</p>
          </div>
          <div>
            <img src={image3} alt="Home Slide 3" className="img-fluid" />
            <p className="legend">Shop the Latest Trends</p>
          </div>
        </Carousel>
      </div>

      <div className="container-fluid productsection">
        <div className="row">
          <div className="col-md-3">
            <Product id="1" description="Description 2" image={image4} price={1231} rating={3}/>
          </div>
          <div className="col-md-3">
            <Product id="2" description="Description 3" image={homeimage} price={1231} rating={3}/>
          </div>
          <div className="col-md-3">
            <Product id="3" description="Description 4" image={image3} price={1231} rating={3}/>
          </div>
          <div className="col-md-3">
            <Product id="4" description="Description 5" image={image1} price={1231} rating={3}/>
          </div>
        </div>
      </div>
      <div className="container-fluid productsection">
        <div className="row">
          <div className="col-md-3">
            <Product id="5" description="Description 2" image={image1} price={1231} rating={3}/>
          </div>
          <div className="col-md-3">
            <Product id="6" description="Description 3" image={homeimage} price={1231} rating={3}/>
          </div>
          <div className="col-md-3">
            <Product id="7" description="Description 4" image={image3} price={1231} rating={3}/>
          </div>
          <div className="col-md-3">
            <Product id="8" description="Description 5" image={image1} price={1231} rating={3}/>
          </div>
        </div>
      </div>
      <div className="container-fluid productsection">
        <div className="row">
          <div className="col-md-3">
            <Product id="9" description="Description 2" image={image1} price={1231} rating={3}/>
          </div>
          <div className="col-md-3">
            <Product id="10" description="Description 3" image={homeimage} price={1231} rating={3}/>
          </div>
          <div className="col-md-3">
            <Product id="11" description="Description 4" image={image3} price={1231} rating={3}/>
          </div>
          <div className="col-md-3">
            <Product id="12" description="Description 5" image={image1} price={1231} rating={3}/>
          </div>
        </div>
      </div>
      <div className="container-fluid productsection">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <Product id="13" description="Description 2" image={image1} price={1231} rating={3}/>
          </div>
          <div className="col-md-3">
            <Product id="14" description="Description 3" image={homeimage} price={1231} rating={3}/>
          </div>
          <div className="col-md-3">
            <Product id="15" description="Description 4" image={image3} price={1231} rating={3}/>
          </div>
          <div className="col-md-3">
            <Product id="16" description="Description 5" image={image1} price={1231} rating={3}/>
          </div>
        </div>
      </div>
      <div className="container-fluid productsection">
        <div className="row">
          <div className="col-md-3">
            <Product id="17" description="Description 2" image={image1} price={1231} rating={3}/>
          </div>
          <div className="col-md-3">
            <Product id="18" description="Description 3" image={homeimage} price={1231} rating={3}/>
          </div>
          <div className="col-md-3">
            <Product id="19" description="Description 4" image={image3} price={1231} rating={3}/>
          </div>
          <div className="col-md-3">
            <Product id="20" description="Description 5" image={image1} price={1231} rating={3}/>
          </div>
        </div>
      </div>
      <div className="container-fluid productsection">
        <div className="row">
          <div className="col-md-3">
            <Product id="21" description="Description 2" image={image1} price={1231} rating={3}/>
          </div>
          <div className="col-md-3">
            <Product id="22" description="Description 3" image={homeimage} price={1231} rating={3}/>
          </div>
          <div className="col-md-3">
            <Product id="23" description="Description 4" image={image3} price={1231} rating={3}/>
          </div>
          <div className="col-md-3">
            <Product id="24" description="Description 5" image={image1} price={1231} rating={3}/>
          </div>
        </div>
      </div>
      {/* Bottom Menu */}
      <div style={{
        width: '100%',
        background: '#f8f9fa',
        padding: '10px 0',
        position: 'fixed',
        left: 0,
        bottom: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        borderTop: '1px solid #ddd'
      }}>
        <div style={{ display: 'flex', gap: '40px' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => handleDropdown('clothing')}>
              Clothing {openDropdown === 'clothing' ? '▲' : '▼'}
            </div>
            {openDropdown === 'clothing' && (
              <ul style={{
                listStyle: 'none',
                padding: '10px 20px',
                margin: 0,
                position: 'absolute',
                bottom: '40px',
                left: 0,
                background: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                borderRadius: '4px',
                zIndex: 1001
              }}>
                <li>Dresses</li>
                <li>Jackets & Coats</li>
                <li>Jeans</li>
                <li>Tops</li>
              </ul>
            )}
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => handleDropdown('beauty')}>
              Beauty {openDropdown === 'beauty' ? '▲' : '▼'}
            </div>
            {openDropdown === 'beauty' && (
              <ul style={{
                listStyle: 'none',
                padding: '10px 20px',
                margin: 0,
                position: 'absolute',
                bottom: '40px',
                left: 0,
                background: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                borderRadius: '4px',
                zIndex: 1001
              }}>
                <li>Makeup</li>
                <li>Skincare</li>
                <li>Fragrance</li>
              </ul>
            )}
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => handleDropdown('electronics')}>
              Electronics {openDropdown === 'electronics' ? '▲' : '▼'}
            </div>
            {openDropdown === 'electronics' && (
              <ul style={{
                listStyle: 'none',
                padding: '10px 20px',
                margin: 0,
                position: 'absolute',
                bottom: '40px',
                left: 0,
                background: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                borderRadius: '4px',
                zIndex: 1001
              }}>
                <li>Gaming</li>
                <li>Kitchen</li>
                <li>Toys</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;