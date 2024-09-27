// import React, { useContext, useState } from 'react';
// import { CartContext } from './CartContext'; // Assuming a CartContext provider

// const AddToCartButton = ({ product }) => {
//   const { addToCart } = useContext(CartContext);

//   const handleAddToCart = async () => {
//     try {
//       // Use Strapi API to add product to the cart
//       const response = await addToCart(product);
//       // Handle success or failure based on response
//       if (response.status === 200) {
//         console.log('Product added to cart successfully');
//       } else {
//         console.error('Error adding product to cart:', response.data);
//       }
//     } catch (error) {
//       console.error('Error adding product to cart:', error);
//     }
//   };

//   return (
//     <button
//       type="button"
//       className="flex items-center justify-center w-5 h-5 bg-blue-300 outline-none rounded-full"
//       onClick={handleAddToCart}
//     >
//       {/* ... Plus button icon or other visual indicator ... */}
//     </button>
//   );
// };

// export default AddToCartButton;