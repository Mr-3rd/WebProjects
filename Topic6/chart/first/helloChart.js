



let canvas = document.querySelector('#slowCarsChart')
let ctx = canvas.getContext('2d')

chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Volkswagen Up', 'Tata Tigor', 'Smart EQ Fortwo', 'Chevrolet Spark'],
        datasets: [{
            label: '0 MPH - 60 MPH in Seconds',
            data: [15.6, 13.9, 12, 11],   // this is the chart data
            backgroundColor: ['red', 'gold', 'silver', 'green']
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})
