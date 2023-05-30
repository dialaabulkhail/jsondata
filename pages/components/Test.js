import React from "react";
import myData from '../../public/data/data'
const Test = () => {

  return (
    <div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">

{myData.map((item)=>{
    return(
        <div key={item.id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                {/* <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src={item.x_studio_property_images.split(",")[0] || ""}
                /> */}
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    {item.x_name}
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">
                    {/* {(item.x_studio_sale_price).toString()} */}
                    {item.x_studio_sale_price.toString().slice(0,3)},{item.x_studio_sale_price.toString().slice(3)} دينار أردني
                </p>
              </header>
              <body>
              <p id="demo"></p>
                {/* <p id="htmltext">{item.x_studio_property_information}</p> */}
              </body>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    className="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p className="ml-2 text-sm">{item.x_studio_many2one_field_YbLip}</p>
                </a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span className="hidden">Like</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>
    )
})}
          
        </div>
      </div>
    </div>
  );
};

export default Test;
