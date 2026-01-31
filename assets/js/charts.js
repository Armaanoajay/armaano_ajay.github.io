const pieCtx = document.getElementById('publicationPie').getContext('2d');

new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['Journal Publications', 'Conference Presentations'],
    datasets: [{
      data: [11, 5],
      backgroundColor: [
        'rgba(54, 99, 181, 0.85)',   // deep blue
        'rgba(120, 170, 255, 0.85)' // soft blue
      ],
      borderWidth: 0
    }]
  },
  options: {
    responsive: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { size: 12 }
        }
      }
    }
  }
});
