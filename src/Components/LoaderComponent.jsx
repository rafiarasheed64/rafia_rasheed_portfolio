import React, { useEffect, useState } from 'react';

const LoaderComponent = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress >= 100) {
                    clearInterval(intervalId);
                    return 100;
                }
                return prevProgress + 1;
            });
        }, 50);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const progressBarWidth = 150 + (progress / 100) * (650 - 150);

    return (
        <div className='h-screen w-full bg-black p-20 loader flex justify-center items-center'>
            <div className='w-full flex justify-between items-center border-white h-auto loader-main'>
                <div className="left-content">
                    <p className='text-white'>MERN-Stack DEVELOPER <br /> & DESIGNER</p>
                </div>
                <div className='progress'>
                    <div className="text-white text-center text-6xl number">
                        {`${progress}%`}
                    </div>
                    <div className='h-[2px] bg-white w-[650px] mt-5 animation'
                        style={{ width: `${progressBarWidth}px` }}
                    ></div>
                </div>
                <div className="right-content">
                    <p className='text-white'>RAFIA RASHEED <br /> PORTFOLIO 2024</p>
                </div>
            </div>
        </div>
    );
};

export default LoaderComponent;
