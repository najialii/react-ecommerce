import { div } from "framer-motion/client";

const Cart = ({ cartItems }) => {

    console.log(cartItems)
    return (
      <>
      
      
      <h2>Cart</h2>
      {cartItems&&cartItems.map((item, index)=>{
        return <div  onClick={()=>{ console.log( item.id);}}>
        <div key={index} >
            <p>{item.attributes.name}</p>
        </div>
        <div>
            
        </div>
            

            

        </div>
      })}
      </>
    );
  };
  
  export default Cart;
  