import './globals.css'


import Navbar from "@/components/Navbar";
import Image from "next/image";
import Foter from '@/components/Foter';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>


<Navbar />
<hr></hr>

      {children}
      
      
      <hr></hr>
      <Foter />
      </body>
    </html>
  )
}
