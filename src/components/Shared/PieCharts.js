import React from 'react';
import { PieChart, Cell, Pie, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data01 = [
    { name: 'Online Shop', value: 3.20 },
    { name: 'Tax ', value: 1.321 },
    { name: 'Food ', value: 1.21 },
    // { name: 'Group D', value: 200 },
    // { name: 'Group E', value: 278 },
    // { name: 'Group F', value: 189 },
];

const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
];

const data = [
    // { name: 'Group A', value: 400 },
    // { name: 'Group B', value: 300 },
    // { name: 'Group C', value: 300 },
    // { name: 'Group D', value: 200 },
    { name: 'Online Shop', value: 3.20 },
    { name: 'Tax ', value: 1.321 },
    { name: 'Food ', value: 1.21 },
];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
            {/* {`${percent}%`} */}
        </text>
    );
};

const PieCharts = () => {
    return (
        // <div>
        //     <PieChart width={350} height={400}>
        //         <Pie
        //             dataKey="value"
        //             isAnimationActive={true}
        //             data={data01}
        //             cx="50%"
        //             cy="50%"
        //             outerRadius={140}
        //             fill="#00FF00"
        //             label
        //         />
        //         <Tooltip />
        //     </PieChart>
        // </div>

        <div>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    isAnimationActive={true}
                    label={renderCustomizedLabel}
                    outerRadius={140}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default PieCharts;