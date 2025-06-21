import React from 'react'
import { topsData } from './Topsdata'
import TopsCard from './TopsCard'
function Tops() {
  return (
    <div>
         <div className="container-fluid productsection dresscard">
            <div className="row">
                {topsData.map((jeans) => (
                    <div key={jeans.id} className="col-md-3 col-sm-6 mb-4">
                        <TopsCard {...jeans} />
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Tops
