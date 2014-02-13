var width = 500,
    height = 300;

var x = d3.scale.linear()
    .domain([0, 1])
    .range([0, width]);

var y = d3.scale.linear()
    .domain([0, 1])
    .range([height, 0]);

var line = d3.svg.line()
    .x(function(d) {
        return x(d.x);
    })
    .y(function(d) {
        return y(d.y);
    });

var svg = d3.select("#volcano").append("svg")
    .attr("width", width)
    .attr("height", height)
    .selectAll("path")
    .data(data.map(function(d) {
        return d3.range(d.x.length).map(function(i) {
            return {
                x: d.x[i],
                y: d.y[i]
            };
        });
    }))
    .enter().append("svg:path")
    .attr("d", line)
    .on("mouseover", function(d, i) {
        d3.select(this).style("stroke", "yellow");
    })
    .on("mouseout", function(d, i) {
        d3.select(this).style("stroke", "darkgreen");
    })
    .style("fill", "none")
    .style("stroke", "darkgreen")
    .style("stroke-width", 0)
    .transition()
    .duration(10000)
    .style("stroke-width", 2);