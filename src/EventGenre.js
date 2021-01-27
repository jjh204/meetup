import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


const EventGenre = ({ events }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => getData());
  }, [events]);

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node.js', 'jQuery', 'AngularJS', 'Angular'];
    const data = genres.map((genre) => {
      const value = events.filter(({ summary }) =>
        summary.split(' ').includes(genre)
      ).length;
      return { name: genre, value };
    });
    return data;
  };

  const COLORS = ['#75364b', '#1b253a', '#366b75', '#6d625f', '#83e3d2', '#364b75'];

  return (
    <ResponsiveContainer height={400} >
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#1b253a"
          dataKey="value"
          label={({ name, percent }) => `${percent > 0 ? name : ''} ${percent > 0 ? (percent * 100).toFixed(0) + '%' : ''}`}
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={entry.name} />)
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;