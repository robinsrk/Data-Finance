

const Contact = () => {
  return (
    <>
      <div className="flex flex-col md:items-center py-16 px-8 w-full bg-[#fafafa]">

        <form action="" className="flex flex-col gap-6 w-sceen border-2 px-4 py-8 md:px-20 md:py-10 shadow-2xl rounded-md bg-gray-100">

          <h2 className="text-2xl md:text-3xl font-semibold text-center capitalize mb-4">Leave us your opinion</h2>

          <input type="text" name="name" placeholder="Name" className="p-3 rounded bg-white text-black" />

          <input type="email" name="email" placeholder="Email" className="p-3 rounded bg-white text-black" />

          <input type="text" name="subject" placeholder="Subject" className="p-3 rounded bg-white text-black" />

          <textarea name="message" id="" cols="60" rows="10" placeholder="Message" className="p-3 rounded bg-white text-black"></textarea>

          <button className="text-[#fafafa] mt-2 text-xl font-semibold bg-slate-900 px-10 py-2 rounded-md hover:bg-[#00df9a] transition-all ease-in-out duration-500 w-2/5 mx-auto hover:text-black">Send</button>

        </form>
      </div>
    </>
  )
}

export default Contact