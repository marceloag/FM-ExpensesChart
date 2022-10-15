import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export const options = {
  responsive: true,
  borderRadius: 6,
  legend: {
    display: false
  },
  title: {
    display: false
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  }
};

function ExpensesChart() {
  return (
    <div>
      <Bar
        options={options}
        data={{
          labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
          datasets: [
            {
              id: 1,
              label: '',
              data: [5, 6, 7, 6, 2, 3, 4],
              backgroundColor: 'hsl(10, 79%, 65%)',
              hoverBackgroundColor: 'hsl(186, 34%, 60%)'
            }
          ]
        }}
        height={300}
        width={600}
      />
    </div>
  );
}

export default ExpensesChart;
