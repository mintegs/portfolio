import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BsMedium } from 'react-icons/bs'
import { FaDribbble, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { HiMenuAlt4, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [scroll, setScroll] = useState(false)
  const [toggle, setToggle] = useState(false)

  const navLinks = ['home', 'about', 'skills', 'articles']

  const socials = [
    {
      url: 'https://instagram.com/mohamadresaaa',
      icon: (
        <FaInstagram className='cursor-pointer w-5 h-5 text-white opacity-60 transition-[0.3s] z-[5] hover:opacity-100' />
      ),
    },
    {
      url: 'https://github.com/mohamadresaaa',
      icon: (
        <FaGithub className='cursor-pointer w-5 h-5 text-white opacity-60 transition-[0.3s] z-[5] hover:opacity-100' />
      ),
    },
  ]

  const socialIcons = [
    <FaDribbble className='cursor-pointer text-white opacity-60 transition-[0.3s] z-[5] hover:opacity-100' />,
    ,
    <FaLinkedin className='cursor-pointer text-white opacity-60 transition-[0.3s] z-[5] hover:opacity-100' />,
    <BsMedium className='cursor-pointer text-white opacity-60 transition-[0.3s] z-[5] hover:opacity-100' />,
  ]

  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: 'tween',
        duration: 0.5,
      },
    },
  }

  const navLinkVariants = {
    hidden: {
      display: 'none',
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.7,
      },
    },
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 20)
    })
  }, [])

  return (
    <motion.div
      initial={{ y: -25 }}
      animate={{ y: -5 }}
      className={
        scroll
          ? 'fixed w-full top-0 left-0 z-10 header_active'
          : 'fixed w-full top-0 left-0 z-10'
      }
    >
      <div className='relative max-w-[1224px] flex justify-between items-center mx-auto px-8 py-[1.2rem]'>
        <Link
          href='/'
          className='logo'
        >
          <h3>M</h3>
        </Link>
        <ul className='hidden md:flex'>
          {navLinks.map((navlink, index) => {
            return (
              <li
                className='ml-4 text-lg text-gray-400 hover:text-white capitalize'
                key={index}
              >
                <Link href={`${navlink === 'home' ? '/' : `/#${navlink}`}`}>
                  {navlink}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className='flex'>
          {socials.map((item, index) => {
            return (
              <a
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
                className='ml-4'
                key={index}
              >
                {item.icon}
              </a>
            )
          })}
        </div>
        <div className='relative flex items-center justify-center md:hidden cursor-pointer rounded-[50%]'>
          <HiMenuAlt4
            className='w-10 h-10'
            onClick={() => {
              setToggle(true)
            }}
          />
        </div>
        <motion.div
          className='w-16 h-16 fixed rounded-[50%] right-0 top-0 bg-slate-800'
          variants={menuVariants}
          initial='hidden'
          animate={toggle ? 'visible' : 'hidden'}
        ></motion.div>

        <motion.div
          variants={navLinkVariants}
          animate={toggle ? 'visible' : 'hidden'}
          className={`text-white fixed w-full flex items-center justify-center flex-col h-screen left-0 top-8`}
        >
          <HiX
            className={`${
              toggle ? 'flex' : 'hidden'
            } cursor-pointer w-10 h-10 absolute right-10 top-8`}
            onClick={() => setToggle(false)}
          />

          {navLinks.map((navlink, index) => {
            return (
              <li
                className='mt-4 list-none'
                key={index}
              >
                <Link
                  className={`${
                    toggle ? 'flex' : 'hidden'
                  } no-underline uppercase text-white text-2xl opacity-60 transition-all duration-[0.3s] ease-[ease] hover:opacity-100`}
                  href={`${navlink === 'home' ? '/' : `#${navlink}`}`}
                  onClick={() => setToggle(false)}
                >
                  {navlink}
                </Link>
              </li>
            )
          })}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Navbar
