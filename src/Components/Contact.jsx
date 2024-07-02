// import React from 'react';
// import { BsGithub } from 'react-icons/bs';
// import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
// import { useState } from 'react';
// import contactImg from '../assets/contact.jpeg'

// const Contact = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (email.trim() === '' || message.trim() === '') {
//             alert('Please fill out required fields');
//             return;
//         }
//         if (!validateEmail(email)) {
//             alert('Please enter a valid email address');
//             return;
//         }
//         const formData = new FormData();
//         formData.append('access_key', '8f193b9c-b31f-420a-b20b-48aa59c252da');
//         formData.append('name', name);
//         formData.append('email', email);
//         formData.append('message', message);

//         fetch('https://api.web3forms.com/submit', {
//             method: 'POST',
//             body: formData
//         })
//             .then(response => {
//                 if (response.ok) {
//                     alert('Form submitted successfully. Thank you for your submission! We will contact you soon.');
//                     setName('');
//                     setEmail('');
//                     setMessage('');
//                 } else {
//                     alert('Failed to submit form. Please try again.');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error submitting form:', error);
//                 alert('Failed to submit form. Please try again.');
//             });
//     };

//     const validateEmail = (email) => {
//         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return re.test(String(email).toLowerCase());
//     };

//     return (
//         <>
//             <div className='h-auto w-full px-20 py-32 bg-[rgb(247,248,250)] text-black' id='Contact'>
//                 <div className='flex items-center justify-between mt-16 w-[100%] contact'>
//                     <div className='w-[40%] con-1'>
//                         <h1 className='text-[rgb(48,127,128)] font-semibold text-[36px] Font'>Get In Touch</h1>
//                         <h1 className='text-[80px] text-[rgb(25,67,68)] font-bold'>Contact.</h1>
//                         <div className='flex justify-between w-[100%]' >
//                             <div className='flex items-center justify-between '>LinkedIN
//                             <a href="https://www.linkedin.com/in/rafia-rasheed-6128311b3/" target="_blank" rel="noopener noreferrer">
//                             <FaLinkedinIn className='text-[rgb(48,127,128)] social ml-2'/>
//                                     </a>
//                             </div>
//                             <div className='flex items-center justify-between '>GitHub
//                             <a href="https://github.com/rafiarasheed64" target="_blank" rel="noopener noreferrer">
//                                         {/* <BsGithub className='text-black text-xl social' /> */}
//                             <BsGithub className='text-[rgb(48,127,128)] social ml-2'/>
//                                     </a>
//                             </div>
//                             <div className='flex items-center justify-between '>Gmail
//                             <FaEnvelope className='text-[rgb(48,127,128)] social ml-2'/>
//                             </div>
//                         </div>
//                     </div>

                    
//                     <img className='w-[50%] con-2' src={contactImg} alt="" />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Contact;



import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import contactImg from '../assets/contact.jpeg';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === '' || message.trim() === '') {
            alert('Please fill out required fields');
            return;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        const formData = new FormData();
        formData.append('access_key', '8f193b9c-b31f-420a-b20b-48aa59c252da');
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    alert('Form submitted successfully. Thank you for your submission! We will contact you soon.');
                    setName('');
                    setEmail('');
                    setMessage('');
                } else {
                    alert('Failed to submit form. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                alert('Failed to submit form. Please try again.');
            });
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <>
            <div className='h-auto w-full px-6 sm:px-12 md:px-20 py-16 md:py-32 bg-[rgb(247,248,250)] text-black' id='Contact'>
                <div className='flex flex-col md:flex-row items-center justify-between mt-16 w-full contact'>
                    <div className='w-full md:w-[40%] con-1 text-center md:text-left'>
                        <h1 className='text-[rgb(48,127,128)] font-semibold text-2xl md:text-3xl'>Get In Touch</h1>
                        <h1 className='text-[rgb(25,67,68)] font-bold text-4xl md:text-5xl mt-2'>Contact.</h1>
                        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center w-full mt-8 md:mt-4'>
                            <div className='flex items-center mb-4 md:mb-0'>
                                LinkedIn
                                <a href="https://www.linkedin.com/in/rafia-rasheed-6128311b3/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn className='text-[rgb(48,127,128)] ml-2 text-xl'/>
                                </a>
                            </div>
                            <div className='flex items-center mb-4 md:mb-0'>
                                GitHub
                                <a href="https://github.com/rafiarasheed64" target="_blank" rel="noopener noreferrer">
                                    <BsGithub className='text-[rgb(48,127,128)] ml-2 text-xl'/>
                                </a>
                            </div>
                            <div className='flex items-center'>
                                Gmail
                                <FaEnvelope className='text-[rgb(48,127,128)] ml-2 text-xl'/>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[50%] mt-8 md:mt-0'>
                        <img className='w-full h-auto' src={contactImg} alt="Contact" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
