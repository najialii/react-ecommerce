import React, { useState } from 'react';
import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Register() {

    
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password:'',
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const   
 handleSubmitt = async (e) => {
    e.preventDefault();

    try {
     const response = await axios.post('http://localhost:1337/api/auth/local/register',
 formData);
      console.log(response.data);
      toast.success("Success Notification !", {
        position: "top-right"
      });
 
    } catch (error) {
      console.error(error);

    }
   
  };

  return (  
    
      <div className="container bg-secondery mt-10 w-4/3  ">
        <div className="flex flex-col justify-center items-center px-6 mx-auto md:h-screen ">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
<div className="sm:mx-auto sm:w-full sm:max-w-sm">


              <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>

      <form onSubmit={handleSubmitt}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username:</label>
          <input   
 type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">email:</label>
          <input   
 type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">password:</label>
          <input   
 type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>


        

       
        <button type="submit"  className="w-full text-white bg-primary  focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Register</button>
     
        <div class="flex items-start mt-6">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
      </form>

      
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" class="font-medium text-primary hover:underline dark:text-pink-500">Login here</a>
                  </p>

 </div>
              </div>
    </div>

      </div>
    </div>
  );
}

export default Register;   
