import { blue, green, orange } from '@material-ui/core/colors';
import { useEffect, useState } from 'react';
import { Bar, Chart } from 'react-chartjs-2';
import db from '../../../../firebase';
import usePartDetails from './partDetailsHook';

export default function BarGraph() {
  const [totalOrder, setTotalOrders] = useState(0);

  useEffect(() => {
    db.collection('Order').where('Type', 'in', ['5/2', '3/2']).onSnapshot((snap) => {
      setTotalOrders(snap.size)
    })
  });
  
  console.log(totalOrder)
  const { defective3By2, defective5By2, good3By2, good5By2 } = usePartDetails();

  console.log(good5By2 + " " + defective5By2 + " " + good3By2 + " " + defective3By2);
  const labels = ['5/2', '3/2'];
  var data = {
    labels: labels,
    datasets: [{
      label: "Good Part",
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgb(255, 99, 132)',
      data: [good5By2 * totalOrder, good3By2 * totalOrder]
    }, {
      label: "Defective",
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
      boderColor: 'rgb(255, 159, 64)',
      data: [defective5By2 * totalOrder, defective3By2 * totalOrder]
    },]
  };

  const config = {
    reponsive: true,
    maintainAspectRatio: false,
    height: 70+'vh',
    scales: {
      x: {
      },
      y: {
        title: {
          display: false,
          text: 'Value'
        }
      }
    },
    interaction: {
      intersect: false
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontSize: 0.1 + 'vw',
          color: 'hsl(238, 61%, 19%)',
          font: '"Baloo Da 2", cursive',
          borderRadius: 100 + 'px'
        }
      }
    },
  };




  return (
    <div style={{ width: 100 + '%', height: 80+'%' }}>
      <Bar data={data} options={config} />
    </div>
  )
}