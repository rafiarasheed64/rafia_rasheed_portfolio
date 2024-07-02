import React from 'react';

const Services = () => {

    return (
        <div className='h-auto w-full px-20 py-48 bg-[rgb(252,252,253)]' id='Services'>
            <h1 className='text-[#11204D] font-semibold text-[36px] text-center Font'>What I Offer</h1>
            <div className='w-[80%] m-auto mt-20 flex justify-between services' >
                <div className='w-[40%] border-[1.5px] rounded-lg bg-white p-10 relative overflow-hidden parent h-max'>
                    <div className='h-max w-full absolute bottom-0 left-0 z-0 bg-slate-100 child opacity-0'></div>
                    <p className='absolute top-5 right-5 text-2xl text-[#6138DB] skill'>01</p>
                    <img className='m-auto h-[50px] mt-14' src="https://res.cloudinary.com/dratc41d6/image/upload/v1713548528/icon-3_sim2ut.png" alt="" />
                    <h1 className='text-[#11204D] text-2xl font-medium mt-10'>Frontend Development</h1>
                    <p className='text-[#11204DB3] text-[17px] mt-5 leading-8'>Proficient in HTML/CSS3, Sass/Less, Bootstrap, Canvas, JavaScript, JQuery, Material UI, Chakra UI, Tailwind CSS, Ant Design, React.js, React-Bootstrap, Next.js, Github, Git Lab.</p>
                </div>

                <div className='w-[40%] border-[1.5px] rounded-lg bg-white p-10 relative overflow-hidden parent'>
                    <div className='h-auto w-full absolute bottom-0 left-0 z-0 bg-slate-100 child opacity-0'></div>
                    <p className='absolute top-5 right-5 text-2xl text-[#6138DB] skill'>02</p>
                    <img className='h-[50px] m-auto mt-14' src="https://res.cloudinary.com/dratc41d6/image/upload/v1716889014/3202441-200-removebg-preview_a0r3m4.png" alt="" />
                    <h1 className='text-[#11204D] text-2xl font-medium mt-10'>CSS Animations</h1>
                    <p className='text-[#11204DB3] text-[17px] mt-5 leading-8'>I specialize in crafting responsive animations that seamlessly adapt to various devices, from subtle hover effects to seamless page transitions and dynamic element interactions. Specializing in HTML, CSS, and JavaScript, my services cover text animations, hover effects, event-based animations, loaders, and more.</p>
                </div>
            </div>
            <h1 className='text-[#11204D] font-semibold text-[36px] text-center mt-40 Font'>Certifications</h1>
            <div className='w-[80%] m-auto mt-20 flex justify-between certificate'>
                <img className='h-[270px] w-[43%] border c-1' src="https://res.cloudinary.com/dratc41d6/image/upload/v1713566089/Certificate-1_q2to4e.png" alt="" />
                <img className='h-[270px] w-[43%] border c-2' src="https://res.cloudinary.com/dratc41d6/image/upload/v1713599312/WhatsApp_Image_2024-04-20_at_12.48.09_PM_ek3doz.jpg" alt="" />
            </div>
            <div className='w-[80%] m-auto mt-20 flex justify-between certificate'>
                <img className='h-[270px] w-[43%] border c-3' src="https://res.cloudinary.com/dratc41d6/image/upload/v1713566259/Certificate-4_bcqqly.png" alt="" />
                <img className='h-[270px] w-[43%] border c-4' src="https://res.cloudinary.com/dratc41d6/image/upload/v1713566245/Certificate-3_twuq5n.png" alt="" />
            </div>

        </div>
    );
}

export default Services;
