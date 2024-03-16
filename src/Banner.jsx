const Banner = () => {
    return(
        <div className="banner w-full h-[500px] rounded-xl mt-9">
            <div className=" pt-40">
                <h3 className="text-3xl text-white justify-center pl-96">Discover an exceptional cooking <br /> class tailored for you!</h3>
                <p className="text-sm text-white justify-center pl-96">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
            </div>
            <div className="">
                <button className="border-none text-white bg-green-400 p-3 rounded-md justify-center ml-96">Explore Now</button>
                <button className="p-3 text-white rounded-md justify-center pl-1 border-gray-50">Our Feedback</button>
            </div>
        </div>
    )
}
export default Banner;