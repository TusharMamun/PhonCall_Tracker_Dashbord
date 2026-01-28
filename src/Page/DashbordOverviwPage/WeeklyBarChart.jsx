import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { chartData } from '../../util/data';

const WeeklyAreaChart = () => {

  return (
    <div className="w-full">
      <div className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ 
              top: 10, 
              right: 0, 
              left: 0, 
              bottom: 10 
            }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={1}/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.3}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#f3f4f6" 
            />
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ 
                fill: '#6b7280', 
                fontSize: 'clamp(10px, 2vw, 14px)' 
              }}
              interval={0}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tick={{ 
                fill: '#6b7280', 
                fontSize: 'clamp(10px, 2vw, 14px)' 
              }}
              width={40}
            />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '8px', 
                border: '1px solid #e5e7eb',
                backgroundColor: 'blue',
                fontSize: '14px',
                padding: '8px 12px'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="none" 
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyAreaChart;