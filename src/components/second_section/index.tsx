
import FirstBoard from '../firstBoard'
import SecondBoard from '../secondBoard'
import ThirdBoard from '../ThirdBoard'
import FourthBoard from '../fourthBoard'
import FifthBoard from '../fifthBoard'
import SixthBoard from '../sixthBoard'

const SecondSection = () => {
  return (
    <div className='flex flex-col gap-5 w-full h-full min-h-[100vh] bg-black p-6'>
        <FirstBoard/>
        <SecondBoard/>
        <ThirdBoard/>
        <FourthBoard/>
        <FifthBoard/>
        <SixthBoard/>

    </div>
  )
}

export default SecondSection