var canvas = d3.select("#svg-graph")
    .attr("width", 700)
    .attr("height", 500)

canvas.append("rect")
    .attr("x", 200)
    .attr("y", 120)
    .attr("width", 300)
    .attr("height", 300)
    .attr("fill", "red")
    .attr("stroke", "black")

canvas.append("text")
    .attr("x", 10)
    .attr("y", 100)
    .attr("fill", "green")
    .text("LOHIKÄÄRME")
    .attr("font-size", "100px")