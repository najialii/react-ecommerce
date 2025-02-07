import { RxAvatar } from "react-icons/rx";
import { CiBoxList } from "react-icons/ci"; 
import { PiListHeartLight } from "react-icons/pi";
import { IoIosReturnLeft } from "react-icons/io";
import { VscSignOut } from "react-icons/vsc";
import { useLocation } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import orders from "./order";


const Userprofile = () => {
  const location = useLocation();
  const userData = location.state;
  return ( 
    <div className="bg-secondry h-full  p-23 w-full">
      {/* <div>
      <h2>{userData.name}</h2>
      <p>{userData.email}</p>
    </div> */}
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar"
 aria-controls="default-sidebar" type="button" 
 className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 
 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
  
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className="fixed top-0 z-[-1]  left-0  w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full   px-3 py-4 overflow-y-auto bg-backgroudcrl dark:bg-gray-800">
      <ul className="space-y-2 font-medium text-text">


         <li className="mt-10 mb-10">
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
           <span className="text-2xl h-10 w-10 ">
           <RxAvatar className="text-secondry " />
            </span> 
               <span className="ms-3 flex flex-col"><h3 className="">name</h3>user@email.com</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2       rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span className="text-3xl">
               <CiBoxList className="text-secondry  " />
               </span>
               <span className="flex-1 ms-3 whitespace-nowrap">orders</span>
               <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span className="text-3xl">
               <PiListHeartLight className="text-secondry  " />                     
               </span>
               <span className="flex-1 ms-3 whitespace-nowrap">Wishlist</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span className="text-3xl"> <IoIosReturnLeft className="text-secondry  " /></span>
               <span className="flex-1 ms-3 whitespace-nowrap">Returns</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="sticky bottom-0 text-3xl bg-red-50 p-1 top-20">
              <VscSignOut  className="text-red-400  "/>
              </span>
               <span className="flex-1 ms-3 whitespace-nowrap">Sign out</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

<div className=" mr-64  sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
   </div>
</div>

    </div>
   );
}
 
export default Userprofile ;