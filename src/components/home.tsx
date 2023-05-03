import { motion } from 'framer-motion'
import Image from 'next/image'

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  }

  return (
    <motion.div
      className='section'
      id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className='w-[110px] h-[110px]'>
        <Image
          width={240}
          height={240}
          className='w-full h-full object-cover rounded-[50%]'
          src='https://avatars.githubusercontent.com/u/41260098?v=4'
          alt='mohamadresaaa'
        />
      </div>
      <div className='flex flex-col items-center relative mt-4'>
        <h3 className='text-white text-xl md:text-[2rem]'>
          Hi, I'm <span className='text-[#38efcd]'>MohamadResa</span>{' '}
        </h3>
        <span className='text-white text-center text-[3rem] lg:text-[5rem] leading-[1.3] mt-8'>
          Passionate
          <br /> to craft innovative <br /> web products.
        </span>
        <motion.div
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate='animation'
          className='absolute capitalize hidden md:block text-gray-600 font-bold text-[0.85rem] cursor-pointer px-4 py-[0.35rem] rounded-[25px] bg-[#38efcd] right-[-1rem] top-14'
        >
          Backend developer
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate='animation'
          className='absolute capitalize hidden md:block text-gray-600 font-bold text-[0.85rem] cursor-pointer px-4 py-[0.35rem] rounded-[25px] bg-[#38efcd] lg:left-5 md:-left-5 lg:top-12 md:top-14'
        >
          frontend developer
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate='animation'
          className='absolute capitalize hidden md:block text-gray-600 font-bold text-[0.85rem] cursor-pointer px-4 py-[0.35rem] rounded-[25px] bg-[#38efcd] left-0 -bottom-10'
        >
          freelancer
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home
