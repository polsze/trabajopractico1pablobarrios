import React from 'react'
import { Icon } from '@iconify/react';
import { motion } from "framer-motion"





const SectionCards = () => {

  const cardsSection = [

    {
      title: "Brand Strategy & Art Direction",
      description: "All the lorem ipsum generators on the internet tend to repeat predefined chunks as necessary",
      icon: "iconoir:book-stack",
      backgroundImage: "bg-fondo-naranja",
      textColor: "text-white",
      bgIcon: "bg-white",
      borderColor: "border-white"
    },
    {
      title: "Website/ App Design UX/ UI Design",
      description: "All the lorem ipsum generators on the internet tend to repeat predefined chunks as necessary",
      bgColor: "white",
      icon: "mingcute:web-line",
      textColor: "text-blue-950",
      bgIcon: "bg-gray-100",
      borderColor: "border-blue-950"
    },
    {
      title: "Marketing and Content Creation",
      description: "All the lorem ipsum generators on the internet tend to repeat predefined chunks as necessary",
      bgColor: "white",
      icon: "fluent:speaker-2-16-regular",
      textColor: "text-blue-950",
      bgIcon: "bg-gray-100",
      borderColor: "border-blue-950"
    },

  ]

  const smallCards = [
    {
      titleSmallCard: "UI/UX Design",
      descriptionSmallCard: "Rrol the inal desiga othe fal dveoprer age you adcased men Mageeef speists",
      iconSmallCard: "ph:pen-nib-light",
      bgIconSmall: "bg-purple-700"
    },
    {
      titleSmallCard: "Web Design",
      descriptionSmallCard: "Rrol the inal desiga othe fal dveoprer age you adcased men Mageeef speists",
      iconSmallCard: "ph:pen-nib-light",
      bgIconSmall: "bg-amber-500"
    },
    {
      titleSmallCard: "Digital Marketing",
      descriptionSmallCard: "Rrol the inal desiga othe fal dveoprer age you adcased men Mageeef speists",
      iconSmallCard: "ph:pen-nib-light",
      bgIconSmall: "bg-rose-500"
    },
  ]

  const tituloCards = "Exploring My Design Expertise"
  

  const sentence = {
    hidden: {
      opacity: 1,
      
    },
    visible: {
      opacity: 1,
      
      
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  }

  const letter = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      
    },
  }

  return (
    <>
      <section className='w-full h-min-screen bg-white' id="services">
        <div className='flex flex-row mt-24 justify-center sm:items-center sm:mt-0 sm:flex-col'>
        <motion.h3
          className="font-bold text-blue-950 text-6xl mb-4 sm:text-2xl"
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              {tituloCards.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                )
              })
              }

            </motion.h3>
          <p className='text-xl ml-4 sm:p-2 sm:text-center'>
            We put your ideas and thus your wishes in the form in a unique<br />web project that inspires you and you customers.
          </p>
        </div>
        <div className='flex justify-center space-x-5 mt-16 sm:mt-4 sm:flex-col sm:items-center sm:space-x-0 sm:space-y-5 lg:space-x-0'>
          {cardsSection.map((info, index) => (
            <div key={index} className={`w-full max-w-sm p-4 flex justify-start flex-col ${info.backgroundImage} ${info.bgColor}
             border-gray-200 rounded-lg shadow-2xl transition ease-in delay-900 sm:p-6 md:p-8 sm:max-w-xs
             hover:shadow-orange-600`}
             >
              <Icon icon={info.icon} className={` w-20 h-20 rounded-full p-3 ${info.bgIcon}`} color="#fc8229" />
              <h3 className={`text-2xl font-bold mt-5 mb-4 ${info.textColor}`}>{info.title}</h3>
              <p className={`text-lg mb-3 ${info.textColor}`} >{info.description}</p>
              <div className="flex items-center  text-lg ">
                <div className={`flex items-center ${info.borderColor}  ${info.textColor} `}>
                  Learn More
                  <Icon icon="octicon:arrow-right-16" className={`ml-2 ${info.textColor}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='w-full flex flex-row items-center justify-center mt-48 ml-24 sm:flex-col sm:ml-0 sm:mt-24 2xl:ml-0'>
          <div className='sm:mb-6'>
            <p className='text-2xl text-orange-500 font-medium'>Services</p>
            <h4 className='text-3xl font-bold text-blue-950'>I Provide Wide Rang<br /> Of Digital Services</h4>
          </div>

          <div className='flex flex-row space-x-5 ml-24 sm:flex-col sm:space-x-0 sm:space-y-5 sm:justify-center sm:items-center sm:ml-0 lg:flex-wrap lg:space-y-4 lg:space-x-0 2xl:flex-col 2xl:space-x-0 2xl:space-y-4'>
            {smallCards.map((infoSmall, index) => (
              <div key={index} className='flex flex-col items-center justify-center max-w-xs p-2 rounded-lg shadow-2xl bg-white px-4
              transition ease-in delay-900 hover:shadow-orange-600'>
                <Icon icon={infoSmall.iconSmallCard} color="white" vFlip={true} className={`w-16 h-16 rounded-full ${infoSmall.bgIconSmall} p-4`} />
                <h5 className='text-center my-4 text-2xl font-semibold'>{infoSmall.titleSmallCard}</h5>
                <p className='text-center mb-4'>{infoSmall.descriptionSmallCard}</p>
              </div>
            ))}

          </div>
        </div>

      </section>
    </>
  )
}

export default SectionCards

