function drawLogRatios(start, stop) {
  var url = "http://nabavilab.uconn.edu/cnvvis/logratios?" + "start=" + start + "&stop=" + stop;
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
        title: 'Log R Ratio'
      }
    };

    var d3 = Plotly.d3;

    var WIDTH_IN_PERCENT_OF_PARENT = 100,
    HEIGHT_IN_PERCENT_OF_PARENT = 50;

    var gd3 = d3.select('#plotly-ratios')
                .style({
                  width: WIDTH_IN_PERCENT_OF_PARENT + '%',
                  'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',

                  height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
                  'margin-top': 0
                });

    var gd = gd3.node();

    Plotly.newPlot(gd, [ratios1], layout, {displayModeBar: false});
    Plotly.relayout(gd, {'xaxis.range': [start, stop]});

    window.onresize = function() {
      Plotly.Plots.resize(gd);
    };
  });


};
