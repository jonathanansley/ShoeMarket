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


  $.ajax({ url: currentURL + "/chartDataLine" , method: "GET"})

  .done(function(data){

var Profits = []



var testObject = [ {

date: "01",
profit: 0

},

{

date: "02",
profit: 0

},

{
date: "03",
profit: 0

},
{
date: "04",
profit: 0

},
{
date: "05",
profit: 0

},
{
date: "06",
profit: 0

},
{
date: "07",
profit: 0

},
{
date: "08",
profit: 0

},
{
date: "09",
profit: 0

},
{
date: "10",
profit: 0

},
{
date: "11",
profit: 0

},
{
date: "12",
profit: 0
},
]


    for (var i = data.length - 1; i >= 0; i--) {

        var shoeProfit =  data[i].Shoe.seller_price - data[i].Shoe.msrp;

        console.log(shoeProfit)

        var date = data[i].date_order_placed

        console.log(date)
       var month = date.substring(5, 7);


       for (var j = testObject.length - 1; j >= 0; j--) {
           if (month === testObject[j].date) {

            // console.log(j)
        testObject[j].profit += shoeProfit;


            // testArray.splice(i,0,profit);

           }

       }

       // console.log(testObject[8].profit)
    }


for(i=0; i < testObject.length; i++)

{
console.log(testObject[i].profit)

Profits.push(testObject[i].profit)

}




    var lineChartExample = new Chart(LINECHARTEXMPLE, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July","August","September","November","December"],
            datasets: [
                {
                    label: "Profits",
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
                    data: Profits,
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
                //     data: test2,
                //     spanGaps: false
                // }
            ]
        }
    });

});


      var currentURL = window.location.origin;

     

  $.ajax({ url: currentURL + "/chartDataPie" , method: "GET"})

  .done(function(data){

 var Brands = []
 var Sales = []
    console.log(data)
  
  for (var i = data.length - 1; i >= 0; i--) {



    if(Brands.indexOf(data[i].Shoe.subBrand) === -1)
    {
    Brands.push(data[i].Shoe.subBrand)

    }

}


 var test = [20, 40, 40, 50]

    var pieChartExample = new Chart(PIECHARTEXMPLE, {
        type: 'doughnut',
        data: {
            labels:Brands,
            datasets: [
                {
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

});

// ajax call
    var pieChartExample = {
        responsive: true
    };
});



    