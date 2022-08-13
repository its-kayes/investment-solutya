import React from 'react';

const Carousel = () => {
    return (
        // <div>
        //     <div id="indicators-carousel" class="relative" data-carousel="static">
        //         {/* <!-- Carousel wrapper --> */}
        //         <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        //             {/* <!-- Item 1 --> */}
        //             <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="active">
        //                 <img src="https://i.ibb.co/Qm4pDtR/Screenshot-175.png" alt="..." />
        //             </div>
        //             {/* <!-- Item 2 --> */}
        //             <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
        //                 <img src="https://i.ibb.co/Qm4pDtR/Screenshot-175.png" alt="..." />
        //             </div>
        //             {/* <!-- Item 3 --> */}
        //             <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
        //                 <img src="https://i.ibb.co/Qm4pDtR/Screenshot-175.png" alt="..." />
        //             </div>
        //             {/* <!-- Item 4 --> */}
        //             <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
        //                 <img src="https://i.ibb.co/Qm4pDtR/Screenshot-175.png" alt="..." />
        //             </div>
        //             {/* <!-- Item 5 --> */}
        //             <div class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
        //                 <img src="https://i.ibb.co/Qm4pDtR/Screenshot-175.png" alt="..." />
        //             </div>
        //         </div>
        //         {/* <!-- Slider indicators --> */}
        //         <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        //             <button type="button" class="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        //             <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        //             <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        //             <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        //             <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        //         </div>
        //         {/* <!-- Slider controls --> */}
        //         <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
        //             <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //                 <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        //                 <span class="sr-only">Previous</span>
        //             </span>
        //         </button>
        //         <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
        //             <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //                 <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        //                 <span class="sr-only">Next</span>
        //             </span>
        //         </button>
        //     </div>

        // </div>
        <div>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full h-2/4">
                    <img src="investment-1.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full h-2/4">
                    <img src="investment-1.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full h-2/4">
                    <img src="investment-1.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full h-2/4">
                    <img src="investment-1.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;