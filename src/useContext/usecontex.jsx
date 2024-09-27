<div
key={data && data.id}
className="bg-white md:py-16 overflow-y-auto dark:bg-gray-900 antialiased my-12"
>
<div className=" h-[460px] max-w-screen-xl px-4 mx-auto 2xl:px-0   ">
  <div className="lg:grid lg:grid-cols-2  xl:gap-8">
    <div className="shrink-0 max-w-md w-full lg:max-w-lg mx-auto ">
      <div class="grid grid-cols-2 items-center  w-full ml-16 h-full">
        {data?.attributes?.image?.data?.map((image, index) => (
          <div key={index} class="thumbnail-container">
            <img
              key={index}
              src={urlimg.concat(image.attributes.formats.medium.url)}
              alt={`Thumbnail ${index}`}
              className=" my-1 object-cover border border-gray-200
     {index === selectedImage ? 'border-blue-500' : ''}"
              onClick={() => handleThumbnailClick(index)}
            />
          </div>
        ))}

        <img
          className="product-image w-92 sticky ml-4"
          src={urlimg.concat(
            data &&
              data.attributes.image.data[0].attributes.formats.medium
                .url
          )}
          alt="Product Image"
        />
      </div>
                 </div>

    <div className=" flex flex-col bg-red-400  sm:mt-8  mt-0 ">

      <div className="mt-6 sm:mt-8 lg:mt-0 ">
      <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
        {data && data.attributes.name}
      </h1>
      
      <div className=" flex flex-cols justify-end items-end gap-2 ">
     <span className="bg-red-300 rounded-full w-10 h-10  flex justify-center items-center ml-64"><CiShare2 /></span> 
    
     <button
          className="text-red-700 hover:text-white border border-red-700 
 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm w-10 h-10 text-center
   dark:border-red-500 dark:text-red-500 
 dark:hover:text-white hover:text-red-600 dark:focus:ring-red-900 flex justify-center items-center "
        >
          <GrFavorite />
        </button>
      </div>
      </div>
      <div>
      <p className="text-gray-500 my-4 font-semibold dark:text-gray-400  ">
      {/* {data && data.attributes.subcatogry}  */}
      pjamas
      </p>
      <p className=" flex mt-0 items-center text-gray-900 sm:text-3xl dark:text-white">
          <span className="text-sm ">
            Now:
            <span className="ml-4  font-bold text-4xl">
              ${data && data.attributes.price}
            </span>
            <span className="mx-4">Inclusive of VAT</span>
            <span className=" bg-green-100 text-green-600 py-1.5 px-1 text-0.2 text-center">
            6% Off
          </span>
          </span>
        </p>
        <p className="text-base flex dark:text-white">
          <span className=" text-gray-400 mr-4 font-sm no-underline">
            Was:{" "}
          </span>

          <p className="line-through text-gray-400">2000$</p>
        </p>
      </div>

      <div className=" sm:items-center sm:gap-4 sm:flex">

      </div>

      <div className="flex items-center gap-2 mt-2 sm:mt-0">
        <p
          className="text-sm font-medium leading-none text-gray-500
      dark:text-gray-400"
        >
          <span className="mr-4">Save:</span>

        </p>
        <p className=" flex  items-center text-gray-900 sm:text-3xl dark:text-white"></p>
      </div>

      <a
        href="#"
        className="text-sm mt-4 font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
      >
        345 Reviews
      </a>
      <p className="font-bold">size</p>
      <div className="grid grid-cols-4 mb-2">
      <div className="grid grid-cols-4 mb-2">
<div className="grid grid-cols-4 mb-2">
{data?.attributes?.productsize?.data?.map((size, index) => {
const sizeName = size?.attributes?.name; // Extract name attribute safely
return (
<div key={index} className="">
  {sizeName ? (
    <button
      className={`text-red-400 bg-gray-200 border border-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-medium rounded text-sm h-16 w-16 text-center mb-2 ${selectedSize === size ? "bg-red-500 text-white" : ""}`}
      onClick={() => handleSizeClick(size)}
    >
      {sizeName}
    </button>
  ) : (
    <p className="text-gray-500">Size data not available</p>
  )}
</div>
);
})}
</div>
<p className="text-gray-500">Size data not available</p>


</div>

        
        
      </div>
    </div>
      <div className="grid grid-cols-3 ml-20 mt-3 w-full gap-2  mt-5">
        <button 
        onClick={() => handleAddToCart(data)}
          className="text-white bg-red-300 hover:bg-gradient-to-gray-100
  focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 
 font-medium rounded-lg text-sm  gap-3 h-12  text-center  flex justify-center items-center"
        >
          {" "}
          <FaCartPlus />
          Add to Cart
        </button>
      </div>

  </div>
 

</div>
      </div>

<div>
<div className="lg:grid lg:grid-cols-2 bg-red-100 lg:gap-8 xl:gap-2">
  <div>
    <h3>Overveiw</h3>
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    {data && data.attributes.descriptionn}
  </div>

  <div className="">
    <h3>Specifications</h3>
    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

    <tbody>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4">Silver</td>
        <td className="px-6 py-4">Laptop</td>
        <td className="px-6 py-4">$2999</td>
        <td className="px-6 py-4"></td>
      </tr>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Microsoft Surface Pro
        </th>
        <td className="px-6 py-4">White</td>
        <td className="px-6 py-4">Laptop PC</td>
        <td className="px-6 py-4">$1999</td>
        <td className="px-6 py-4"></td>
      </tr>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Magic Mouse 2
        </th>
        <td className="px-6 py-4">Black</td>
        <td className="px-6 py-4">Accessories</td>
        <td className="px-6 py-4">$99</td>
        <td className="px-6 py-4"></td>
      </tr>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Google Pixel Phone
        </th>
        <td className="px-6 py-4">Gray</td>
        <td className="px-6 py-4">Phone</td>
        <td className="px-6 py-4">$799</td>
        <td className="px-6 py-4"></td>
      </tr>
      <tr>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple Watch 5
        </th>
        <td className="px-6 py-4">Red</td>
        <td className="px-6 py-4">Wearables</td>
        <td className="px-6 py-4">$999</td>
        <td className="px-6 py-4"></td>
      </tr>
    </tbody>
  </div>
</div>
</div>
