import Myimage from '../../public/Myimage.webp';

const About = () => {
    return (
        <div className='flex items-center justify-between px-6 py-4 flex-wrap'>
            <div className="mb-20 flex justify-center">
                <img
                    src={Myimage}
                    alt="myimage"
                    className="rounded-full border-4 border-red-800 shadow-lg w-64 sm:w-48 md:w-64 lg:w-80 h-64 sm:h-48 md:h-64 lg:h-80 object-cover mt-20"
                />
            </div>
            <div className="flex flex-col items-center sm:items-start w-full md:w-1/2 space-y-6">
                <h1 className="text-3xl sm:text-4xl font-semibold">
                    Hi, I’m <span className="text-red-800">Hari</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-semibold"> a self-taught programmer</h2>
                <p className="text-lg sm:text-xl">
                    I love building software that helps solve real problems. My goal is to create tools that save time and solve huge pain points. 
                    I believe the best software is the kind that addresses everyday challenges people face, and that’s what keeps me motivated to learn and build.
                </p>
            </div>
        </div>
    );
};

export default About;
