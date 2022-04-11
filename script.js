var ctx = document.getElementById('myChart');

var stars = [433, 393, 487, 414];
var frameworks = ['Januari', 'Februari', 'Maart', 'April', 'Mei','Juni','Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];

var myChart = new Chart(ctx, {
    type: 'line', 
    data: {    
        labels: frameworks,     
        datasets: [{ 
            label: 'Energie kosten',
            data: stars,
            backgroundColor: [ 
                "rgba(255, 99, 132, 0.2)", 
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)", 
                "rgba(75, 192, 192, 0.2)", 
                "rgba(153, 102, 255, 0.2)" ],
            borderColor: [
                "rgba(255, 99, 132, 1)", 
                "rgba(54, 162, 235, 1)", 
                "rgba(255, 206, 86, 1)", 
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)", ],  
                borderWidth: 1
               
        }]  
    }, 
})