import React from 'react'

const Buy = ({properties}) => {
  return (
    <div>Buy
    {properties.map((product)=>{
        return(
            <div key={product.id}>
                <h1>{product.title}</h1>
            </div>
        )
    })}</div>
  )
}

export default Buy