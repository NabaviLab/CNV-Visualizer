function drawLogRatios() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var url = "http://nabavilab.uconn.edu/cnvvis/logratios/" + start + "-" + end;
  var data;

  Plotly.d3.json(url, function(error, json) {
    if (error) return console.warn(error);
    data = json;

    var basePairs = data.chr1.map(function (d) {
      return (d.chr_start + d.chr_stop) / 2;
    });

    var ratios = data.chr1.map(function (d) {
      return d.adjusted_log_ratio;
    });

    var ratios1 = {
      x: basePairs,
      y: ratios,
      mode: 'markers',
      type: 'scatter'
    };

    var layout = {
      xaxis: {
        title: 'Base Pair'
      },
      yaxis: {
        title: 'Log Ratio'
      }
    };


    Plotly.newPlot('plotly-ratios', [ratios1], layout, {showLink: false});

  });
};
