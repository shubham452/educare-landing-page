import React,{useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
const Navbar = () => {

    const [open,setOpen] = useState(false);
    return (
        <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-md z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className='md:hidden'>
                <button className='text-white' onClick={()=>setOpen(!open)}>
                {open?<ImCross/>:<GiHamburgerMenu/>}
                </button>
            </div>
            {open && (
                <div className="md:hidden absolute top-14 left-0 w-full bg-gray-800 text-center py-4">
                    <a href="#products" className="block py-2 hover:text-yellow-400" onClick={() => setOpen(false)}>Products</a>
                    <a href="#testimonials" className="block py-2 hover:text-yellow-400" onClick={() => setOpen(false)}>Testimonials</a>
                    <a href="#footer" className="block py-2 hover:text-yellow-400" onClick={() => setOpen(false)}>Contact</a>
                </div>
            )}
            <h1 className="text-xl font-bold">EduSupply</h1>

            
            <div className="hidden md:flex space-x-6">
                <a href="#products" className="hover:text-yellow-400 transition">Products</a>
                <a href="#testimonials" className="hover:text-yellow-400 transition">Testimonials</a>
                <a href="#footer" className="hover:text-yellow-400 transition">Contact</a>
            </div>
            </div>
        </nav>
    );
  };

export default Navbar