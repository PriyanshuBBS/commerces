import React, { useEffect, useState } from 'react'
import "./FeaturedProducts.scss"
import { Card } from '../Card/Card'
import axios from "axios"
const data = [
    {
        id: 1,
        img: "https://i.ndtvimg.com/i/2017-11/rajdhani-twitter_650x400_61512047475.jpg",
        title: "Rajdhani",
        oldPrice: 220,
        price: 370,

    },
    {
        id: 2,
        img: "https://i.ndtvimg.com/i/2017-11/rajdhani-twitter_650x400_61512047475.jpg",
        title: "Rajdhani",
        oldPrice: 220,
        price: 370,
    }

];
export const FeaturedProducts = ({ type }) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:1337/api" + "/products?populate=*", 
                {
                    headers: {
                        Authorization: "bearer" + "807846f7cf9da18ab7d04fe96756c966332bfb16ea26bca37cf999401b6ff5f5fd32b670bfbfc973f0a7b1c694043225c1b4a4ed3d8599d3a65467100a8f227d6701a44d7929b3dcefc4910e10ec645834e4926473fd1d736f159bf88bda71925a44d43226fa4c4e3d3c97f6ec76aa26b47a9b6766ae34adf0a3199ef27d5649",
                    }
                });
                setData(res.data.data)
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [])

    // console.log(data);
    
    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                    lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p>
            </div>

            <div className="bottom">
                {data.map(item => (<Card item={item} key={item.id} />))}
            </div>

        </div>
    )
}
