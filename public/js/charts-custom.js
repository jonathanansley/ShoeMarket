/*global $, document, LINECHARTEXMPLE*/
$(document).ready(function () {


    'use strict';

    var brandPrimary = 'rgba(51, 179, 90, 1)';

    var LINECHARTEXMPLE   = $('#lineChartExample'),
        PIECHARTEXMPLE    = $('#pieChartExample'),
        BARCHARTEXMPLE    = $('#barChartExample'),
        RADARCHARTEXMPLE  = $('#radarChartExample'),
        POLARCHARTEXMPLE  = $('#polarChartExample');




 var currentURL = window.location.origin;

  $.ajax({ url: currentURL + "/chartData" , method: "GET"})

  .done(function(data){


    console.log(currentURL);

    console.log(data)

var test = data.line[0]
var test2  = data.line[1]
    var lineChartExample = new Chart(LINECHARTEXMPLE, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "Profits in USD Per Month",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(51, 179, 90, 0.38)",
                    borderColor: brandPrimary,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: brandPrimary,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,

                    data: [500, 200, 800, 100, 1100, 590, 600, 800, 400, 1200, 1300, 1350],
                    spanGaps: false
                },
              
                // {
                //     label: "Data Set Two",
                //     fill: true,
                //     lineTension: 0.3,
                //     backgroundColor: "rgba(75,192,192,0.4)",
                //     borderColor: "rgba(75,192,192,1)",
                //     borderCapStyle: 'butt',
                //     borderDash: [],
                //     borderDashOffset: 0.0,
                //     borderJoinStyle: 'miter',
                //     borderWidth: 1,
                //     pointBorderColor: "rgba(75,192,192,1)",
                //     pointBackgroundColor: "#fff",
                //     pointBorderWidth: 1,
                //     pointHoverRadius: 5,
                //     pointHoverBackgroundColor: "rgba(75,192,192,1)",
                //     pointHoverBorderColor: "rgba(220,220,220,1)",
                //     pointHoverBorderWidth: 2,
                //     pointRadius: 1,
                //     pointHitRadius: 10,
                //     data: [65, 59, 30, 81, 56, 55, 40],
                //     spanGaps: false
                // }

            ]
        }
    });

});


      var currentURL = window.location.origin;

  $.ajax({ url: currentURL + "/chartData" , method: "GET"})

  .done(function(data){



    console.log(currentURL);

    console.log(data)
  

var test = data.pie
    var pieChartExample = new Chart(PIECHARTEXMPLE, {
        type: 'doughnut',
        data: {
            labels: [
                "Jordans",
                "LeBron",
                "Kyrie",
                "KD"
            ],
            datasets: [
                {

                    data: [300, 50, 100, 20],
                    borderWidth: [1, 1, 1, 1],

                    data: test,
                    borderWidth: [1, 1, 1],
                    backgroundColor: [
                        brandPrimary,
                        "rgba(75,192,192,1)",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        brandPrimary,
                        "rgba(75,192,192,1)",
                        "#FFCE56"
                    ]
                }]
            }
    });


    var pieChartExample = {
        responsive: true
    };

    var barChartExample = new Chart(BARCHARTEXMPLE, {
        type: 'bar',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "Data Set 1",
                    backgroundColor: [
                        'rgba(51, 179, 90, 0.6)',
                        'rgba(51, 179, 90, 0.6)',
                        'rgba(51, 179, 90, 0.6)',
                        'rgba(51, 179, 90, 0.6)',
                        'rgba(51, 179, 90, 0.6)',
                        'rgba(51, 179, 90, 0.6)',
                        'rgba(51, 179, 90, 0.6)',
                        'rgba(51, 179, 90, 0.6)',
                        'rgba(51, 179, 90, 0.6)',
                        'rgba(51, 179, 90, 0.6)',
                        'rgba(51, 179, 90, 0.6)',
                        'rgba(51, 179, 90, 0.6)',
                    ],
                    borderColor: [
                        'rgba(51, 179, 90, 1)',
                        'rgba(51, 179, 90, 1)',
                        'rgba(51, 179, 90, 1)',
                        'rgba(51, 179, 90, 1)',
                        'rgba(51, 179, 90, 1)',
                        'rgba(51, 179, 90, 1)',
                        'rgba(51, 179, 90, 1)',
                        'rgba(51, 179, 90, 1)',
                        'rgba(51, 179, 90, 1)',
                        'rgba(51, 179, 90, 1)',
                        'rgba(51, 179, 90, 1)',
                        'rgba(51, 179, 90, 1)',
                    ],
                    borderWidth: 1,
                    data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
                },
                // {
                //     label: "Data Set 2",
                //     backgroundColor: [
                //         'rgba(203, 203, 203, 0.6)',
                //         'rgba(203, 203, 203, 0.6)',
                //         'rgba(203, 203, 203, 0.6)',
                //         'rgba(203, 203, 203, 0.6)',
                //         'rgba(203, 203, 203, 0.6)',
                //         'rgba(203, 203, 203, 0.6)',
                //         'rgba(203, 203, 203, 0.6)'
                //     ],
                //     borderColor: [
                //         'rgba(203, 203, 203, 1)',
                //         'rgba(203, 203, 203, 1)',
                //         'rgba(203, 203, 203, 1)',
                //         'rgba(203, 203, 203, 1)',
                //         'rgba(203, 203, 203, 1)',
                //         'rgba(203, 203, 203, 1)',
                //         'rgba(203, 203, 203, 1)'
                //     ],
                //     borderWidth: 1,
                //     data: [35, 40, 60, 47, 88, 27, 30],
                // }
            ]
        }
    });



    var polarChartExample = new Chart(POLARCHARTEXMPLE, {
        type: 'polarArea',
        data: {
            datasets: [{
                data: [
                    11,
                    16,
                    7
                ],
                backgroundColor: [
                    "rgba(51, 179, 90, 1)",
                    "#FF6384",
                    "#FFCE56"
                ],
                label: 'My dataset' // for legend
            }],
            labels: [
                "First",
                "Second",
                "Third"
            ]
        }
    });

    var polarChartExample = {
        responsive: true
    };


// ajax call
    var pieChartExample = {
        responsive: true
    };
});
    