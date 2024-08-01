import OtherH from "./OtherH";

const Banner = () => {
    return(
    <div className="">
        <div className="banner w-full h-[500px] rounded-xl mt-9 mb-5">
            <div className=" pt-40">
                <h3 className="text-3xl text-white justify-center lg:pl-96 md:pl-36 sm:pl-20">Discover an exceptional cooking <br /> class tailored for you!</h3>
                <p className="text-sm text-white justify-center lg:pl-96 md:pl-36 sm:pl-20">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
            </div>
            <div className="">
                <button className="border-none text-white bg-green-400 p-3 rounded-md justify-center lg:ml-96 md:ml-36 sm:ml-20">Explore Now</button>
                <button className="p-3 text-white rounded-md justify-center pl-1 border-gray-50">Our Feedback</button>
            </div>
        </div>
        <OtherH></OtherH>
    </div>
    )
}
export default Banner;