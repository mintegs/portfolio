import { motion } from 'framer-motion'
import { i18n, useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Home = () => {
  const { t } = useTranslation()
  const [user, setUser] = useState<any>(null)

  const getUser = async () => {
    const response = await fetch('https://api.github.com/users/mohamadresaaa', {
      headers: {
        authorization: `Bearer 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`,
      },
    }).then((response) => response.json())

    // update the state
    setUser(response)
  }

  useEffect(() => {
    getUser()
    console.log('user', user)
  }, [])

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
      <div className='w-[150px] h-[150px]'>
        <Image
          width={240}
          height={240}
          className='w-full h-full object-cover rounded-[50%]'
          src='https://avatars.githubusercontent.com/u/41260098?v=4'
          alt='mohamadresaaa'
        />
      </div>
      <div className='flex flex-col items-center relative mt-4'>
        <h3 className='text-white text-lg md:text-[2rem] capitalize'>
          {t('sections.home.hi_im')}{' '}
          <span className='text-[#38efcd]'>
            {t('sections.home.mohamadresa')}
          </span>{' '}
          {i18n?.language === 'fa' ? 'هستم' : null}
        </h3>
        <span
          className={`${
            i18n?.language === 'fa'
              ? 'text-[1.5rem] leading-[1.8] md:text-[2.5rem] md:leading-[1.3]'
              : 'text-[2.5rem] leading-[1.3]'
          } text-white text-center lg:text-[5rem] mt-8`}
        >
          {t('sections.home.subTitle.passionate')}
          <br /> {t('sections.home.subTitle.to_craft_innovative')} <br />
          {t('sections.home.subTitle.web_products')}
        </span>
        <motion.div
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate='animation'
          className='absolute capitalize hidden md:block text-gray-600 font-bold text-[0.85rem] cursor-pointer px-4 py-[0.35rem] rounded-[25px] bg-[#38efcd] right-[-1rem] top-14'
        >
          {t('sections.home.words.backend_developer')}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate='animation'
          className='absolute capitalize hidden md:block text-gray-600 font-bold text-[0.85rem] cursor-pointer px-4 py-[0.35rem] rounded-[25px] bg-[#38efcd] lg:left-5 md:-left-5 lg:top-12 md:top-14'
        >
          {t('sections.home.words.frontend_developer')}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate='animation'
          className='absolute capitalize hidden md:block text-gray-600 font-bold text-[0.85rem] cursor-pointer px-4 py-[0.35rem] rounded-[25px] bg-[#38efcd] left-0 -bottom-10'
        >
          {t('sections.home.words.freelancer')}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home
