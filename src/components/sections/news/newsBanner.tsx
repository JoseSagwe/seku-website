const NewsBanner = () => {
    return (
        <div className="relative w-full h-80">
            <img
                src="/images/events/ieee-seku.png"
                alt="Event Banner"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div
                className="absolute inset-0 bg-black opacity-50"
                aria-hidden="true"
            ></div>

            <div className="absolute inset-0 bg-transparent bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-4xl font-bold">LATEST NEWS</h2>
                <p className="text-lg mt-2">
                    <span className="text-gray-300">Home</span> // <span className="text-white">updated with our latest stories</span>
                </p>
            </div>
        </div>
    );
};

export default NewsBanner;
