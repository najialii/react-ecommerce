import { useState,useEffect,CSSProperties  } from "react";
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { CartProvider, useCart } from "react-use-cart";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ClipLoader from "react-spinners/ClipLoader";




// import ImageZoom from 'https://cdn.skypack.dev/react-image-zooom@~1.1.0';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

    
const Ppage = () => {
    const [open, setOpen] = useState(false);
  //sizeSelector 

  
 
  
    const { id } = useParams();
    const [selectedImage,   setSelectedImage] = useState(0);

    const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
    } = useCart();
    const { addItem } = useCart();

        const handleAddToCart = (product) => {
            const existingItem = cartItems.find((item) => item.id === product.id);
            if (existingItem)   
           {
              // If the product exists, update its quantity using updateQuantity
              updateQuantity(existingItem.id, existingItem.quantity + 1);
              toast.info('Item quantity updated in cart!', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnFocusLoss: false,
                draggable: true,
                progress: undefined,
              });
            } else {
              // If the product doesn't exist, add it to the cart
              addToCart(product);
              toast.success('Added to cart!', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnFocusLoss: false,
                draggable: true,
                progress: undefined,
              });
            }
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
          // c1642cc84ddf0abd51955edf50ea1da42fa6a433fd29927017b3b53509d29ffe1c09bb306802d73ab7d348c6c603977d9dec1af66208f767674d43d913506934e455eb192df64a401d835b56ce3d7e890ce21ef86a0a0aca63782461227d900ff05ff8877e30746085bc14328f54e0f60608b93f879e1786dcfefa22a6e470a1
         
           const urlimg = "http://localhost:1337"
           const handleThumbnailClick = (index) => {
            setSelectedImage(index);
          };
          const thuurl ="/uploads/thumbnail_35043_9_a08048bad9.JPG"

            
  const product = {
    image: data?.attributes?.image?.data?.[0]?.attributes?.formats?.medium?.url,  
     id: data && data.id,
    name: data && data.attributes.name,
    price: data && data.attributes.price,
  };
  const firstImageUrl = data?.attributes?.image?.data?.[0]?.attributes?.formats?.medium?.url;
    
    return (
      <>

 <div className="font-sans z-{-1} bg-backgroudcrl my-10">
            <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                <div className="grid items-center grid-cols-3 lg:grid-cols-5 gap-2 p-2">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div className="mt-0  lg:max-w-6xl max-w-2xl max-lg:mx-auto w-full  ">
                            <div className=" w-full grid grid-cols-2 ml-20
                            rounded-lg  gap-3 cursor-pointer">
                            <div class=" lg:max-w-6xl max-w-2xl max-lg:mx-auto">
                            <div class="">
                    <div class="w-full lg:sticky top-0 text-center">
                        <div class=" lg:width-[500px]">
                        {data?.attributes?.image?.data?.map((image, index) => (     

index === 0 && (
  <img
    key={index}
    src={urlimg.concat(image.attributes.formats.medium.url)}
    alt={`pp`}
    className="lg:w-full w-full mb-2 rounded-md object-cover object-top"
    // onClick={() => setOpen(true)}
  />
)
))}                        </div>

                        <div class="flex flex-wrap gap-4 justify-center mx-auto ">
                           
                        {data?.attributes?.image?.data?.map((image, index) => (
        
         

        <img
          key={index}
          src={urlimg.concat(image.attributes.formats.thumbnail.url)}
          alt={`Thumbnail ${index}`}
          className=" w-20 cursor-pointer  "
          onClick={() => handleThumbnailClick(index)}
          //   onClick={() => setOpen(true)}
          />
         
  
    ))}
                        </div>
                    </div>

</div>
</div>
                            </div>
                        </div>
                    </div>
        




                    <div className="flex flex-wrap items-start gap-4 لالا w-[500px] h-[500px] ml-0 ">
                      <div>

                        <h2 className="text-2xl font-bold   text-text"> {data && data.attributes.name}</h2>
                        <p className="text-sm text-gray-500 mt-2">Well-Versed Commerce</p>
                      </div>

                      <div class="ml-auto flex flex-wrap gap-4">
                                <button type="button" className="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="currentColor" class="mr-1" viewBox="0 0 64 64">
                                        <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                                    </svg>
                                    100
                                </button>
                                <button type="button" className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="currentColor" viewBox="0 0 512 512">
                                        <path d="M453.332 85.332c0 38.293-31.039 69.336-69.332 69.336s-69.332-31.043-69.332-69.336C314.668 47.043 345.707 16 384 16s69.332 31.043 69.332 69.332zm0 0" data-original="#000000" />
                                        <path d="M384 170.668c-47.063 0-85.332-38.273-85.332-85.336C298.668 38.273 336.938 0 384 0s85.332 38.273 85.332 85.332c0 47.063-38.27 85.336-85.332 85.336zM384 32c-29.418 0-53.332 23.938-53.332 53.332 0 29.398 23.914 53.336 53.332 53.336s53.332-23.938 53.332-53.336C437.332 55.938 413.418 32 384 32zm69.332 394.668C453.332 464.957 422.293 496 384 496s-69.332-31.043-69.332-69.332c0-38.293 31.039-69.336 69.332-69.336s69.332 31.043 69.332 69.336zm0 0" data-original="#000000" />
                                        <path d="M384 512c-47.063 0-85.332-38.273-85.332-85.332 0-47.063 38.27-85.336 85.332-85.336s85.332 38.273 85.332 85.336c0 47.059-38.27 85.332-85.332 85.332zm0-138.668c-29.418 0-53.332 23.938-53.332 53.336C330.668 456.063 354.582 480 384 480s53.332-23.938 53.332-53.332c0-29.398-23.914-53.336-53.332-53.336zM154.668 256c0 38.293-31.043 69.332-69.336 69.332C47.043 325.332 16 294.293 16 256s31.043-69.332 69.332-69.332c38.293 0 69.336 31.039 69.336 69.332zm0 0" data-original="#000000" />
                                        <path d="M85.332 341.332C38.273 341.332 0 303.062 0 256s38.273-85.332 85.332-85.332c47.063 0 85.336 38.27 85.336 85.332s-38.273 85.332-85.336 85.332zm0-138.664C55.914 202.668 32 226.602 32 256s23.914 53.332 53.332 53.332c29.422 0 53.336-23.934 53.336-53.332s-23.914-53.332-53.336-53.332zm0 0" data-original="#000000" />
                                        <path d="M135.703 245.762c-7.426 0-14.637-3.864-18.562-10.774-5.825-10.218-2.239-23.254 7.98-29.101l197.95-112.852c10.218-5.867 23.253-2.281 29.1 7.977 5.825 10.218 2.24 23.254-7.98 29.101L146.238 242.965a21.195 21.195 0 0 1-10.535 2.797zm197.93 176c-3.586 0-7.211-.899-10.54-2.797L125.142 306.113c-10.22-5.824-13.801-18.86-7.977-29.101 5.8-10.239 18.856-13.844 29.098-7.977l197.953 112.852c10.219 5.824 13.8 18.86 7.976 29.101-3.945 6.91-11.156 10.774-18.558 10.774zm0 0" data-original="#000000" />
                                    </svg>
                                </button>
                            </div>

                        <div className="flex space-x-2 mt-4">
                        <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
    </Stack>
                            <h4 className="font-tajawal text-extraligh text-text">500 Reviews</h4>
                        </div>

                        <div className="flex flex-wrap justify-start gap-4 mt-8">
                            <p className="text-text font-tajawal text-black font-bold text-2xl"> ${data && data.attributes.price}</p>
                            <p className="text-gray-400 text-base"><strike>$1500</strike> <span className="text-sm ml-1">Tax included</span></p>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-md  text-gray-800">Choose a Color</h3>  
                            
                            <div className="grid grid-cols-4 mb-2">
{data?.attributes?.productsize?.data?.map((size, index) => {
const sizeName = size?.attributes?.name; 
return (
<div key={index} className="">
  {sizeName ? (
    <button
    className={`text-red-400 bg-gray-200 border border-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-medium rounded text-sm h-16 w-16 text-center mb-2 ${selectedSize === size ? "bg-red-500 text-white" : ""}`}
    onClick={() => handelClickedSize(size)}
    >
      {sizeName}
        <p>{data && data.attributes.descriptionn}</p>
    </button>
  ) : (
    <p className="text-text ">Size data not available</p>
  )}
</div>

);
})}
</div>





                            <div className="flex flex-wrap gap-3 mt-4">
                                <button type="button" className="w-10 h-10 bg-black border-2 border-white hover:border-gray-800
                                 rounded-full shrink-0 transition-all"></button>
                                <button type="button" className="w-10 h-10 bg-gray-300 border-2 border-white 
                                hover:border-gray-800 rounded-full shrink-0 transition-all"></button>
                              
                            </div>
                        </div>

                        
                        <div className="mt-8 w-full ">
                            <h3 className="text-md  text-gray-800">Choose size</h3>
                            <div className="flex flex-wrap gap-3 mt-4 text-gray-400">
                                <button type="button" className="w-10 h-10 bg-gray-100 border-2 border-white hover:border-gray-800  shrink-0 transition-all">SM</button>
                                <button type="button" className="w-10 h-10  bg-gray-100 hover:border-gray-800  shrink-0 transition-all">MD</button>
                                <button type="button" className="w-10 h-10  bg-gray-100 hover:border-gray-800  shrink-0 transition-all">LG</button>
                                <button type="button" className="w-10 h-10 bg-gray-100 hover:border-gray-800 l shrink-0 transition-all">XLG</button>
     <button type="button" className="w-10 h-10 bg-gray-100 hover:border-gray-800 l shrink-0 transition-all">XLG</button>
                            </div>
                        </div>
                      

                         <div class="mt-8 space-y-4 max-w-xs">
                        <button onClick={() => addItem(product)} type="button" className="w-full px-4 py-3 bg-primary
                        hover:bg-secondry text-white text-sm font-semibold rounded-md">Buy now</button>
                        <button type="button" className="w-full px-4 py-2.5 border border-primary bg-transparent 
                        hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded-md">Add to cart</button>
                    </div>

                        {/* <div className="flex flex-wrap gap-4 mt-8">
                            <button onClick={() => addItem(product)}
                             type="button" className="min-w-64 px-4 py-2 bg-primary hover:bg-primary-400 text-white 
                             text-sm font-semibold rounded">Buy now</button>
                              <ToastContainer />
                            <button type="button" className="min-w-16 px-4 py-2.5 border border-prmary
                             bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded">Add to fav</button>
                        </div> */}
                    </div>
                </div>

               

                        </div>
                    </div>
               
           
      </>
    );
}
 
export default Ppage;