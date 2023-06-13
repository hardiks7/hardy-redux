import React from 'react'

function Home(props) {
    console.warn("props",props)

    return (
        <div>
            
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-HD-170x279.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={()=>
                        {props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>Add To Cart</button>
                    <button
                    className='remove-cart-btn' 
                    onClick={()=>
                        {props.removeToCartHandler()}
                        }>Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home


