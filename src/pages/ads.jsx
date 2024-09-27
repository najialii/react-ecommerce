import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const Ads = () => {
    const images = [
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",   
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",   
    
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",   
       
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",   
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",   
    
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",   
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",   
       
      ];
      
      const slideDuration = 2000; 

    return ( 
      <>
     
      <div className="container mx-auto   ">
            <div className="bg-gradient-to-br from-primary to-secondry text-white text-center 
             shadow-3xl shadow-secondry py-10 px-20 rounded-lg  relative">
          
<Slide arrows={true} dots={false} scale={1.4} autoPlay={true} transition={slideDuration}>
      
      {/* indicators={index => <div className="indicator  mt-{-4}">{index + 1}</div>}  */}
            <div className="container my-2  bg-transparent
               p-10
       mx-auto">
      
            <div className="grid grid-cols-7 gap-2 mt-4 ">
              {images.map((image, index) => (
                <div key={index} className="relative  h-full ">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-md each-slide-effect"
                  />
      <div className="flex justify-center items-center">
      
      
      </div>
                </div>
              ))}
            </div>
          </div>
              </Slide>
      

            </div>
        </div>
      
      </>
     );
}

export default Ads;