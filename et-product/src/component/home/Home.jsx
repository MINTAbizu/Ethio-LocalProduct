import React from 'react';
import homeimage from '../image/home.jpg';
import '../home/home.css';
import Product from '../../component/product/Product';
import image1 from '../../component/image/image/beauty.jpg';
import image3 from '../../component/image/prodctimg.jpg';

function Home() {
  return (
    <div>
      <div className='homeimage'>
        <img src={homeimage} alt="" className="img-fluid" />
      </div>
      <div className="container-fluid productsection">
        <div className="row">
          {/* <div className="col-md-3">
            <Product id="1212" description="Description 1" image={image3} price={1231} rating={3}/>
          </div> */}
          <div className="col-md-4">
            <Product id="1212" description="Description 2" image={image1} price={1231} rating={3}/>
          </div>
          <div className="col-md-4">
            <Product id="1212" description="Description 3" image={homeimage} price={1231} rating={3}/>
          </div>
          <div className="col-md-4">
            <Product id="1212" description="Description 4" image={image3} price={1231} rating={3}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;