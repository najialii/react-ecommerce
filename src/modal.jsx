    import {useEffect, useState } from "react"
    import { useRef } from "react";
    import { FaRegUser } from "react-icons/fa";
    import { Link, useNavigate } from "react-router-dom";
    import axios from 'axios';
    import {ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css'; 




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
      
      
      function MyModal() {

      const [scrollPosition, setScrollPosition] = useState(0);
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      
      const navigate = useNavigate();

      const handleSubmit = async (e) => {

        
        console.log(email)
          e.preventDefault();
          try {
            const response = await axios.post('http://localhost:1337/api/auth/local', {
              identifier: email,
              password,              
            });

            console.log(response)
            const token = response.data.jwt;
          
            // Store the token in local storage or state management
            localStorage.setItem('token', token);

      
              toast.success("Logged in successfully!", {
                hideProgressBar: true,

              });

            console.log('Well done!');
            console.log('User profile', response.data.user);
            console.log('User token', response.data.jwt);

            // Redirect to the dashboard or a protected route
            navigate('/uprofile ' ,{ state: { userData } })
          //   window.location.href = '/dashboard';
          } catch (error) {
            console.log(error);
            setError(error.response.data.message);
            toast.error(error.response.data.message, {
              position: 'top-center',
            });
          }
        };  

        //save to ls 
        useEffect(() => {
          const storedToken = localStorage.getItem('token');
          if (storedToken) {

              // alert(storedToken)
            // Navigate to user profile if logged in
            // navigate('/');
          }
        }, [localStorage.getItem('token')])


      useEffect(() => {
        const intervalId = setInterval(() => {
          setScrollPosition((prevPosition) => prevPosition + 1);
        }, 50);

        return () => clearInterval(intervalId);
      }, []);

        const { isOpen, onOpen, onClose } = useDisclosure();
        const initialRef = useRef();
        
        return (
          <>

          <div className="flex justify-center items-center overflow-auto">

            {/* Your avatar button */}
            <Button onClick={onOpen}><FaRegUser /></Button>
      
            <Modal 
            isOpen={isOpen} onClose={onClose}>
              <ModalOverlay className="bg-gray-900 bg-opacity-50     " />
              <ModalContent className="overflow-y-scroll"
              bg="#f5fbf1"
              borderRadius="md"
              p={30}
              shadow="md"
              maxWidth="500px"
              maxHeight={600}
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
                <ModalCloseButton className=" ml-32   w-12  h-10 " />           

                </div>
                    <h1 className="text-2xl font-bold my-4">Get Access </h1>
                <ModalHeader className="text-xl my-10 font-semibold  mt-0">
                Enter your email address to access Batikha</ModalHeader>
                <ModalBody  pb={6} >
                  



                    <label  htmlfor="" className="block text-gray-700
          font-bold mb-2">email</label>
          <input id="email"  type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}  className="bg-gray-50 border 
          border-gray-300 text-gray-900 text-sm  
          focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
            />

          
          <label htmlfor="" className="block text-gray-700 font-bold mb-2">password</label>
          <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300
          text-gray-900 text-sm focus:ring-pink-600 focus:border-pink-600
            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500
          dark:focus:border-pink-500" />

          <div className='mt-4'>
            
          </div>
          
      
                
                </ModalBody >
      
                <ModalFooter>
                    <div className="my-10 flex flex-col justfy-center items-center gap-3">


                        
                  <Button className="w-full text-white bg-primary
          hover:bg-primary focus:ring-4 focus:outline-none 
          focus:ring-primary font-medium rounded-lg text-sm
            px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-primary
          " colorScheme="blue" mr={10} width={400}   
      onClick={handleSubmit}>
                    Login
                  </Button>
                  

                  <Button    onClick={onClose} className="w-full my-2 text-text bg-secondery
          hover:border-gray-400 focus:ring-4 focus:outline-none 
          focus:ring-red-300 font-medium rounded-lg text-sm
            px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-red-700
            dark:focus:ring-pink-800" colorScheme="blue" mr={10} width={400} >
                <Link to='/register'>signup</Link></Button>

                <h3>Or login using social account </h3>
                <div
                id="third-party-auth"
                class="flex items-center justify-center mt-5 flex-wrap bg-transparent w-full"
              >


                <button
                  href="#"
                  class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img
                    class="max-w-[25px]"
                    src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                    alt="Google"
                  />
                </button>
            
            
                <button
                  href="#"
                  class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img
                    class="max-w-[25px]"
                    src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                    alt="Facebook"
                  />
                </button>
                <button
                  href="#"
                  class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img
                    class="max-w-[25px] dark:gray-100"
                    src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                    alt="twitter"
                  />
                </button>

                <button
                  href="#"
                  class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img
                    class="max-w-[25px]"
                    src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                    alt="apple"
                  />
                </button>
              </div>

      
          </div>
          
                </ModalFooter>

                <div className="flex items-center justify-center w-full">

                <p class="text-sm  font-light text-gray-500 dark:text-gray-400">
                          Already have an account? <a href="#" class="font-medium text-primary hover:underline dark:text-pink-500">Login here</a>
                      </p>
                </div>
              </ModalContent>
            </Modal>   
          </div>
      
          </>
        );
      }
      
      export default MyModal;