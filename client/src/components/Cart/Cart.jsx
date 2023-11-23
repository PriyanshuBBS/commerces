import React from 'react'
import "./Cart.scss";

export const Cart = () => {
    const data = [
        {
            id:4,
            img: "https://st.indiarailinfo.com/kjfdsuiemjvcya22/0/5/4/7/4559547/0/img202001150929155884179.jpg",
            title: "ICF",
            desc:"ajdmcn dnjcnkkdknc",
            oldPrice: 410,
            price:750,
        },
        {
            id:1,
            img: "https://i.ndtvimg.com/i/2017-11/rajdhani-twitter_650x400_61512047475.jpg",
            title: "Rajdhani",
            desc:"ajdmcn dnjcnkkdknc",
            oldPrice: 220,
            price:370,
    
        }
    ]
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">1x${item.price}</div>
                </div>
                <span className='delete'>DEL</span>
            </div>
        ))}
    <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
    </div>
    <button>PROCEED TO CHECKOUT</button>
    <span className='reset'>Reset Cart</span>
    </div>
  )
}
