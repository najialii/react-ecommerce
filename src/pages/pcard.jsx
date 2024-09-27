// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import Ppage from "./ppage"
import { GrFavorite } from "react-icons/gr"


const  Pcard = () => {
    

  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {
    setIsAnimating(true);
console.log("yuuuuuuuuuuuuuuuuuuuuuuuuuup");

    setTimeout(() => {
      setIsAnimating(false);
    }, 800); // Adjust animation duration as needed
  };

    useEffect(()=>{
        getData()
      },[])
      const[data,setData] = useState(null)
        async function getData() {

            
            const url = "http://localhost:1337/api/posts?populate=*";
            console.log(url);
            
            
            try {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }
          
              const json = await response.json();
              console.log(json);
              setData(json.data)
            } catch (error) {
              console.error(error.message);
            }
          }
          // c1642cc84ddf0abd51955edf50ea1da42fa6a433fd29927017b3b53509d29ffe1c09bb306802d73ab7d348c6c603977d9dec1af66208f767674d43d913506934e455eb192df64a401d835b56ce3d7e890ce21ef86a0a0aca63782461227d900ff05ff8877e30746085bc14328f54e0f60608b93f879e1786dcfefa22a6e470a1
         
           const urlimg = "http://localhost:1337"
          //  const addToCart = (product) => {
          //   setCart([...cart, product]);
          // };
     
    return ( 
    <>
     
     {data&&data.map((userp)=>{ 
        return <div key={userp.id} className="w-50 max-w-sm  bg-transparent
         dark:bg-gray-800 dark:border-gray-700 my-3 mx-1 gap-8" >

    <a className="relative" href="#">

        <img className=" " src={urlimg.concat(userp.attributes.image.data[0].attributes.formats.medium.url)} alt="product image" />
      <button className="absolute top-0 right-0 shadow bg-white shadow  text-gray-800 p-2 my-4 mx-4 rounded-2xl"><GrFavorite /></button>

    </a>
    <div class=" pb-5">
        <a href="#">
        <Link to={"/ppage/"+userp.id}  unstable_viewTransition><h5 class="text-md font-semibold tracking-tight text-gray-900
             dark:text-white turncate mt-3">{userp.attributes.name}</h5></Link>
             <h6 className="text-sm font-md text-gray-500 mt-2">modenum&name </h6>
            
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">

              <div className="text-xl font-bold ">

              $ {userp.attributes.price}
              </div>
            </div>
            {/* <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span> */}
        </div>
        <div class="flex item font-medium rounded-lg text-sm 
              px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
              dark:focus:ring-bls-center justify-end">
            {/* <a onClick={() => handleAddToCart} href="#" className="text-white bg-purple-700
             hover:bg-purple-800 focus:ring-4 focus:outline-none
              focus:ring-blue-300ue-800">add to cart</a> */}
        </div>
    </div>
</div>
})}
    </>
     );
}
 
export default Pcard;