import React from 'react'
import '../product/product.css'
import { useStateValue } from '../Staateprovider/Stateprovider'


function Product({image,price,descrption,rating,watch,id}) {
  const [{state},dispacth]=useStateValue()

  const addtobasket=()=>{
    dispacth({
      type:'Addtobasket',
      item:{
        id:id,
       
        image:image,
        price:price,
        rating:rating,
        descrption:descrption

      }
    })

  }
  return (
    <div className='product container' >
      
      <div className="descrption">
        <p>{descrption}</p>
      </div>
      <div className="price">
       ${ price}
      </div>
      <div className="rating">
      {Array(rating)
            .fill()
            .map(()=>(
              <p>⭐</p>

            ))
            
            }
      </div>
      <div className="productimage ">
        <img className={`${watch}`} src={image} alt="" />
      </div>
      <div className="addtocartbtn">
        <button onClick={addtobasket}>Add-to-cart</button>
      </div>
    </div>
  )
}

export default Product
