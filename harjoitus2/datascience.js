const svg = d3.select("#svg-graph")
    .attr("width", "500px")
    .attr("height", "500px")

svg.append("rect")
    .attr("width", "100px")
    .attr("height", "100px")
    .attr("fill", "orange")


d3.json("measures.json").then(
    loaded_data => {
        var dataArray = []
        for (var i in loaded_data) {
            dataArray.push(loaded_data[i].Measures)

        }
        console.log(dataArray)

        for (var i in dataArray) {
            dataArray[i].AirPressure = dataArray[i].AirPressure.replace(",", ".")
            dataArray[i].AirPressure = parseFloat(dataArray[i].AirPressure)

            dataArray[i].Humidity = dataArray[i].Humidity.replace(",", ".")
            dataArray[i].Humidity = parseFloat(dataArray[i].Humidity)

            dataArray[i].Temp = dataArray[i].Temp.replace(",", ".")
            dataArray[i].Temp = parseFloat(dataArray[i].Temp)
        }

        console.log(dataArray)

        var minAirPressure = d3.min(dataArray.filter(d => d.AirPressure !== 0), d => d.AirPressure)
        var minHumidity = d3.min(dataArray.filter(d => d.Humidity !== 0), d => d.Humidity)
        var minTemp = d3.min(dataArray.filter(d => d.Temp !== 0), d => d.Temp)
        var maxAirPressure = d3.max(dataArray, d => d.AirPressure)
        var maxHumidity = d3.max(dataArray, d => d.Humidity)
        var maxTemp = d3.max(dataArray, d => d.Temp)

        console.log(minAirPressure)
        console.log(minHumidity)
        console.log(minTemp)
        console.log(maxAirPressure)
        console.log(maxHumidity)
        console.log(maxTemp)


    }

)