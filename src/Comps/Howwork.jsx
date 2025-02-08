const Howwork = () => {
    return (
        <div className="bg-black text-white p-6">
            <h1 className="font-bold text-left mb-10 text-3xl md:text-4xl lg:text-4xl tracking-wide">
                How it Works
            </h1>

            <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
                
                {/* Step 1: Provide NFT Details */}
                <div className="flex-1 bg-gradient-to-r from-indigo-900 to-purple-800 p-6 rounded-lg shadow-lg 
                    transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-400">
                    <h1 className="text-2xl font-bold mb-2">Provide NFT Details</h1>
                    <ul className="list-disc list-inside text-lg md:text-base lg:text-lg">
                        <li>Simply enter the NFT details or paste its link</li>
                        <li>This tells our tool which NFT to check for scams</li>
                    </ul>
                </div>

                {/* Step 2: Check for Scams */}
                <div className="flex-1 bg-gradient-to-r from-purple-800 to-pink-600 p-6 rounded-lg shadow-lg 
                    transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-400">
                    <h1 className="text-2xl font-bold mb-2">Check for Scams</h1>
                    <ul className="list-disc list-inside text-lg md:text-base lg:text-lg">
                        <li>It looks for signs of scams in the NFT's details</li>
                        <li>You get a clear result in seconds</li>
                    </ul>
                </div>

                {/* Step 3: Buy with Confidence */}
                <div className="flex-1 bg-gradient-to-r from-green-700 to-teal-600 p-6 rounded-lg shadow-lg 
                    transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-400">
                    <h1 className="text-2xl font-bold mb-2">Buy with Confidence</h1>
                    <ul className="list-disc list-inside text-lg md:text-base lg:text-lg">
                        <li>Verified & Analyzed NFT</li>
                        <li>Essential Details Before Buying</li>
                        <li>Considerations for a Safe Purchase</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Howwork;
