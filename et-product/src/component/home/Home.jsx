import React from 'react'
import homeimage from '../image/home.jpg'
import '../home/home.css'
import Product from '../../component/product/Product'
import image1 from '../../component/image/image/beauty.jpg'
import image3 from '../../component/image/prodctimg.jpg'
// import image3 from '../../image/prodctimg.jpg'

function Home() {
  return (
   <div>
     <div className='homeimage'>
        <img src={homeimage} alt="" />
      
    </div>
     <div className="productsection  productpullup">
        <Product id="1212" title="product1" descrption="descrption1" image={image3} price={1231} rating={3}/>
        <Product id="1212" title="product1" descrption="descrption1" image={image1} price={1231} rating={3}/>
        <Product id="1212" title="product1" descrption="descrption1" image={homeimage} price={1231} rating={3}/>
        <Product id="1212" title="product1" descrption="descrption1" image={image3} price={1231} rating={3}/>
     
      </div>
          <div className="productsection">
        <Product id="1212" title="product1" descrption="descrption1" image={image3} price={1231} rating={3}/>
        <Product id="1212" title="product1" descrption="descrption1" image={image3} price={1231} rating={3}/>
        <Product id="1212" title="product1" descrption="descrption1" image={image3} price={1231} rating={3}/>
        <Product id="1212" title="product1" descrption="descrption1" image={image3} price={1231} rating={3}/>
     
      </div>
          <div className="productsection">
        <Product id="1212" title="product1" descrption="descrption1" image={image3} price={1231} rating={3}/>
        <Product id="1212" title="product1" descrption="descrption1" image={image1} price={1231} rating={3}/>
        <Product id="1212" title="product1" descrption="descrption1" image={image3} price={1231} rating={3}/>
        <Product id="1212" title="product1" descrption="descrption1" image={image3} price={1231} rating={3}/>
     
      </div>
          <div className="productsection">
        <Product id="1212" title="product1" descrption="descrption1" image={image3} price={1231} rating={3}/>
        <Product id="1212" title="product1" descrption="descrption1" image={image1} price={1231} rating={3}/>
        <Product id="1212" title="product1" descrption="descrption1" image={image3} price={1231} rating={3}/>
        <Product id="1212" title="product1" descrption="descrption1" image={image3} price={1231} rating={3}/>
     
      </div> 

   </div>
  )
}

export default Home
