const dataset = [
    { AirPressure: 1000, Humidity: 45, Temp: 34, Timestamp: "Sat Mar 16 07:53:42 2019" },
    { AirPressure: 1020, Humidity: 34, Temp: 28, Timestamp: "Sun Mar 17 07:53:42 2019" },
    { AirPressure: 975, Humidity: 32, Temp: 25, Timestamp: "Mon Mar 18 07:53:42 2019" }
]

var airPressures = dataset.map(d => d.AirPressure); // create an array of Air Pressure values
var humidities = dataset.map(d => d.Humidity); // create an array of Humidity values
var temps = dataset.map(d => d.Temp); // create an array of Temp values

const canvas_width = 230
const canvas_height = 400

// create the SVG image for Air Pressure
var svg1 = d3.select("#svg-image-AirPressure")
    .attr("width", `${canvas_width}px`)
    .attr("height", `${canvas_height}px`)

var rects1 = svg1.selectAll("rect") // select all rect elements
    .data(airPressures) // bind your airPressures array to them
    .enter() // enter the data
    .append("rect") // append a rect for each value
    .attr("x", (d, i) => i * 50) // set the x position based on the index
    .attr("y", d => canvas_height - d / 10 - 50) // set the y position based on the canvas height and value and some padding
    .attr("width", 40) // set the width to a fixed value
    .attr("height", d => d / 10) // set the height based on the value
    .attr("fill", "steelblue") // set the fill color to steelblue
    .attr("transform", "translate(70,0)") // move rects right a bit

var texts1 = svg1.selectAll("text") // select all text elements
    .data(dataset) // bind your dataset array to them
    .enter() // enter the data
    .append("text") // append a text for each value
    .attr("x", (d, i) => i * 50 + 115) // set the x position based on the index and center it under the group of three rects
    .attr("y", d => canvas_height - 30) // set the y position based on the canvas height and Air Pressure value and some padding
    .attr("text-anchor", "end") // align the text to the end
    .text(d => d3.timeFormat("%b %d")(new Date(d.Timestamp))) // set the text content to the formatted Timestamp property

// create the SVG image for Humidity
var svg2 = d3.select("#svg-image-Humidity")
    .attr("width", `${canvas_width}px`)
    .attr("height", `${canvas_height}px`)

var rects2 = svg2.selectAll("rect") // select all rect elements
    .data(humidities) // bind your humidities array to them
    .enter() // enter the data
    .append("rect") // append a rect for each value
    .attr("x", (d, i) => i * 50) // set the x position based on the index
    .attr("y", d => canvas_height - d / 10 - 50) // set the y position based on the canvas height and value and some padding
    .attr("width", 40) // set the width to a fixed value
    .attr("height", d => d / 10) // set the height based on the value
    .attr("fill", "steelblue") // set the fill color to steelblue
    .attr("transform", "translate(70,0)") // move rects right a bit

var texts2 = svg2.selectAll("text") // select all text elements
    .data(dataset) // bind your dataset array to them
    .enter() // enter the data
    .append("text") // append a text for each value
    .attr("x", (d, i) => i * 50 + 115) // set the x position based on the index and center it under the group of three rects
    .attr("y", d => canvas_height - 30) // set the y position based on the canvas height and Humidity value and some padding
    .attr("text-anchor", "end") // align the text to the end
    .text(d => d3.timeFormat("%b %d")(new Date(d.Timestamp))) // set the text content to the formatted Timestamp property

// create the SVG image for Temp
var svg3 = d3.select("#svg-image-Temp")
    .attr("width", `${canvas_width}px`)
    .attr("height", `${canvas_height}px`)

var rects3 = svg3.selectAll("rect") // select all rect elements
    .data(temps) // bind your temps array to them
    .enter() // enter the data
    .append("rect") // append a rect for each value
    .attr("x", (d, i) => i * 50) // set the x position based on the index
    .attr("y", d => canvas_height - d * 10 - 50) // set the y position based on the canvas height and value and some padding
    .attr("width", 40) // set the width to a fixed value
    .attr("height", d => d * 10) // set the height based on the value
    .attr("fill", "steelblue") // set the fill color to steelblue
    .attr("transform", "translate(70,0)") // move rects right a bit

var texts3 = svg3.selectAll("text") // select all text elements
    .data(dataset) // bind your dataset array to them
    .enter() // enter the data
    .append("text") // append a text for each value
    .attr("x", (d, i) => i * 50 + 115) // set the x position based on the index and center it under the group of three rects
    .attr("y", d => canvas_height - 30) // set the y position based on the canvas height and Temp value and some padding
    .attr("text-anchor", "end") // align the text to the end
    .text(d => d3.timeFormat("%b %d")(new Date(d.Timestamp))) // set the text content to the formatted Timestamp property