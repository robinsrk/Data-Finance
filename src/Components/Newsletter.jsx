
const Newsletter = () => {
  return (
    <div className="py-16 px-8 md:py-24 md:px-16 text-white md:flex md:gap-4">
        <div className="lg:w-[60vw] md:w-[55vw] lg:mr-4">
            <h1 className="text-xl md:text-3xl font-bold"> Want tips and tricks to potimize your flow? </h1>
            <p className="py-2"> Sign up to our newsletter and stay up to date. </p>
        </div>
        
        <div className="lg:w-[40vw] md:w-[45vw]">
            <form className="lg:flex lg:gap-4 w-full md:flex md:flex-col md:gap-4 lg:flex-row">
                <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-md my-4 text-black md:my-0" />

                <button className="text-base lg:text-lg font-semibold py-2 lg:px-2 bg-[#00df9a] w-1/3 text-center rounded-md text-black cursor-pointer hover:bg-white transition-all ease-in-out duration-700 md:w-full">Notify me</button>
            </form>
            
            <p className="py-2 text-sm">We care about the protection of your data. Read our <span className="text-[#00df9a]"><a href="">Privay policy</a></span></p>
            
        </div>
    </div>
  )
}

export default Newsletter