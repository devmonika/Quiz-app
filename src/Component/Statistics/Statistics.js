import React from 'react';
import './Statistics.css';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const Statistics = () => {
    const statistics = useLoaderData();
    return (
       <div>
        <div>
            <h1 className='text-center my-5'>Total Quiz Bar</h1>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
        <ResponsiveContainer width='50%' height={400}>
            <BarChart data={statistics.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#ff512f" />
            </BarChart>
        </ResponsiveContainer>
        </div>
        
       </div>
        
    );
};

export default Statistics;