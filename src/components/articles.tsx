import { motion } from 'framer-motion'
import Link from 'next/link'
import { MdOutlineChevronRight } from 'react-icons/md'
import { textVariant } from '../lib/motion'
import ArticleCard from './cards/articleCard'

const Articles = () => {
  return (
    <div
      className='flex flex-col items-center min-h-screen pt-[7rem] pb-0 px-0 md:px-6'
      id='articles'
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className='my-5 text-center'
      >
        <span className='text-lg md:text-2xl capitalize tracking-widest text-[#38efcd]'>
          education
        </span>
        <h1 className='text-[1.5rem] md:text-[3rem] capitalize'>my articles</h1>
      </motion.div>

      <div className={`mt-12 bg-black-100 rounded-t-md`}>
        <div
          className={`bg-neutral-900 rounded-t-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <Link
              href='/articles'
              className='text-white font-black text-2xl capitalize flex items-center hover:text-gray-300'
            >
              More articles
              <MdOutlineChevronRight className='w-10 h-10' />
            </Link>
          </motion.div>
        </div>
        <div
          className={`-mt-20 pb-14 sm:px-16 px-6 flex flex-wrap gap-7 bg-neutral-900 bg-opacity-40 rounded-b-md`}
        >
          {[1, 2, 3].map((item, index) => (
            <ArticleCard
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Articles
