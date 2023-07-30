
import { CardComponent } from "./CardComponents"

const Cards = () => {
  return (
    <div className="py-16 px-8 bg-[#fafafa] md:grid md:grid-cols-3 gap-8 md:py-24 md:px-16">
        {
            CardComponent.map((items, index) => {
                const {img, user, price, storage, permission, amount} = items;
                return(
                    <div key={index}>
                        <div className="flex flex-col items-center py-12 my-8 shadow-xl hover:scale-110 transition-all ease-in-out duration-700 bg-white hover:cursor-pointer">
                            <img src={img} alt="img" className="w-16 h-auto" />
                            <h1 className="my-4 font-bold text-xl md:text-2xl"> {user} </h1>
                            <h1 className="font-bold text-3xl mt-2"> {price} </h1>
                            <div className="mt-6 text-center font-medium w-4/5">
                                <p className="py-2 capitalize border-b border-t px-8"> {storage} </p>
                                <p className="py-2 capitalize border-b px-8"> {permission} </p>
                                <p className="py-2 capitalize border-b px-8"> {amount} </p>
                            </div>
                            <button className="mt-6 bg-[#00df9a] text-black px-8 py-2 rounded font-semibold hover:bg-black hover:text-white hover:cursor-pointer transition-all ease-in-out duration-700">Start Trial</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Cards