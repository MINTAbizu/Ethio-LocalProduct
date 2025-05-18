import React from 'react'
import '../Header/hedear.css'
import { useStateValue } from '../Staateprovider/Stateprovider'
import {Link} from 'react-router-dom'
function Header() {
  const [{basket},dispacth]=useStateValue()
  //  console [{basket},dispatch]=useStateValue
  return (
    <div>
        <div className="headercontainer">
            <div className="headernavlist">
                <ul>
                 
                    {/* <li><a href=""><img src="" alt="" /></a></li> */}
                    <li><a href="">Jackets & Coats</a></li>
                    <li><a href="">Jeans</a></li>
                    <li><a href="">Dresses</a></li>
                    <li><a href="">Suits</a></li>
                    <li><a href="">Tops</a></li>
                    <li><a href="">Shirts</a></li>
                    <li><a href="">Sweatshirts & Hoodies</a></li>
                  
                   <Link to={'/Checkout'}>   <li><a href="">{basket.length}</a></li></Link>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Header
