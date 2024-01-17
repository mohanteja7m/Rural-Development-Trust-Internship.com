// Example data for Plotly chart
const data = [{
    x: [1, 2, 3, 4, 5],
    y: [10, 11, 12, 13, 14],
    type: 'scatter'
}];

// Layout for Plotly chart
const layout = {
    title: 'Sample Chart',
    xaxis: {
        title: 'X-axis'
    },
    yaxis: {
        title: 'Y-axis'
    }
};

// Render Plotly chart
Plotly.newPlot('chart-container', data, layout);
