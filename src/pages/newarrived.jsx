import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const Narrived = () => {
    const images = [
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",   
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",   
    
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",   
       
      ];

       const slideDuration = 2000; 
    return ( 
      <>


<div className='mb-1'>
    <h3 className='font-bold text-text text-2xl'>New Arrived</h3>
</div>
<Slide arrows={true} dots={false} scale={1.4} autoPlay={true} transition={slideDuration}>
      
{/* indicators={index => <div className="indicator  mt-{-4}">{index + 1}</div>}  */}
      <div className="container my-2  bg-transparent
         p-10
 mx-auto">

      <div className="grid grid-cols-3 gap-2 mt-4 ">
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

      
      </>
     );
}

export default Narrived;