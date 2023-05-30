import Image from 'next/image'
import { Inter } from 'next/font/google'
import Test from './components/Test'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [single, setSingle] = useState("")
  return (
   <div>
    <Test single={single} setSingle={setSingle}/>
   </div>
  )
}
