import React from 'react'
import {Card} from "../Card/Card"
import "./List.scss"

export const List = () => {

    const data = [
        {
            id:1,
            img: "https://i.ndtvimg.com/i/2017-11/rajdhani-twitter_650x400_61512047475.jpg",
            title: "Rajdhani",
            oldPrice: 220,
            price:370,
    
        },
        {
            id:2,
            img: "https://c.ndtvimg.com/2019-01/oppest6o_duranto-express_625x300_17_January_19.jpg",
            title: "Duronto",
            oldPrice: 150,
            price:750,
        },
        {
            id:3,
            img: "https://upload.wikimedia.org/wikipedia/commons/8/85/Maharashtra_Sampark_Kranti_Express_2023.jpg",
            title: "Sampark",
            oldPrice: 520,
            price:470,
        },

        {
            id:4,
            img: "https://st.indiarailinfo.com/kjfdsuiemjvcya22/0/5/4/7/4559547/0/img202001150929155884179.jpg",
            title: "ICF",
            oldPrice: 410,
            price:750,
        }
    
    ];
  return (
    <div className='list'>
        {data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  )
}


