import React,{useState, useEffect} from 'react'

const Testimonials = () => {
    const testimonials = [
        {
            name: "Emily Johnson",
            review: "Amazing quality! The planners and notebooks are stylish and durable. Highly recommend for students and professionals.",
            image: "https://i.pravatar.cc/150?img=45"
            },
            {
            name: "Michael Smith",
            review: "The best stationery I've ever purchased! The pens are smooth, and the school supplies are top-notch.",
            image: "https://i.pravatar.cc/150?img=12"
            },
            {
            name: "Sarah Thompson",
            review: "Great selection of products! Fast shipping and excellent customer service. Will definitely order again.",
            image: "https://i.pravatar.cc/150?img=23"
            },
            {
            name: "David Lee",
            review: "I love the art & craft supplies! They are high quality and perfect for my DIY projects.",
            image: "https://i.pravatar.cc/150?img=33"
            },
            {
            name: "Jessica Brown",
            review: "The calendars and planners are a lifesaver! They help me stay organized and plan my schedule efficiently.",
            image: "https://i.pravatar.cc/150?img=47"
            }
        ];
        const [index,setIndex] = useState(0);

        useEffect(()=>{
            const interval = setInterval(()=>{
                setIndex((prevIndex)=>(prevIndex+1)%testimonials.length);
            },3000);
            return()=>clearInterval(interval);
        },[]);
    
    return (
        <div id='testimonials'>
            <div className=" p-6 bg-gradient-to-r from-orange-500 to-yellow-400 py-12">
            <h2 className="text-3xl font-bold text-center mb-6">Client Testimonials</h2>

                
                <div className="bg-white p-4 rounded-lg shadow-lg flex mx-10">
                    <img src={testimonials[index].image}  className="w-auto h-40 rounded-md" />
                    <div className='flex-col'>
                        <h3 className="mt-3 text-xl font-semibold">{testimonials[index].name}</h3>
                        <p className="text-gray-600 text-sm px-5 ">{testimonials[index].review}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Testimonials