import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import myData from './../public/data/data'
import Image from 'next/image';

const Details = () => {
    const [data, setData] = useState({})
const router = useRouter()
const id = router.query.name
console.log(id)

useEffect(()=>{
    const dataa = myData.find((item)=> item.x_url === id)
    setData(dataa)
}, [id])


console.log(data)
  return (
    <div>
        <Image src={data.x_studio_property_images?.split(",")[0]} width={500} height={500} alt="property-img"/>
      <h1 className='text-2xl'>{data.x_name}</h1>

      <p>Price: {data.x_studio_sale_price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} دينار أردني</p>
    </div>
  )
}

export default Details
