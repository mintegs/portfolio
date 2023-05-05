import { motion } from 'framer-motion'
import { i18n, useTranslation } from 'next-i18next'
import Link from 'next/link'
import { FaPaperPlane, FaTelegram } from 'react-icons/fa'

const About = ({ avatar, email }: { avatar: string; email: string }) => {
  const { t } = useTranslation()
  const information = [
    {
      icon: <FaTelegram />,
      key: 'telegram',
      value: 'moonsjs',
    },
    {
      icon: <FaPaperPlane />,
      key: 'email',
      value: 'mohamadresaaa@gmail.com',
    },
  ]

  return (
    <div
      className='section'
      id='about'
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className='my-5 text-center'
      >
        <span className='text-lg md:text-2xl capitalize tracking-widest text-[#38efcd]'>
          {t('sections.about.title')}
        </span>
        <h1 className='text-[1.5rem] md:text-[3rem] capitalize'>
          {t('sections.about.subTitle')}
        </h1>
      </motion.div>

      <div className='grid grid-cols-1 lg:grid-cols-[repeat(2,1fr)] place-items-center relative'>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{
            x: [i18n?.language === 'fa' ? 250 : -250, 0],
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className='md:max-w-[350px] md:h-[350px] justify-self-center shadow-[0_0_20px_#38efcd] rounded-[5px] bg-[#38efcd]'
        >
          <motion.img
            src='https://avatars.githubusercontent.com/u/41260098?v=4'
            alt='mohamadresa'
            className='object-cover w-full h-full'
            whileHover={{
              y: -48,
              x: i18n?.language === 'fa' ? 55 : -55,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          className='text-white bg-slate-400 rounded-md bg-opacity-20 flex flex-col px-6 py-4 md:p-4 mt-8'
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ y: [70, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className='md:text-base text-sm max-w-[450px] mb-4'>
            {t('sections.about.bio')}
          </p>
          {information.map((bio, index) => {
            return (
              <div
                className='flex text-[1rem] max-w-[300px] mb-2 last:mb-0'
                key={index}
              >
                <span
                  className={`${
                    i18n?.language === 'fa' ? 'ml-5 md:ml-12' : 'mr-5 md:mr-12'
                  } flex items-center font-medium gap-2`}
                >
                  {bio.icon}
                  {t(`sections.about.${bio.key}`)}
                </span>
                {bio.key === 'telegram' ? (
                  <Link
                    href={`https://t.me/${bio.value}`}
                    className='hover:text-blue-400'
                    target='_blank'
                  >
                    {bio.value}
                  </Link>
                ) : (
                  <span>{bio.value}</span>
                )}
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default About
