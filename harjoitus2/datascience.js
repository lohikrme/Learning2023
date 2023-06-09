const svg = d3.select("#svg-graph")
    .attr("width", "500px")
    .attr("height", "500px")

d3.json("measures.json").then(
    loaded_data => {
        var dataArray = []
        for (var i in loaded_data) {
            dataArray.push(loaded_data[i].Measures)

        }

        for (var i in dataArray) {
            dataArray[i].AirPressure = dataArray[i].AirPressure.replace(",", ".")
            dataArray[i].AirPressure = parseFloat(dataArray[i].AirPressure)

            dataArray[i].Humidity = dataArray[i].Humidity.replace(",", ".")
            dataArray[i].Humidity = parseFloat(dataArray[i].Humidity)

            dataArray[i].Temp = dataArray[i].Temp.replace(",", ".")
            dataArray[i].Temp = parseFloat(dataArray[i].Temp)
        }

        // console log how the data array looks now with replacements and float numbers
        console.log(dataArray)

        // parse the timestamp to a date object
        var parseTime = d3.timeParse("%a %b %d %H:%M:%S %Y"); // assuming timestamp is in "Fri Mar 15 21:42:29 2019" format
        var formatTime = d3.timeFormat("%m-%Y"); // output format for month

        // group the data by month
        var nestedData = d3.nest()
            .key(function (d) { return formatTime(parseTime(d.Timestamp)); }) // convert timestamp to date and then to string, keeping only the year and month
            .entries(dataArray);

        // calculate the monthly average for each measure
        var monthlyAverage = nestedData.map(function (d) {
            return {
                month: d.key,
                airPressure: d3.mean(d.values, function (v) { return v.AirPressure; }),
                humidity: d3.mean(d.values, function (v) { return v.Humidity; }),
                temp: d3.mean(d.values, function (v) { return v.Temp; })
            };
        });

        // use the monthlyAverage array for your visualization
        console.log(monthlyAverage)

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
