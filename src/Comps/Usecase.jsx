import { Link } from "react-router-dom";

const Usecase = () => {
    return (
        <div className="bg-black text-white p-6 mt-20">

            <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
                {/* The Problem Box */}
                <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-2">The Problem</h1>
                    <h2 className="text-xl text-gray-400 mb-4">Scams & Uncertainty</h2>
                    <p className="text-lg">
                        The NFT market is booming. If you are buying or planning to buy NFTs, be careful not to fall for scams.
                        Many people have lost money on fake NFTs. In fact, recent reports show that about 30% of NFT buyers have been scammed.
                        Always check if an NFT is authentic before you purchase it.
                    </p>
                </div>

                {/* The Solution Box */}
                <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-2">The Solution</h1>
                    <h2 className="text-xl text-gray-400 mb-4">Quick, Reliable NFT Verification</h2>
                    <p className="text-lg">
                        This is why I plan to build software to solve this problem. Checking whether an NFT is authentic can be time-consuming and overwhelming.
                        With this software, you can quickly verify NFTs and get all the information you need.
                        This way, you can make better, more confident decisions before buying.
                    </p>
                </div>

                {/* Why I Build Box */}
                <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-2">Why I Build</h1>
                    <h2 className="text-xl text-gray-400 mb-4">The Action</h2>
                    <p className="text-lg">
                        While building an NFT marketplace, I discovered a big problem: scams. I read many articles and saw how scams make people lose money
                        and fear NFTs—even though they’re amazing. That’s why I decided to build a simple tool to quickly check if an NFT is real.
                        If you believe this can help you avoid scams and make smarter choices, click the Get Started button.
                    </p>
                    <Link to = "/Main"><button className="mt-10 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">Get Started</button></Link>

                </div>
            </div>
        </div>
    );
}

export default Usecase;
