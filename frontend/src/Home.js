import { useState,useEffect} from 'react';
import Cart from'./Cart';
import useFetch from './useFetch';

const Home = () => {

    const[items,setItems]=useState([
        {name:"波士頓奶油派" , price:300 , id:1 , imageURL:"https://i.imgur.com/5JJryft.png?1"},
        {name:"巧克愛攪和" , price:310 , id:2 , imageURL:"https://i.imgur.com/5JJryft.png?1"},
        {name:"草夠了莓" , price:320 , id:3 , imageURL:"https://i.imgur.com/URBKH1h.png?1"},
    ])

    const handleClick = async (name, price,imageURL,id)=>{
        const data = { name, price,imageURL,id};
        const response = await fetch('/api/menu',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }
    return (
        <div className="Home">
            <h2>Menu</h2>
            <div className="item-list">
              {items && items.map((item)=>(
                <div className='menu-item' key={item.id}>
                <h2>{item.name}</h2>
                <h2>{item.price}</h2>
                <button onClick={ () => handleClick( item.name ,item.price,item.imageURL,item.id) } >加入購物車</button> 
                <img src={item.imageURL} alt={item.name} />
                </div>
              ))}
            </div>
        </div>
      );
}
 
export default Home;