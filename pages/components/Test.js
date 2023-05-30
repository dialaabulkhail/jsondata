import React from "react";
import Image from "next/image";
import myData from '../../public/data/data'
import Link from "next/link";

const Test = ({single, setSingle}) => {

  return (
    <div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">

{myData.map((item)=>{
    return(
        <div key={item.id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <Image
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src={ "https://qoshan.com/wp-content/uploads/2020/06/received_10153208579788444-2.jpeg"}
                  width={1000}
                  height={1000}
                />
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                <Link href={{
        pathname: "Details",
        query: {
            name: item.x_url,
        }
    }}>
                    {item.x_name}
                  </Link>
                </h1>
                <p className="text-grey-darker text-sm">
                    {/* {(item.x_studio_sale_price).toString()} */}
                    {item.x_studio_sale_price.toString().slice(0,3)},{item.x_studio_sale_price.toString().slice(3)} دينار أردني
                </p>
              </header>
              <body className="flex gap-3">
              <p>حمامات: {item.x_studio_bathrooms_1}</p> <p>غرف النوم: {item.x_studio_bedrooms}
              </p>
              <p>كراجات: {item.x_studio_garages}</p>
              <p>المساحة: {item.x_studio_property_area} متر مربع</p>
              </body>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                
                  <p className="ml-2 text-sm">{item.x_studio_many2one_field_YbLip[1]}</p>
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
