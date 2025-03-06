import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="footer" className="bg-gray-900 text-gray-300 py-10">
            <div className=" mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div>
                    <h2 className="text-xl font-bold text-white">EduSupply</h2>
                    <p className="mt-2 text-sm text-gray-400">
                        Providing quality stationery and school supplies for students and professionals.
                    </p>
                </div>

                
                <div>
                    <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">Products</a></li>
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                <div>
            
                    <div className="mt-2 flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
