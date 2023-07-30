import Img from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className="py-16 px-8 bg-[#fafafa] flex flex-col md:flex-row md:justify-center md:px-16 md:py-24 md:gap-4 w-full h-full">
        <div className='w-full md:w-1/2 md:flex md:items-center'>
          <img src={Img} alt="img" className='w-3/4 h-4/5' />
        </div>

        <div className='pt-8 w-full md:w-1/2'>
            <p className='font-bold uppercase text-[#00df9a] text-sm'>Data Analytics Dashboard</p>
            <h1 className='text-black font-bold text-2xl py-2 md:text-3xl md:py-3'>Manage Data Analytics Centrally</h1>
            <p className='text-black font-medium text-sm md:text-lg md:font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sequi sunt! Quidem quaerat ducimus nihil nostrum magni impedit aperiam at sint rem. Laudantium voluptate tempore blanditiis ea. Adipisci, ratione similique.
            </p>
            <button className="text-lg font-semibold py-2 bg-black w-1/3 text-center mt-6 rounded-md text-[#00df9a] cursor-pointer hover:bg-[#00df9a] hover:text-black transition-all ease-in-out duration-700 md:mt-8">Get Started</button>
        </div>
    </div>
  )
}

export default Analytics