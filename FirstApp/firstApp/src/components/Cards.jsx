import React from 'react'
import "./Card.css"

const Card = (prors) => {
    return (
        <div className='card'>
            <img src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283" alt="" />
            <h1>{prors.title}</h1>
            <p>{prors.description}</p>
        </div>
    )
}

export default Card
