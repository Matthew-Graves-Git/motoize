const InfoContainer = () => {
    return ( 
        <div className='lg:w-auto h-auto w-screen min-w-[600px] flex items-center justify-center absolute top-0 lg:top-20 lg:left-60 bg-opacity-80 bg-gray-300'>
            <div className='flex flex-col gap-8 p-10 lg:items-start items-center w-[582px]'>
                <h1 className='text-4xl font-bold '>
                        Built for the great outdoors,<br/> ready for every adventure.
                </h1>
                <p className='text-base max-w-[60ch]'>
                    Subaru is your trusted companion for exploring winding trails, 
                    tackling rugged terrains, or embarking on cross-country road trips. 
                    Whether you're chasing mountain peaks, venturing into the forest, 
                    or simply seeking the open road, Subaru is built to take you there—and beyond.
                </p>
                <span className='flex w-full h-full items-center gap-5 '>
                    <button className='bg-green-900 font-bold text-white px-5 py-2.5 rounded-sm hover:cursor-pointer hover:bg-green-950'>
                            Build Yours
                    </button>
                    <button className=' font-bold px-5 py-2 border-2 border-gray-900 rounded-sm hover:cursor-pointer hover:bg-white'>
                            Explore
                    </button>
                </span>
            </div>
        </div>
     );
}
 
export default InfoContainer;