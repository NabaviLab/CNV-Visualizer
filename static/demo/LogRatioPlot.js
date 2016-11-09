function d3DrawLogRatios() {
  var start2 = document.getElementById('start2').value;
  var end2 = document.getElementById('end2').value;
  var url = "http://nabavilab.uconn.edu/cnvvis/logratios?start=" + start2 + "&stop=" + end2;

  d3.json(url, function(error, data) {
    if (error) return console.warn(error);
    console.log(data);
    showScatterPlot(data.chr1);
  });

  function showScatterPlot(data) {
    // Spacing Around
    var margins = {
      "left": 40,
      "right": 30,
      "top": 30,
      "bottom": 30
    };

    var width = 800;
    var height = 300;

    var colors = d3.scale.category10();

    // Adding the SVG component to the ratio-load div
    var svg = d3.select("#ratios-load").append("svg").attr("width", width).attr("height", height).append("g")
      .attr("transform", "translate(" + margins.left + "," + margins.top + ")");

    var x = d3.scale.linear()
      .domain(d3.extent(data, function(d) {
        return ((d.chr_start + d.chr_stop) / 2);
      }))
      .range([0, width - margins.left - margins.right]);


    var y = d3.scale.linear()
      .domain(d3.extent(data, function(d) {
        return d.adjusted_log_ratio;
      }))
      .range([height - margins.top - margins.bottom, 0]);

    svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + y.range()[0] + ")");
    svg.append("g").attr("class", "y axis");

    // X axis label
    svg.append("text")
      .attr("fill", "#414241")
      .attr("text-anchor", "end")
      .attr("x", width / 2)
      .attr("y", height - 35)
      .text("base pair");


    var xAxis = d3.svg.axis().scale(x).orient("bottom").tickPadding(2);
    var yAxis = d3.svg.axis().scale(y).orient("left").tickPadding(2);


    svg.selectAll("g.y.axis").call(yAxis);
    svg.selectAll("g.x.axis").call(xAxis);


    var chrs = svg.selectAll("g.node").data(data, function(d) {
      return d.chr_start;
    });


    var chrGroup = chrs.enter().append("g").attr("class", "node")

    .attr('transform', function(d) {
      return "translate(" + x(((d.chr_start + d.chr_stop) / 2)) + "," + y(d.adjusted_log_ratio) + ")";
    });

    chrGroup.append("circle")
      .attr("r", 2)
      .attr("class", "dot")
      .style("fill", colors(black));

  };
};
