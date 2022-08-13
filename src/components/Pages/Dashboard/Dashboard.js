import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
// import userDetails from "userDetails.json";
import { PieChart, Pie, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import PieCharts from '../../Shared/PieCharts';
import TransactionHistory from '../../Shared/TransactionHistory';
import DashboardButton from './DashboardButton';
import DashboardCart from './DashboardCart';


const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];

const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
];



const Dashboard = () => {

    let [userDetails, setUserDetails] = useState();
    let [year, setYear] = useState(2022)

    useEffect(() => {
        fetch('userDetails.json')
            .then(res => res.json())
            .then(datax => {
                // console.log(datax);
                setUserDetails(datax);
            });
    }, [])

    console.log(year)

    return (
        <div className=''>
            <div className='flex my-2'>
                <div className='w-3/4'>
                    <div className='flex justify-evenly bg-[#FFBB28] py-20 rounded-2xl  w-full'>
                        {/* <div className='grid hover:bg-black hover:text-white text-black bg-slate-300 border-2 h-[250px] w-[250px] rounded-xl px-8'>
                            <div className='flex justify-between text-xl pt-4 px-2'>
                                <div className='pt-8'>
                                    <i class="flex items-center fa-solid fa-money-check p-5 rounded-full hover:bg-[#00FF00] bg-slate-500"></i>
                                </div>
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                            <div className='gird '>
                                <i className='text-2xl font-semibold ' > Total Balance </i>
                                <i className='text-3xl font-bold mt-4'> $3140.74 </i>
                            </div>
                        </div>

                        <div className='grid hover:bg-black hover:text-white text-black bg-slate-300 border-2 h-[250px] w-[250px] rounded-xl px-8'>
                            <div className='flex justify-between text-xl pt-4 px-2'>
                                <div className='pt-8'>
                                    <i class="flex items-center fa-brands fa-bitcoin p-5 rounded-full hover:bg-[#00FF00] bg-slate-500"></i>
                                </div>
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                            <div className='gird '>
                                <i className='text-2xl font-semibold ' > Total Spending </i>
                                <i className='text-3xl font-bold mt-4'> $420.74 </i>
                            </div>
                        </div>
                        <div className='grid hover:bg-black hover:text-white text-black bg-slate-300 border-2 h-[250px] w-[250px] rounded-xl px-8'>
                            <div className='flex justify-between text-xl pt-4 px-2'>
                                <div className='pt-8'>
                                    <i class="flex items-center fa-solid fa-hand-holding-dollar p-5 rounded-full hover:bg-[#00FF00] bg-slate-500"></i>
                                </div>
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                            <div className='gird '>
                                <i className='text-2xl font-semibold ' > Total Saved </i>
                                <i className='text-3xl font-bold mt-4'> $540.74 </i>
                            </div>
                        </div> */}
                        <DashboardCart />
                    </div>
                    <div className='my-14 bg-[#0A182E] text-white py-10 rounded-2xl'>
                        <div className='flex justify-between text-2xl font-bold pb-10 px-10'>
                            <i> Overview </i>
                            <i> <i onClick={() => (setYear((pre) => pre - 1))} class="fa-solid fa-caret-left"></i> <input className='pl-3 w-20 rounded-xl text-white' disabled value={year} />  <i onClick={() => (setYear((pre) => pre + 1))} class="fa-solid fa-caret-right"></i> </i>
                        </div>
                        {/* const renderBarChart = ( */}
                        <BarChart width={1100} height={350} data={userDetails}>
                            <XAxis dataKey="name" stroke="#8884d8" />
                            <YAxis stroke="#8884d8" />
                            <Tooltip wrapperStyle={{ width: 150, backgroundColor: '#ccc' }} />
                            {/* cursor={{fill: '#00FF00'}} */}
                            {/* <Legend width={50} height={40} className='mx-10' wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} /> */}
                            {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
                            <Bar dataKey="Investment" fill="#8884d8" barSize={40} />
                        </BarChart>
                        {/* ); */}
                    </div>
                </div>
                <div className='m-3'>
                    <div className='rounded-xl border-2 bg-[#0A182E] text-white'>
                        <div className=''>
                            <div className='flex text-3xl font-bold  items-center justify-between  p-4'>
                                <i> Activity </i>
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>
                            <div>
                                <PieCharts />
                            </div>
                            <div className='flex justify-center '>
                                <div class="card w-full shadow-xl border-t-4 border-blue-400 bg-[#0A182E] text-white">
                                    <div class="card-body text-[#8884d8]">
                                        <h2 class="text-2xl font-bold text-white">Comparison (Month)!</h2>
                                        <p className='font-semibold'>This Month <span className='font-bold'> $300.292 </span></p>
                                        <p className='font-semibold'>Last Month <span className='font-bold'> $400.832 </span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Button Section  */}
            <div className='flex justify-center mb-28 mt-10 bg-[#FFBB28] py-20'>
                <DashboardButton />
            </div>

            <p className='text-2xl font-bold text-center mb-10'> <i>Transaction History</i> </p>
            <div>
                <TransactionHistory />
            </div>

        </div>
    );
};

export default Dashboard;