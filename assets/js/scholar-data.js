fetch("assets/data/scholar.json")
  .then(res => res.json())
  .then(data => {
    new Chart(document.getElementById("citationsBar"), {
      type: "bar",
      data: {
        labels: data.years,
        datasets: [{
          label: "Citations",
          data: data.citations,

          /* subtle professional blue */
          backgroundColor: "rgba(54, 99, 181, 0.75)",

          /* visual polish */
          borderRadius: 6,
          maxBarThickness: 28
        }]
      },
      options: {
        responsive: false,   // respects canvas width/height
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: "Citations Over the Years",
            font: {
              size: 14,
              weight: "normal"
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: { size: 11 }
            }
          },
          y: {
            grid: {
              color: "rgba(0,0,0,0.06)"
            },
            ticks: {
              stepSize: 5,
              font: { size: 11 }
            },
            beginAtZero: true
          }
        }
      }
    });
  });
