import{useParams} from "react-router-dom";
import useFetch from './useFetch';
import { useState, useEffect} from "react";


const ItemDetails = () => {

    const{ id } = useParams()

    const[items,setItems]=useState([
        {name:"波士頓奶油派" , price:300 , id:1 , imageURL:"https://i.imgur.com/5JJryft.png?1"},
        {name:"巧克愛攪和" , price:310 , id:2 , imageURL:"https://i.imgur.com/5JJryft.png?1"},
        {name:"草夠了莓" , price:320 , id:3 , imageURL:"https://i.imgur.com/URBKH1h.png?1"},
    ])


    const [item, setItem] = useState(null);

    useEffect(() => {
      // 找到符合路由中 id 的項目
      const foundItem = items.find(item => String(item.id) === id);
      setItem(foundItem);
    }, [id, items]);
    
    return ( 
        <div className="item-details">
            {item &&(
                <article >
                    <h2>{item.name}</h2>
                    <h2>{item.price}</h2>
                    <img src={item.imageURL} alt={item.name} />
                </article>
            )}
        </div>
     );
}
 
export default ItemDetails;