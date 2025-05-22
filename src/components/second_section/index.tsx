
import FirstBoard from '../firstBoard'
import SecondBoard from '../secondBoard'
import ThirdBoard from '../ThirdBoard'
import FourthBoard from '../fourthBoard'
import FifthBoard from '../fifthBoard'
import SixthBoard from '../sixthBoard'
import {motion} from 'framer-motion'

const SecondSection = () => {
  return (
    <div className='flex flex-col gap-5 w-full h-full min-h-[100vh] bg-black p-6'>

      <motion.div   initial={{ opacity: 0, x: 50 }}
         whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.4 }}>
        <FirstBoard/>
      </motion.div >
        <motion.div    initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.4 }}>
        <SecondBoard/>
        </motion.div>
        <motion.div    initial={{ opacity: 0, x: 50 }}
         whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.4 }}>
        <ThirdBoard/>
        </motion.div>
        <motion.div    initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.4 }}>
        <FourthBoard/>
        </motion.div>
        <motion.div    initial={{ opacity: 0, x: 50 }}
         whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.4 }}>
        <FifthBoard/>
        </motion.div>
        <motion.div    initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.4 }}>
        <SixthBoard/>
        </motion.div>

    </div>
  )
}

export default SecondSection