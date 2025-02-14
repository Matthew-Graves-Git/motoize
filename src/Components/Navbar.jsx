import React, { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
    {
        link:"Vehicles"
    },
    {
        link:"Shopping"
    },
    {
        link:"My Account"
    },
    {
        link:"Dealer"
    },
    ]

    return (  
        <div className='flex justify-between items-center w-screen h-20 z-20 opacity-80 backdrop-blur-lg text-white bg-black px-4  fixed'>
            <div>
                
            </div>
            <ul className="hidden md:flex">
                {links.map(({link},index)=>{
                    return(
                    <li key={index} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-green-500 duration-200">
                                            <a href="#">{link}</a>
                    </li>
                    )
                })}
                
            </ul>
            <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                    {nav ? <FaTimes size={30}/>:<FaBars size={30}/>}
            </div>
            {nav && <ul className="flex flex-col justify-center items-center absolute 
                top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({link},index)=>{
                    return(
                    <li key={index} className="px-4 cursor-pointer capitalize py-6 text-4xl font-medium text-gray-500">
                        <a href="#">{link}</a>
                    </li>
                    )
                    })}
            </ul>
            }
        </div>
    );
}
 
export default Navbar;