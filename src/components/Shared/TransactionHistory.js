import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const TransactionHistory = () => {

    let [totalTransaction, setTotalTransaction] = useState([]);

    useEffect(() => {
        fetch('transaction.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTotalTransaction(data)
            })
    }, [])

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th className='font-bold text-sm'> No. </th>
                            <th className='font-bold text-sm'> Picture </th>
                            <th className='font-bold text-sm'> Name </th>
                            <th className='font-bold text-sm'> Method </th>
                            <th className='font-bold text-sm'> Time </th>
                            <th className='font-bold text-sm'> Total </th>
                            <th className='font-bold text-sm'> Status </th>
                            <th className='font-bold text-sm'> More </th>
                        </tr>
                    </thead>
                    {
                        totalTransaction.map((data, index) => <tbody>
                            <tr className=''>
                                <td className='font-bold'> {index + 1} </td>
                                <td> <img src={data.img} className='w-10 h-10' alt="" /> </td>
                                <td className='font-semibold'> <i>{data.name}</i> </td>
                                <td className='font-semibold'> {data.method} </td>
                                <td className='font-semibold'> {data.time} </td>
                                <td className='font-semibold'> $ {data.amount} </td>
                                {
                                    data.status === "OK"
                                        ?
                                        <td className='font-semibold'> <i class="fa-solid fa-circle text-[12px] text-green-500 px-1"></i> Completed </td>
                                        :
                                        <td className='font-semibold'> <i class="fa-solid fa-circle text-[12px] text-yellow-500 px-1"></i> Pending... </td>

                                }
                                <td className='pl-8'> <i class="fa-solid fa-caret-down hover:text-green-500 text-2xl text-blue-800"></i> </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default TransactionHistory;