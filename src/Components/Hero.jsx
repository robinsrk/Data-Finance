import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center h-screen px-2">
        <p className="text-[#00df9a] uppercase font-semibold py-2 tracking-wide sm:text-lg">Growing with data analytics.</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Grow with data.</h1>
        <div>
            <p className="text-lg sm:text-xl mt-2 sm:mt-3 md:text-2xl font-semibold md:mt-4 flex">Fast, flexible finance for
              <span className='pl-1 text-[#00df9a]'>
                <Typewriter 
                  options={{
                    strings: ['B2B', 'SAAS', 'D2C'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span> 
            </p>
        </div>
        <div className="py-4 flex flex-col gap-8 sm:gap-10">
            <p className="text-gray-500 text-center font-semibold sm:text-lg">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
            <button className="text-lg font-semibold py-2 bg-[#00df9a] w-1/3 text-center mx-auto rounded-md text-black cursor-pointer hover:bg-[#fafafa] transition-all ease-in-out duration-700">Get Started</button>
        </div>
    </div>
  )
}

export default Hero