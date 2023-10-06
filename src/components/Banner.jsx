import React from 'react'
import { Icon } from '@iconify/react';

const Banner = () => {

  const bannerInfo = [
    {
      icon: "ph:seal-check",
      bgColor: "bg-orange-500",
      title: "8 years job",
      description: "Experience",
    },
    {
      icon: "clarity:clipboard-line",
      bgColor: "bg-orange-500",
      title: "500+ projects",
      description: "Completed",
    },
    {
      icon: "streamline:interface-help-customer-support-1-customer-headset-help-microphone-phone-support",
      bgColor: "bg-orange-500",
      title: "24/7 online",
      description: "Support",
    }

  ]

  return (
    <>
      <div className='flex justify-around items-center w-1/2 rounded-full
       bg-white relative bottom-8 mx-auto shadow-xl sm:w-[90%] sm:flex-col
        sm:rounded-3xl lg:w-full lg:bottom-4 xl:w-3/4 xs:mt-12 sm:relative sm:-top-16'
      >
        {bannerInfo.map((data, index) => (
          <div
            key={index}
            className={`w-16 h-16 rounded-full -ml-28 flex items-center justify-center ${data.bgColor} my-4`}
          >
            <Icon icon={data.icon} color="white" width="40" height="40" className='absolute' />
            <div className='relative left-24 flex flex-col'>
              <h3 className='text-blue-950 font-bold whitespace-nowrap text-xl w-28' >
                {data.title}
              </h3>
              <p className='text-orange-400 font-semibold w-28'>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Banner