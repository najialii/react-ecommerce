
      import { useEffect, useState } from "react"
      import { useRef } from "react";
      import { useCart } from "react-use-cart";
      import { FaRegUser } from "react-icons/fa";
      import { Link } from "react-router-dom";
      import { CiSquareMinus } from "react-icons/ci";
      import { CiSquarePlus } from "react-icons/ci";
      import { RiDeleteBin6Line } from "react-icons/ri";
      import { SlBag } from "react-icons/sl";
      import { TiShoppingCart } from "react-icons/ti";
      import { useNavigate } from "react-router-dom";
      import {
          Modal,
          ModalOverlay,
          ModalContent,
          ModalHeader,
          ModalCloseButton,
          ModalBody,
          ModalFooter,
          Button,
          useDisclosure,
          FormControl,
          FormLabel,   
          Box,
          HStack,
          VStack,
          Input,
        } from "@chakra-ui/react";
        import { ToastContainer, toast } from 'react-toastify';
      import 'react-toastify/dist/ReactToastify.css';
      

        
        function CartModal() {
          
          const { isOpen, onOpen, onClose } = useDisclosure();
          const initialRef = useRef(0);
        //   useEffect(()=>{

        //  onOpen
            
        //   }, [items.id])
          
          const {
            isEmpty,
            totalUniqueItems,
            items,
            updateItemQuantity,
            removeItem,
          } = useCart();
          // if (isEmpty) return <p>n</p>;
          const { clearCartMetadata } = useCart();
          const { cartTotal } = useCart();
          
          return (
            <>

            <div className="flex justify-center items-center overflow-auto">

              {/* Your avatar button */}
              <Button className="text-xl" onClick={onOpen}><SlBag /></Button>
        
              <Modal 
              isOpen={isOpen} onClose={onClose}>
                <ModalOverlay className="bg-gray-900 bg-opacity-50" />
                <ModalContent className="overflow-y-scroll"
                bg="#f5fbf1"
                borderRadius="md"
                p={30}
                shadow="md"
                maxWidth="500px"
                maxHeight={1200}
                margin="auto"
                position="fixed"
                right="50px" // Position the modal to the right of the screen
                top="50px" 
                bottom="50px"
                left={"50px"}
                
                >
                        {/* <div className="bg-red-500 text-white px-4 py-2 flex items-center justify-between">
            <span className="text-lg font-bold animate-slide-right"> Join Now Enjoy Our Exclusive Offers</span>
          </div> */}

                          <div className="flex flex-cols justify-end bg-secondry">
                            

                  </div>
                  <ModalHeader className="text-xl my-6 font-semibold  mt-0">
                    <div className="container flex justify-between items-center">
                      <h1 className="  gap-3  flex items-center font-bold">
                    <span className="text-2xl text-text"> Shopping Cart ({totalUniqueItems}) </span>
                      <span className="text-primary text-3xl">
                          </span>  </h1>
                      

                  <ModalCloseButton className=" ml-32  w-12 mt-0  h-10 " />
                    </div>
                    </ModalHeader>
          
                  <ModalBody  pb={3}>
                
                 
       {isEmpty ? (
        
        <div className="grid grid-cols-1 grid-rows-2 justify-center items-center my-0">

          <div className="flex justify-center items-center mt-0 ">

        <svg fill="#646daa" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="100%" height="800px" viewBox="0 0 462.035 462.035"
	 xml:space="preserve">
<g>
	<path d="M457.83,158.441c-0.021-0.028-0.033-0.058-0.057-0.087l-50.184-62.48c-0.564-0.701-1.201-1.305-1.879-1.845
		c-2.16-2.562-5.355-4.225-8.967-4.225H65.292c-3.615,0-6.804,1.661-8.965,4.225c-0.678,0.54-1.316,1.138-1.885,1.845l-50.178,62.48
		c-0.023,0.029-0.034,0.059-0.057,0.087C1.655,160.602,0,163.787,0,167.39v193.07c0,6.5,5.27,11.771,11.77,11.771h438.496
		c6.5,0,11.77-5.271,11.77-11.771V167.39C462.037,163.787,460.381,160.602,457.83,158.441z M408.516,134.615l16.873,21.005h-16.873
		V134.615z M384.975,113.345v42.274H296.84c-2.514,0-4.955,0.805-6.979,2.293l-58.837,43.299l-58.849-43.305
		c-2.023-1.482-4.466-2.287-6.978-2.287H77.061v-42.274H384.975z M53.523,155.62H36.65l16.873-21.005V155.62z M438.498,348.69H23.54
		V179.16h137.796l62.711,46.148c4.15,3.046,9.805,3.052,13.954-0.005l62.698-46.144h137.799V348.69L438.498,348.69z"/>
</g>
</svg>
    </div>
<div className="flex justify-center items-center mt-0">

<p className="font-bold text-text">Your cart is empty.</p>
</div>
        </div>
        ) : (
      <ul className="w-full">
        {items.map((item) => (
          
          <li className="grid md:grid-cols-6 gap-8 mt-16 my-10" key={item.id}>
            {/* <img src={image} alt="" srcset="" /> */}


            <div class="w-18 mt-0 h-18 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
              {/* {item.image} */}
              

                            </div>
           <h1 className="truncate text-clip text-sm">{item.name}</h1>
<span className="text-base font-bold text-gray-800 mr-4">{item.price}</span>
            <div className="flex justify-between gap-3 ">

            <button className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
              onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}
              >
              -
            </button>
            {item.quantity} 
            <button className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
              onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}
              >
              +
            </button>
            
            </div>
           
            <button className="text-xs text-red-500 cursor-pointer mt-0.5 border w-6 h-6 
               flex items-center justify-center bg-red-200 ml-20"
               onClick={() => removeItem(item.id)}> <RiDeleteBin6Line /></button>
          </li>

        ))}
      </ul>
      )}



                            
                        
      
                  </ModalBody >
                        
                  <ModalFooter>

                
                    
            
                  </ModalFooter>
                
                  {isEmpty ? (
          <></>
        ) : (      
      <div class="bottom-0 px-4 py-3 bg-gray-200 w-full">
            <div class="flex justify-between items-center">
                <span class="font-bold text-lg">Total:</span>
                <span class="font-bold text-lg">{cartTotal}</span>
            </div>
            <button onClick={() => navigate('/checkout')}
            className="block sticky bottom-0 w-full mt-4 bg-primary hover:bg-primary-900 text-white font-bold py-2 px-4 rounded">
                Checkout 
            </button>
        </div>
              )}
                </ModalContent>
                
              </Modal>   
            </div>
        
            </>
          );
        }
        
        export default CartModal;

