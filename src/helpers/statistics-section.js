document.addEventListener("turbo:load", function () {
  const selectors = {
    section: ".statistics-section",
    chartsID: {
      ArbitrageAI: "#ArbitrageAI",
      intervalPercentage: "#intervalPercentage",
      intervalBar1: {
        ID: "#intervalBar1",
        labels: 0,
        datasets: [
          {
            label: 'Прибыль за сутки',
            data: 0,
            borderColor: "#FFF831",
            backgroundColor: "#FFF831",
            borderWidth: 1,
            borderRadius: 10,
            borderSkipped: false,
          }
        ],
        annotations: [0, 0.5, 1]
      },
      intervalBar2: {
        ID: "#intervalBar2",
        labels: ["01-02","01-03","01-04","01-05","01-06","01-07","01-08"],
        datasets: [
          {
            label: 'Прибыль платформы от сделок',
            data: [10, 20, -30, 40, 50, 60, 70],
            borderColor: "#FFF831",
            backgroundColor: "#FFF831",
            borderWidth: 1,
            borderRadius: 10,
            borderSkipped: false,
          }
        ],
        annotations: [-40, -20, 0, 20, 40, 60, 80]
      },
      intervalBar3: {
        ID: "#intervalBar3",
        labels: 0,
        datasets: [
          {
            label: 'Прибыль за сутки',
            data: 0,
            borderColor: "#FFF831",
            backgroundColor: "#FFF831",
            borderWidth: 1,
            borderRadius: 10,
            borderSkipped: false,
          }
        ],
        annotations: [0, 0.5, 1]
      },
    }
  };

  function statisticsSectionInit () {
    const section = document.querySelector(selectors.section);
    if (section) {
      const chart1 = section.querySelector(selectors.chartsID.ArbitrageAI);
      const chart2 = section.querySelector(selectors.chartsID.intervalPercentage);
      const chart3 = section.querySelector(selectors.chartsID.intervalBar1.ID);
      const chart4 = section.querySelector(selectors.chartsID.intervalBar2.ID);
      const chart5 = section.querySelector(selectors.chartsID.intervalBar3.ID);

      if (chart1) cartDonutInit(chart1);
      if (chart2) cartLineInit(chart2);
      if (chart3) cartBarInit(chart3, selectors.chartsID.intervalBar1);
      if (chart4) cartBarInit(chart4, selectors.chartsID.intervalBar2);
      if (chart5) cartBarInit(chart5, selectors.chartsID.intervalBar3);
    }
  }

  function createAnnotation (values) {
    const newAnnotation = [];

    values.forEach(item => {
      {
        newAnnotation.push({
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y',
          value: item,
          borderColor: '#FFF831',
          borderWidth: 1
        })
      }
    })

    return newAnnotation;
  }

  function cartDonutInit(container) {
    const data = {
      labels: [
        'BTC',
        'USDT'
      ],
      TooltipLabelStyle: {
        backgroundColor: '#000000',
      },
      datasets: [{
        label: 'ArbitrageAI',
        data: [2.8054, 2.8054],
        backgroundColor: [
          '#FF0000',
          '#47B64C',
          '#FF7508'
        ],
        borderColor: [
          '#000000',
          '#000000',
          '#000000',
        ],
        borderWidth: 10,
        cutout: '70%',
        rotation:160,
        radius: 90,
        hoverOffset: 4
      }]
    };

    const config = {
      type: 'doughnut',
      data: data,
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }
    };

    new Chart(container, config);
  }

  function cartLineInit(container) {
    const labels = ["01-02","01-03","01-04","01-05","01-06","01-07","01-08"]
    const data = {
      labels: labels,
      datasets: [{
        label: 'Interval Percentage',
        data: [2, 5, 3, 8, 14, 10, 6],
        fill: false,
        borderColor: '#FFF831',
        borderWidth: 2,
        tension: 0,
        pointStyle: 'triangle',
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#FFF831",
        pointBorderWidth: 1,
        pointRadius: 7,
        pointHoverRadius: 10
      }]
    }

    const config = {
      type: 'line',
      data: data,
      options: {
        scales: {
          y: {
            display: true,
            ticks: {
              callback: function (value, index, values) {
                if (index === 0 || index === values.length - 1) {
                  return (value + "%");
                } else {
                  return '';
                }
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          annotation: {
            annotations: [{
              type: 'line',
              mode: 'horizontal',
              scaleID: 'y',
              value: 0,
              borderColor: '#FFF831',
              borderWidth: 1
            },
              {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y',
                value: 20,
                borderColor: '#FFF831',
                borderWidth: 1
              }],
          }
        }
      }
    };

    Chart.defaults.color = '#FFF831';

    new Chart(container, config);
  }

  function cartBarInit(container, selectorsData) {
    const labels = selectorsData.labels;
    const data = {
      labels: labels,
      datasets: selectorsData.datasets
    };

    const config = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          annotation: {
            annotations: createAnnotation(selectorsData.annotations),
          }
        }
      },
    };

    new Chart(container, config);
  }


  statisticsSectionInit ();
});