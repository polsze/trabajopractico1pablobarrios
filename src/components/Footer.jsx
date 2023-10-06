import React from 'react'
import { Icon } from '@iconify/react';
import { motion } from "framer-motion"
import { Link } from 'react-scroll';



const Footer = () => {


  return (
    <>
      <footer className='w-full h-[40vh] bg-orange-500 mt-24 flex items-center justify-center sm:flex-col sm:h-auto 2xl:flex-row 2xl:flex-wrap 2xl:h-auto 2xl:p-1'>

        <div className='flex flex-col mt-6 text-sm relative left-44 sm:left-0 sm:items-center md:left-0 lg:left-0 lg:items-center xl:left-0 2xl:left-0 2xl:items-center'>
          <h6 className='uppercase font-semibold text-white'>Logo</h6>
          <p className='w-[35%] text-left my-4 text-white sm:text-center'>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
          <div className='flex flex-row space-x-2 2xl:mb-4'>
            <a href=""  whileHover={{ y: -2 }}><Icon icon="entypo-social:facebook-with-circle" color="white" className='w-7 h-7' /></a>
            <Icon icon="ant-design:twitter-circle-filled" color="white" className='w-7 h-7' />
            <Icon icon="entypo-social:instagram-with-circle" color="white" className='w-7 h-7' />
            <Icon icon="entypo-social:linkedin-with-circle" color="white" className='w-7 h-7' />
          </div>
        </div>
        
        <div className='border border-l-1 h-64 relative right-24 top-8 sm:hidden sm:right-0 2xl:hidden '></div>

        <div className='flex flex-row justify-center space-x-16 sm:flex-row flex-wrap sm:space-x-3'>

          <div className='flex flex-col text-white sm:items-center sm:mt-4'>
            <h6 className='mb-4 font-semibold text-xl sm:mb-1'>Links</h6>
            <ul className='text-sm sm:flex sm:flex-col sm:items-center'>
              <li className='mb-1'>Home</li>
              <li className='mb-1'>About Me</li>
              <li className='mb-1'>Services</li>
              <li className='mb-1'>Pages</li>
              <li className='mb-1'>Contact Me</li>
            </ul>
          </div>

          <div className='border border-l-1 h-48 sm:hidden'></div>

          <div className='flex flex-col text-white sm:items-center sm:mt-4'>
            <h6 className='mb-4 font-semibold text-xl sm:mb-1'>Services</h6>
            <ul className='text-sm sm:flex sm:flex-col sm:items-center'>
              <li className='mb-1'>Web Design</li>
              <li className='mb-1'>Brand Strategy</li>
              <li className='mb-1'>Product Design</li>
              <li className='mb-1'>Web Development</li>
              <li className='mb-1'>App Development</li>
            </ul>
          </div>

          <div className='border border-l-1 h-48 sm:hidden'></div>

          <div className='flex flex-col text-white sm:items-center sm:mt-4'>
            <h6 className='mb-4 font-semibold text-xl sm:mb-1'>Official info:</h6>
            <ul className='text-sm sm:flex sm:flex-col sm:items-center'>
              <li className='mb-1 flex flex-row items-center '><Icon icon="ion:location-sharp" color="white" className='mr-2' />
                30 Commercial Road.</li>
              <li className='flex flex-row items-center '><Icon icon="ri:phone-fill" color="white" className='mr-2' />
                +88 0123456782</li>
              <p className='my-4 text-base sm:my-4'>Subscribe Newsletter</p>
              <div className="mt-6 flex max-w-md sm:relative sm:p-2 sm:mt-0">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input id="email-address" name="email" type="email"  required className="min-w-0 flex-auto rounded-sm border-0 bg-white px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your email" />
                <button type="submit" className="xs:hidden rounded-sm bg-white px-3.5 py-2.5 text-sm font-semibold text-orange-500 shadow-xl hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
              </div>
            </ul>
          </div>

        </div>

      </footer>
    </>
  )
}

export default Footer