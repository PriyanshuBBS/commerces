import React from "react";
import { useState } from "react";
import "./Product.scss";

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);


  const images = [
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>


      <div className="right">
        <h1>Title</h1>
        <span className="price">199</span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eveniet nostrum at in dolor. Laborum assumenda nam dolore dolores deserunt iste ipsum ratione harum dolor id ad sequi voluptas blanditiis distinctio est, consectetur commodi officia obcaecati suscipit libero! Nemo, in!</p>

        <div className="quantity">
          <button onClick={() =>
            setQuantity(prev => (prev === 1 ? 1 : prev - 1))
          }>-</button>
          {quantity}
          <button onClick={() =>
            setQuantity(prev => prev + 1)
          }>+</button>
        </div>

       <button className="add">
        ADD TO CART
       </button>
      
      <div className="link">
        <div className="item">
          ADD TO WISHLIST
        </div>

        <div className="item">
          ADD TO COMPARE
        </div>

        <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>
      </div>
    </div >
  )
}

export default Product