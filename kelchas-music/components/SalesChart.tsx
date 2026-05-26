"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function SalesChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales',
        data: [1200, 1900, 3000, 2500, 3200, 4100, 4800],
        borderColor: '#d4af37',
        backgroundColor: 'rgba(212,175,55,0.2)',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#cfcfcf' } },
      y: { grid: { color: 'rgba(255,255,255,0.03)' }, ticks: { color: '#cfcfcf' } },
    },
  } as any;

  return <div className="w-full h-56"><Line options={options} data={data} /></div>;
}
