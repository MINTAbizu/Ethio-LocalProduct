import React from 'react'
import '../product/product.css'
function CheckoutProduct({price,descrption,rating,image}) {
    const [{ basket },dispacth] = useStateValue();
  const removebasket=()=>{
    dispacth({
      type:'removebasket',
      id:id
    })

  }
  return (
    <div>
         <div className='product' >
      
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
        <img  src={image} alt="" />
      </div>
      <div className="addtocartbtn">
        <button onClick={addtobasket}>Add-to-cart</button>
      </div>
    </div>
      
    </div>
  )
}

export default CheckoutProduct

