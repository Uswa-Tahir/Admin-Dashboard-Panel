import React from 'react'
import './chart.css';
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line} from 'recharts';

export default function Chart({title, data, dataKey, grid}) {
  
   
  return (
    <div className='Chart'>
      <h3 className='ChartTitle'>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey={dataKey} />
        <Tooltip/>
         {grid &&<CartesianGrid stroke="#e0dfdf"/>}
         <Legend/>
      </LineChart>
        </ResponsiveContainer>
{/* 
<ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer> */}
    </div>
  )
}
