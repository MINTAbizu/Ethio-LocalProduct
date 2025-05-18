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
                    <li><a href="">About</a></li>
                    <li><a href="">Servicess</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">Contact</a></li>
                  
                   <Link to={'/Checkout'}>   <li><a href="">{basket.length}</a></li></Link>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Header
