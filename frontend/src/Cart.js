import { useState, useEffect} from "react";
import useFetch from './useFetch';
import { Link } from "react-router-dom"
import Check from './Check';

const Cart = () => {

    const [cartItems, setCartItems] = useState(null);
    const [total,setTotal] = useState(0)
    
    
    useEffect(()=>{
        const fetchMenus = async()=>{
            const response = await fetch('/api/menu')
            const json = await response.json()
            if (response.ok) {
                setCartItems(json)
            }
        }
        fetchMenus()
    },[cartItems])


    const handleDelete = async (idToDelete)=>{
          const response = await fetch('/api/menu/'+ idToDelete,{
            method:'DELETE'
          })
          const json = await response.json()
          setCartItems(json);
   }

      useEffect(()=>{
        const calculateTotalPrice = () => {
        let totalPrice = 0;
        if (cartItems && cartItems.length > 0) {
            cartItems.forEach(item => {
                totalPrice += item.price;
            });
        }
        return totalPrice;
        };
        const totalCartPrice = calculateTotalPrice(); 
        setTotal(totalCartPrice); 
    },[cartItems]);


    return (
        <aside>
            <h2>購物車</h2> 
            <div className="cart-list"></div>
                {cartItems && cartItems.length >0 &&cartItems.map(item =>(
                    <div className='cart-item'>
                        <Link to={`/items/${item.id}`}>
                        <h3>{item.name}</h3>
                        <h3>{item.price}</h3>
                        </Link>
                        <button onClick={()=> handleDelete(String(item._id))}>delete</button> 
                    </div>
                ))}
            <div/>
            <p>總價: { total }</p>
        </aside>
     );
}
 
export default Cart;