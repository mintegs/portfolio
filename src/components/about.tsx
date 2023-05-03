import { motion } from 'framer-motion'
import { FaPaperPlane, FaPhoneAlt, FaUser } from 'react-icons/fa'

const About = () => {
  const information = [
    {
      id: 1,
      icon: <FaUser />,
      key: 'Name',
      value: 'Mohamadresa',
    },
    {
      id: 2,
      icon: <FaPhoneAlt />,
      key: 'Phone',
      value: '+98912 142 5458',
    },
    {
      id: 3,
      icon: <FaPaperPlane />,
      key: 'Email',
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
          Who Am I?
        </span>
        <h1 className='text-[1.5rem] md:text-[3rem] capitalize'>About Me</h1>
      </motion.div>

      <div className='grid grid-cols-1 lg:grid-cols-[repeat(2,1fr)] place-items-center relative'>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className='md:max-w-[350px] md:h-[350px] justify-self-center shadow-[0_0_20px_#38efcd] rounded-[5px] bg-[#38efcd]'
        >
          <motion.img
            src='https://avatars.githubusercontent.com/u/41260098?v=4'
            className='object-cover w-full h-full'
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          className='text-white bg-slate-400 rounded-md bg-opacity-20 flex flex-col px-6 py-4 md:p-4 mt-8'
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ y: [80, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className='text-base max-w-[450px] mb-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            at rem, tenetur ad ipsa sequi, optio eius laudantium vero minus
            maxime laborum est et nemo consequatur nostrum distinctio sed, nulla
            doloribus officiis ea eligendi explicabo.
          </p>
          {information.map((bio) => {
            return (
              <div
                className='flex text-[1rem] max-w-[300px] mb-4 last:mb-0'
                key={bio.id}
              >
                <span className='flex items-center font-medium gap-2 mr-5 md:mr-12'>
                  {bio.icon}
                  {bio.key}
                </span>
                <span>{bio.value}</span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default About
