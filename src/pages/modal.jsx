import { createPortal } from 'react-dom';
const Loginpopup = () => {
return (  
        
<>
<div> {createPortal(
        <p>This child is placed in the document body.</p>,
        document.body
      )}</div> 

</>
    );
}
 
export default Loginpopup;