//Reading in the datavar data;
var data;
var LongData = [];
var LatiData = [];
var TeamName = [];

var CoachScore = [];
var FanScore = [];
var DollarScore = [];
var StadiumScore = [];
var WinScore = [];

var CoachScoreI = [];
var FanScoreI = [];
var DollarScoreI = [];
var StadiumScoreI = [];
var WinScoreI = [];

//var TotalScore = [];




var oneoffive = "<img src='images/15star.png' alt='1/5' height='30px' width='150px'/>";
var twooffive = "<img src='images/25star.png' alt='1/5' height='30px' width='150px'/>";
var threeoffive = "<img src='images/35star.png' alt='1/5' height='30px' width='150px'/>";
var fouroffive = "<img src='images/45star.png' alt='1/5' height='30px' width='150px'/>";
var fiveoffive = "<img src='images/55star.png' alt='1/5' height='30px' width='150px'/>";


function checkDataset(dataset) {
    if (dataset.length > 0)
        $("#dataCheck").append("<p>Data loaded correctly!</p>");
    else
        $("#dataCheck").append("<p>Data loaded incorrectly. Try using the debugger to help you find the bug!</p>");
} 

d3.csv( 'data/NFLdata.csv', function( csvData ){
  data = csvData;
  checkDataset( data );
    data.map(function(d){
        TeamName.push(d["TEAM"]);
    })
});

//console.log("TeamNames: ", TeamName);

d3.csv("data/NFLdata.csv", function(error, data) {
    data.map(function(d){
        LongData.push(+d.longitude);
        LatiData.push(+d.latitude);
        CoachScore.push(d.CCH);
        FanScore.push(d.FRL);
        DollarScore.push(d.BNG);
        StadiumScore.push(d.STX);
        WinScore.push(d.TRD);
        CoachScoreI.push(+d.CCH);
        FanScoreI.push(+d.FRL);
        DollarScoreI.push(+d.BNG);
        StadiumScoreI.push(+d.STX);
        WinScoreI.push(+d.TRD);
        
    })
   // console.log("Long: ", LongData);
  //  console.log("Lati: ", LatiData);
   // console.log(TeamName[31]);
    



////////////////////////////


var map = L.map('mapid').setView([39.75621, -99.99404], 4 );
    // Set up map box
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(map);
    
    
    
    
     
    
    for(i=0; i<32; i++){
    var TotalScore = CoachScoreI[i]+StadiumScoreI[i]+DollarScoreI[i]+FanScoreI[i]+WinScoreI[i];
    
    if(TotalScore > 400){
        var ratingpic = fiveoffive;
    }
    else if(TotalScore > 300 && TotalScore < 400){
        var ratingpic = fouroffive;
    }
     else if(TotalScore > 200 && TotalScore < 300){
        var ratingpic = threeoffive;
    }
    else if(TotalScore > 100 && TotalScore < 200){
        var ratingpic = twooffive;
    }
    else{
        var ratingpic = oneoffive;
    }
    
    
        
    if(TeamName[i] == "Green Bay Packers"){ 
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: 'green',
            fillColor: 'yellow',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
       // console.log(DollarScore[i]);
    }
        
    if(TeamName[i] == "Denver Broncos"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: 'Blue',
            fillColor: 'orange',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
    
    
    if(TeamName[i] == "Pittsburgh Steelers"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: 'Black',
            fillColor: 'Yellow',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }  
        
    if(TeamName[i] == "Kansas City Chiefs"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: 'Red',
            fillColor: 'White',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "New England Patriots"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#0D254C',
            fillColor: '#C80815',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "Buffalo Bills"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#00338d',
            fillColor: 'white',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "Carolina Panthers"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#0085CA',
            fillColor: '#A5ACAF',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "Seattle Seahawks"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#002244',
            fillColor: '#69BE28',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "Indianapolis Colts"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#003B7B',
            fillColor: '#FFFFFF',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "Arizona Cardinals"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#9B2743',
            fillColor: 'white',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "Baltimore Ravens"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#280353',
            fillColor: 'black',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "Houston Texans"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#02253A',
            fillColor: '#B31B34',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "New Orleans Saints"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#D2B887',
            fillColor: 'black',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "Philadelphia Eagles"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#003B48',
            fillColor: '#C0C0C0',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "Detroit Lions"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#006DB0',
            fillColor: '#C5C7CF',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }  
        
    if(TeamName[i] == "Minnesota Vikings"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#582C81',
            fillColor: '#F0BF00',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "New York Giants"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#192F6B',
            fillColor: '#CA001A',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "Atlanta Falcons"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#A6192D',
            fillColor: 'black',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "Dallas Cowboys"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#0D254c',
            fillColor: '#87909b',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "Jacksonville Jaguars"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#9F792c',
            fillColor: '#006778',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "Miami Dolphins"){ 
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#008D97',
            fillColor: '#F5811F',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
    
    if(TeamName[i] == "Cincinnati Bengals"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#A6192D',
            fillColor: 'black',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
    
    if(TeamName[i] == "Oakland Raiders"){  
        L.circle([LatiData[i],LongData[i]], 25000, {
            color: 'black',
            fillColor: '#C4C8CB',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "Tampa Bay Buccaneers"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#D60A0B',
            fillColor: '#89765F',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "Los Angeles Rams"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#13264B',
            fillColor: '#C9AF74',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "Chicago Bears"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#03202F',
            fillColor: '#DD4814',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "Cleveland Browns"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#eb3300',
            fillColor: 'brown',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
    
    if(TeamName[i] == "San Diego Chargers"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#FFB81C',
            fillColor: '#0072CE',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "San Francisco 49ers"){  
        L.circle([LatiData[i],LongData[i]], 18000, {
            color: '#AF1E2C',
            fillColor: '#E6BE8A',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
        
    if(TeamName[i] == "New York Jets"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#0C371D',
            fillColor: 'white',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
    
    if(TeamName[i] == "Washington Redskins"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#773141',
            fillColor: '#FFB612',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
    
    if(TeamName[i] == "Tennessee Titans"){  
        L.circle([LatiData[i],LongData[i]], 20000, {
            color: '#648FCC',
            fillColor: '#0D254C',
            fillOpacity: 1,

        }).addTo(map).bindPopup(TeamName[i] + ': <br> Value of Ticket Rating: ' + DollarScore[i] + '<br> Coaching Rating: ' + CoachScore[i]+ '<br> Stadium Rating: ' + StadiumScore[i]+ '<br> Tradition of Winning Rating: ' + WinScore[i]+ '<br> Fan Relations Rating: ' + FanScore[i] + '<br>'+ ratingpic);
    }
    
}
    
});