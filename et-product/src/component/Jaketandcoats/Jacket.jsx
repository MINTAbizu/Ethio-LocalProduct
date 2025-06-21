import React from 'react'
import { jacketData } from '../Jaketandcoats/JaketData'
// import jacketCard from './JackeCard'
import JackeCard from './JackeCard'

function Jacket() {
  return (
    <div>
       <div className="container-fluid productsection dresscard">
            <div className="row">
                {jacketData.map((jeans) => (
                    <div key={jeans.id} className="col-md-3 col-sm-6 mb-4">
                        <JackeCard {...jeans} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Jacket
