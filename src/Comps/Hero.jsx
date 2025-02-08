import {Link} from 'react-router-dom'
import Nav from './Nav';



const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center w-full fullherosection">
            <Nav/>
            <div className="px-4 py-6 mb-15">
            <div>
                <h1 className="text-2xl font-bold ssm:text-base sm:text-3xl md:text-4xl lg:text-4xl">
                    Verify <span className="text-3xl font-bold ssm:text-base sm:text-4xl md:text-5xl lg:text-5xl text-red-500">NFT</span> Authenticity in Seconds
                </h1>
                <p className="text-sm ssm:text-xs sm:text-sm md:text-lg lg:text-xl mt-4">This Software Helps You Make Better Decisions and Avoid NFT Scams!</p>

                <Link to = "/main"><button className="mt-10 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">Unlock Full Access for $10</button></Link>
            </div>

            <div>
             
            </div>

            </div>
        </div>
    );
}

export default Hero;
