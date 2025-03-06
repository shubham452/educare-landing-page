import React from 'react';
import planners from '../images/planners.jpg';
import pens from '../images/pens.jpg';
import school from '../images/school.jpg';
import calendar from '../images/calendar.jpg';
import artcraft from '../images/artcaraft.jpg';
import notebook from '../images/notebook.jpg';

const products = [
    { img: planners, title: 'Planners', desc: 'Stay organized with our stylish planners.' },
    { img: pens, title: 'Pens & Pencils', desc: 'Premium quality writing instruments.' },
    { img: school, title: 'School Supplies', desc: 'Everything students need for success.' },
    { img: calendar, title: 'Calendars', desc: 'Plan your days with ease and efficiency.' },
    { img: artcraft, title: 'Art & Craft', desc: 'Unleash creativity with our craft supplies.' },
    { img: notebook, title: 'Notebooks', desc: 'Durable and stylish notebooks for notes.' }
];

const Product = () => {
    return (
        <div id='products' className="p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Product Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img src={product.img} alt={product.title} className="w-full h-40 rounded-md" />
                <h3 className="mt-3 text-xl font-semibold">{product.title}</h3>
                <p className="text-gray-600 text-sm">{product.desc}</p>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Product;
