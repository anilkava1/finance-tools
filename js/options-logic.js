let myChart;
function updateChart() {
    const strike = parseFloat(document.getElementById('strike').value);
    const premium = parseFloat(document.getElementById('premium').value);
    const type = document.getElementById('type').value;
    let labels = []; let data = [];

    for (let price = strike - 400; price <= strike + 400; price += 40) {
        labels.push(price);
        let profit = (type === 'call') ? Math.max(0, price - strike) - premium : Math.max(0, strike - price) - premium;
        data.push(profit);
    }

    const ctx = document.getElementById('payoffChart').getContext('2d');
    if (myChart) myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Payoff (₹)',
                data: data,
                borderColor: '#0d6efd',
                backgroundColor: 'rgba(13, 110, 253, 0.1)',
                fill: true, tension: 0.4
            }]
        },
        options: { responsive: true, scales: { y: { beginAtZero: false } } }
    });
}