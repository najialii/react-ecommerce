
import Ppage from "./ppage";
import Pcard from "./pcard";
import Slideshow from "./slideshow";
import Loginpopup from "./modal";
import Ads from "./ads"
import Flashsale from "./flashsale"
import Narrived from "./newarrived"
const Home = () => {
    const images = [
        `/header.png`,
        `pikaso_embed.png`,
        // `/offer8.png`,
    ];
    return (
      <>
        <div className="mx-16 my-10">
          <Slideshow />

          <Flashsale />

          <div className="h-64 relative my-10">
            <img
              src={images[0]}
              alt={`Slide `}
              className="w-full h-full object-cover rounded-md each-slide-effect"
            />
             <button
    className="absolute top-2 left-2 p-2 bg-accent text-white "
    onClick={() => { /* Your button logic here */ }}
  >AD</button>
  <span>
  </span>
          </div>
          
          <Narrived />
          <div className="p-1 grid grid-cols-5  ">
            <Pcard />
          </div>
          <div className="h-80 relative my-10">
            <img
              src={images[1]}
              alt={`Slide `}
              className="w-full my-10 mb-10 object-cover rounded-md each-slide-effect"
            />
             <button
    className="absolute top-2 left-2 p-2 bg-accent text-white "
    onClick={() => { /* Your button logic here */ }}
  >AD</button>
  <span>
  </span>
          </div>  
        </div>
        
        <Ads />
      </>
    );
}
 
export default Home ;