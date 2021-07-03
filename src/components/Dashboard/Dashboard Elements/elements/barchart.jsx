import { blue, green, orange } from '@material-ui/core/colors';
import {Bar, Chart} from 'react-chartjs-2';


const labels = ['5/2', '3/2'];
var data = {
    labels: labels,
    datasets: [{
      label: "Good Part",
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor:'rgb(255, 99, 132)',
      data: [3,4]
    }, {
      label: "Defective",
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
      boderColor: 'rgb(255, 159, 64)',
      data: [4, 3]
    },]
  };
  
  const config = {
    reponsive: true,
    maintainAspectRatio: true,
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
            fontSize: 0.1+'vw',
            color: 'hsl(238, 61%, 19%)',
            font: '"Baloo Da 2", cursive',
            borderRadius: 100+'px'
          }
        }
      },
  };

  

  export default function BarGraph(){
      return(
          <div style={{width: 100+'%', height: 100+'%'}}>
          <Bar data={data} options = {config}/>
          </div>
      )
  }