import {useEffect, useState } from "react"
import { useRef } from "react";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";


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
import ImageZoom from "react-image-zooom";


const Magnifier = () => {

    const [text, setText] = useState('Breaking News: Major Announcement from the President');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScrollPosition((prevPosition) => prevPosition + 1);
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef(); // Define initialRef

    
  
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);

    const [cartItems, setCartItems] = useState([]);

    const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };
    console.log(id)

    useEffect(()=>{

        getData()
        
      }, [id])
      const[data,setData] = useState(null)
        async function getData() {
        
          
            const url = `http://localhost:1337/api/posts/${id}?populate=*`;
          
            
            try {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }
          
              const json = await response.json();
              console.log(json);
              setData(json.data)
              function sizeSelector(data){
                const [selectsize,setSelectSize] = useState(null)
            
                const handelClickedSize =(size) =>{
                  setSelectSize(size)
            
                }
                
              }
    
            } catch (error) {
              console.error(error.message);
            }
          }
    const thuurl ="/uploads/thumbnail_35043_9_a08048bad9.JPG"

    return (  


        
      <div className="flex justify-center items-center overflow-auto">

      {/* Your avatar button */}
      <Button onClick={onOpen}><FaRegUser /> here</Button>

      <Modal 
       isOpen={isOpen} onClose={onClose}>
        <ModalOverlay className="bg-gray-900 bg-opacity-50     " />
        <ModalContent className="overflow-y-scroll"
        bg="white"
        borderRadius="md"
        p={30}
        shadow="md"
        maxWidth="600px"
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

          <div className="flex flex-cols justify-end ">

          <ModalCloseButton className=" ml-32 bg-red-300 w-12  h-10 " /> {/* Corrected closing tag */}
          </div>
          <ModalHeader className="text-xl my-10 font-semibold  mt-0">Welcome , sign in or Create new account</ModalHeader>
          <ModalBody  pb={6}>
          <div key={index} class="thumbnail-container  w-full">
            
            <img
              key={index}
              src={urlimg.concat(image.attributes.formats.medium.url)}
              alt={`Thumbnail ${index}`}
              className="  cursor-zoom-in hover:border-gray-900 h-full w-full border border-gray-200
     ${index === selectedImage ? 'border-gray-800' : ''} "
            
            />
             <span><MyModal /></span>   
          </div>
          </ModalBody >

          <ModalFooter>
              <div className="my-10">


                  
            <Button className="w-full text-white bg-red-400
     hover:bg-pink-700 focus:ring-4 focus:outline-none 
     focus:ring-pink-300 font-medium rounded-lg text-sm
      px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700
       dark:focus:ring-pink-800  " colorScheme="blue" mr={10} width={100}   
 onClick={onClose}>
              Login
            </Button>

            <Button    onClick={onClose} className="w-full text-white bg-red-400
     hover:bg-red-700 focus:ring-4 focus:outline-none 
     focus:ring-red-300 font-medium rounded-lg text-sm
      px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-red-700
       dark:focus:ring-pink-800" colorScheme="blue" mr={10} width={100} >
          <Link to='/register'>signup</Link></Button>

          

     </div>
     
          </ModalFooter>
          <p class="text-sm ml-64 font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <a href="#" class="font-medium text-pink-600 hover:underline dark:text-pink-500">Login here</a>
                </p>
        </ModalContent>
      </Modal>   
    </div>

    );
}
 
export default Magnifier;