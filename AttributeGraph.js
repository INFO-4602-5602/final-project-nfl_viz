var margin = {top: 20, right: 20, bottom: 120, left: 40},
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

/*var tip = d3.tip()
  		.attr("class", "d3-tip")
  		.offset([-10, 0])
  		.html(function(d) {
    	return "<strong> Service Count:</strong> <span style='color:cyan'>" + d.UNI + "</span>"*/

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

//svg.call(tip);

function Uniform() {
	d3.csv("Uniform.csv", function(error, data) {

    data.forEach(function(d) {
        d.UNI = +d.UNI;
    });
	
  x.domain(data.map(function(d) { return d.Team; }));
  y.domain([0, d3.max(data, function(d) { return d.UNI; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("color", "white")
      .text("Uniform Score");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "gold")
      .attr("x", function(d) { return x(d.Team); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.UNI); })
      .attr("height", function(d) { return height - y(d.UNI); });
      //.on('mouseover', tip.show)
      //.on('mouseout', tip.hide);

});
}

function Players() {
	d3.csv("Players.csv", function(error, data) {

    data.forEach(function(d) {
        d.PLA = +d.PLA;
    });
	
  x.domain(data.map(function(d) { return d.Team; }));
  y.domain([0, d3.max(data, function(d) { return d.PLA; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("color", "white")
      .text("Players Score");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "gold")
      .attr("x", function(d) { return x(d.Team); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.PLA); })
      .attr("height", function(d) { return height - y(d.PLA); });
      //.on('mouseover', tip.show)
      //.on('mouseout', tip.hide);

});
}

function Affordability() {
	d3.csv("Affordability.csv", function(error, data) {

    data.forEach(function(d) {
        d.AFF = +d.AFF;
    });
	
  x.domain(data.map(function(d) { return d.Team; }));
  y.domain([0, d3.max(data, function(d) { return d.AFF; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("color", "white")
      .text("Affordability Score");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "gold")
      .attr("x", function(d) { return x(d.Team); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.AFF); })
      .attr("height", function(d) { return height - y(d.AFF); });
      //.on('mouseover', tip.show)
      //.on('mouseout', tip.hide);

});
}

function BandWagonFactor() {
	d3.csv("BandwagonFactor.csv", function(error, data) {

    data.forEach(function(d) {
        d.BWG = +d.BWG;
    });
	
  x.domain(data.map(function(d) { return d.Team; }));
  y.domain([0, d3.max(data, function(d) { return d.BWG; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("color", "white")
      .text("BandWagonFactor Score");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "gold")
      .attr("x", function(d) { return x(d.Team); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.BWG); })
      .attr("height", function(d) { return height - y(d.BWG); });
      //.on('mouseover', tip.show)
      //.on('mouseout', tip.hide);

});
}

function BangForBuck() {
	d3.csv("BangForBuck.csv", function(error, data) {

    data.forEach(function(d) {
        d.BNG = +d.BNG;
    });
	
  x.domain(data.map(function(d) { return d.Team; }));
  y.domain([0, d3.max(data, function(d) { return d.BNG; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("color", "white")
      .text("BangForBuck Score");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "gold")
      .attr("x", function(d) { return x(d.Team); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.BNG); })
      .attr("height", function(d) { return height - y(d.BNG); });
      //.on('mouseover', tip.show)
      //.on('mouseout', tip.hide);

});
}

function Behavior() {
	d3.csv("Behavior.csv", function(error, data) {

    data.forEach(function(d) {
        d.BEH = +d.BEH;
    });
	
  x.domain(data.map(function(d) { return d.Team; }));
  y.domain([0, d3.max(data, function(d) { return d.BEH; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("color", "white")
      .text("Behavior Score");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "gold")
      .attr("x", function(d) { return x(d.Team); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.BEH); })
      .attr("height", function(d) { return height - y(d.BEH); });
      //.on('mouseover', tip.show)
      //.on('mouseout', tip.hide);

});
}

function BigMarketValue() {
	d3.csv("BigMarketValue.csv", function(error, data) {

    data.forEach(function(d) {
        d.BMK = +d.BMK;
    });
	
  x.domain(data.map(function(d) { return d.Team; }));
  y.domain([0, d3.max(data, function(d) { return d.BMK; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("color", "white")
      .text("BigMarketValue Score");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "gold")
      .attr("x", function(d) { return x(d.Team); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.BMK); })
      .attr("height", function(d) { return height - y(d.BMK); });
      //.on('mouseover', tip.show)
      //.on('mouseout', tip.hide);

});
}

function Coaching() {
	d3.csv("Coaching.csv", function(error, data) {

    data.forEach(function(d) {
        d.CCH = +d.CCH;
    });
	
  x.domain(data.map(function(d) { return d.Team; }));
  y.domain([0, d3.max(data, function(d) { return d.CCH; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("color", "white")
      .text("Coaching Score");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "gold")
      .attr("x", function(d) { return x(d.Team); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.CCH); })
      .attr("height", function(d) { return height - y(d.CCH); });
      //.on('mouseover', tip.show)
      //.on('mouseout', tip.hide);

});
}

function FanRelations() {
	d3.csv("FanRelations.csv", function(error, data) {

    data.forEach(function(d) {
        d.FRL = +d.FRL;
    });
	
  x.domain(data.map(function(d) { return d.Team; }));
  y.domain([0, d3.max(data, function(d) { return d.FRL; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("color", "white")
      .text("FanRelations Score");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "gold")
      .attr("x", function(d) { return x(d.Team); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.FRL); })
      .attr("height", function(d) { return height - y(d.FRL); });
      //.on('mouseover', tip.show)
      //.on('mouseout', tip.hide);

});
}

function FutureWins() {
	d3.csv("FutureWins.csv", function(error, data) {

    data.forEach(function(d) {
        d.FUT = +d.FUT;
    });
	
  x.domain(data.map(function(d) { return d.Team; }));
  y.domain([0, d3.max(data, function(d) { return d.FUT; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("color", "white")
      .text("FutureWins Score");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "gold")
      .attr("x", function(d) { return x(d.Team); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.FUT); })
      .attr("height", function(d) { return height - y(d.FUT); });
      //.on('mouseover', tip.show)
      //.on('mouseout', tip.hide);

});
}

function NewYorkCityProximity() {
	d3.csv("NewYorkCityProximity.csv", function(error, data) {

    data.forEach(function(d) {
        d.NYP = +d.NYP;
    });
	
  x.domain(data.map(function(d) { return d.Team; }));
  y.domain([0, d3.max(data, function(d) { return d.NYP; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("color", "white")
      .text("NewYorkCityProximity Score");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "gold")
      .attr("x", function(d) { return x(d.Team); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.NYP); })
      .attr("height", function(d) { return height - y(d.NYP); });
      //.on('mouseover', tip.show)
      //.on('mouseout', tip.hide);

});
}

function Ownership() {
	d3.csv("Ownership.csv", function(error, data) {

    data.forEach(function(d) {
        d.OWN = +d.OWN;
    });
	
  x.domain(data.map(function(d) { return d.Team; }));
  y.domain([0, d3.max(data, function(d) { return d.OWN; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("color", "white")
      .text("Ownership Score");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "gold")
      .attr("x", function(d) { return x(d.Team); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.OWN); })
      .attr("height", function(d) { return height - y(d.OWN); });
      //.on('mouseover', tip.show)
      //.on('mouseout', tip.hide);

});
}

function SmallMarketValue() {
	d3.csv("SmallMarketValue.csv", function(error, data) {

    data.forEach(function(d) {
        d.SMK = +d.SMK;
    });
	
  x.domain(data.map(function(d) { return d.Team; }));
  y.domain([0, d3.max(data, function(d) { return d.SMK; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("color", "white")
      .text("SmallMarketValue Score");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "gold")
      .attr("x", function(d) { return x(d.Team); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.SMK); })
      .attr("height", function(d) { return height - y(d.SMK); });
      //.on('mouseover', tip.show)
      //.on('mouseout', tip.hide);

});
}

function StadiumExperience() {
	d3.csv("StadiumExperience.csv", function(error, data) {

    data.forEach(function(d) {
        d.STX = +d.STX;
    });
	
  x.domain(data.map(function(d) { return d.Team; }));
  y.domain([0, d3.max(data, function(d) { return d.STX; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("color", "white")
      .text("StadiumExperience Score");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "gold")
      .attr("x", function(d) { return x(d.Team); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.STX); })
      .attr("height", function(d) { return height - y(d.STX); });
      //.on('mouseover', tip.show)
      //.on('mouseout', tip.hide);

});
}

function StLouisProximity() {
	d3.csv("StLouisProximity.csv", function(error, data) {

    data.forEach(function(d) {
        d.SLP = +d.SLP;
    });
	
  x.domain(data.map(function(d) { return d.Team; }));
  y.domain([0, d3.max(data, function(d) { return d.SLP; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("color", "white")
      .text("StLouisProximity Score");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "gold")
      .attr("x", function(d) { return x(d.Team); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.SLP); })
      .attr("height", function(d) { return height - y(d.SLP); });
      //.on('mouseover', tip.show)
      //.on('mouseout', tip.hide);

});
}

function Tradition() {
	d3.csv("Tradition.csv", function(error, data) {

    data.forEach(function(d) {
        d.TRD = +d.TRD;
    });
	
  x.domain(data.map(function(d) { return d.Team; }));
  y.domain([0, d3.max(data, function(d) { return d.TRD; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .style("color", "white")
      .text("Tradition Score");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "gold")
      .attr("x", function(d) { return x(d.Team); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.TRD); })
      .attr("height", function(d) { return height - y(d.TRD); });
      //.on('mouseover', tip.show)
      //.on('mouseout', tip.hide);

});
}

////////////////////////////////////////////////////////////////


// /* When the user clicks on the button, 
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }