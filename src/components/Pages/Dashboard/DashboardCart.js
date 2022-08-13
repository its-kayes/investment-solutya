import React from 'react';
import "./DashboardCart.css";

export default function DashboardCart() {
    return (
        // <div className='grid hover:bg-black hover:text-white text-black bg-slate-300 border-2 h-[250px] w-[250px] rounded-xl px-8'>
        //     <div className='flex justify-between text-xl pt-4 px-2'>
        //         <div className='pt-8'>
        //             <i class="flex items-center fa-solid fa-money-check p-5 rounded-full hover:bg-[#00FF00] bg-slate-500"></i>
        //         </div>
        //         <i class="fa-solid fa-ellipsis-vertical"></i>
        //     </div>
        //     <div className='gird '>
        //         <i className='text-2xl font-semibold ' > Total Balance </i>
        //         <i className='text-3xl font-bold mt-4'> $3140.74 </i>
        //     </div>
        // </div>
        <div className='grid grid-cols-3 gap-6 justify-center'>

            <p target='_blank' className=' bg-[#1F2937] flex pl-5 pr-20 py-3 items-center rounded-lg border-r-2 border-[#8C2242] hover:bg-[#2F2030] contactCard'>
                <div className='pr-5'>
                    <i class="text-[#8C2242] text-4xl fa-solid fa-money-check"></i>
                </div>
                <div className='grid grid-cols-1'>
                    <span className='justify-start text-xl font-semibold text-white'> Total Balance </span>
                    <span className='text-[#8892B0]'> $321.201 </span>
                </div>
            </p>
            <p target='_blank' className=' bg-[#1F2937] flex pl-5 pr-20 py-3 items-center rounded-lg border-r-2 border-[#747474] hover:bg-[#2B303A] contactCard'>
                <div className='pr-5'>
                    <i class="text-[#4B7DE0] text-4xl fa-solid fa-user-plus "></i>
                </div>
                <div className='grid grid-cols-1'>
                    <span className='justify-start text-xl font-semibold text-white'>User Referred</span>
                    <span className='text-[#8892B0]'> 10 </span>
                </div>
            </p>
            <p target='_blank' className=' bg-[#1F2937] flex pl-5 pr-20 py-3 items-center rounded-lg border-r-2 border-[#0077B5] hover:bg-[#1D2D46] contactCard'>
                <div className='pr-5'>
                    <i class="text-[#0077B5] text-4xl fa-solid fa-hand-holding-dollar "></i>
                </div>
                <div className='grid grid-cols-1'>
                    <span className='justify-start text-xl font-semibold text-white'>Referral Income</span>
                    <span className='text-[#8892B0]'> $109.27 </span>
                </div>
            </p>
            <p target='_blank' className=' bg-[#1F2937] flex pl-5 pr-20 py-3 items-center rounded-lg border-r-2 border-[#4B7DE0] hover:bg-[#23324E] contactCard'>
                <div className='pr-5'>
                    <i class="text-[#747474] text-4xl fa-brands fa-bitcoin"></i>
                </div>
                <div className='grid grid-cols-1'>
                    <span className='justify-start text-xl font-semibold text-white'>24 Hours Income</span>
                    <span className='text-[#8892B0]'> $59.17 </span>
                </div>
            </p>
            <p target='_blank' className=' bg-[#1F2937] flex pl-5 pr-20 py-3 items-center rounded-lg border-r-2 border-[#6E83CB] hover:bg-[#2A334A] contactCard'>
                <div className='pr-5'>
                    <i class="text-[#6E83CB] text-4xl fa-solid fa-hands-holding-child"></i>
                </div>
                <div className='grid grid-cols-1'>
                    <span className='justify-start text-xl font-semibold text-white'>Total Project User</span>
                    <span className='text-[#8892B0]'> 1999+ </span>
                </div>
            </p>
           
        </div>
    )
}
