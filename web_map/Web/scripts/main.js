// Slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
console.log(slider);
output.innerHTML = slider.value;
// Update slider value
slider.oninput = function() {
    output.innerHTML = slider.value;
}




// Predict Button >> Predict the result
function predictValue() { //predict value when press Predict button
  var url = "http://localhost:5000/project/status=1"

    var zip= document.getElementById("chooseZip").value;
    console.log(zip);

    var year = document.getElementById("chooseYear").value;
    console.log(zip);
    var bed = document.getElementById("chooseBed").value;
    console.log(bed);
    var bath = document.getElementById("chooseBath").value;
    console.log(bath);
    var sq = document.getElementById("myRange").value;
    console.log(sq);
    newURL = url.concat("&sqft=").concat(sq).concat("&zipcode=").concat(zip).concat("&year=").concat(year).concat("&bedroom=").concat(bed).concat("&bathroom=").concat(bath)
    var result;
    d3.json(newURL, function (data) {
        document.getElementById("predictvalue").innerHTML=parseInt(data);
    });
}

// show the 10 related 
function similarHouse() { 
  var url = "http://localhost:5000/project/status=4"

    var zip2= document.getElementById("chooseZip").value;
    console.log(zip2);
    var year2 = document.getElementById("chooseYear").value;
    console.log(year2);
    var bed2 = document.getElementById("chooseBed").value;
    console.log(bed2);
    var bath2 = document.getElementById("chooseBath").value;
    console.log(bath2);
    var sq2 = document.getElementById("myRange").value;
    console.log(sq2);
    newURL2 = url.concat("&sqft=").concat(sq2).concat("&zipcode=").concat(zip2).concat("&year=").concat(year2).concat("&bedroom=").concat(bed2).concat("&bathroom=").concat(bath2)
    
    ////// ????? writing the json to a list
    d3.json(newURL2, function (data2) {
        document.getElementById("similarhouse").innerHTML=parseInt(data2);
        console.log(data2);
    });
}


var pricefilterMIN;
var pricefilterMAX;

window.onload = function(){
  // price range
      console.log("haha");
      $( "#slider-range" ).slider({
        range: true,
        min: 75,
        max: 8000,
        values: [ 300, 1500 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + "k"+ " - $" + ui.values[ 1 ] + "k");
  
            pricefilterMIN = ui.values[0];
            pricefilterMAX = ui.values[1];
          
        }
      });
      $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 )+ "k" +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) + "k");

// year buit range
      $( "#yearbuilt-range" ).slider({
        range: true,
        min: 1900,
        max: 2015,
        values: [ 1950, 2000 ],
        slide: function( event, ui ) {
          $( "#yearbuilt" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
        }
      });
      $( "#yearbuilt" ).val( "$" + $( "#yearbuilt-range" ).slider( "values", 0 ) +
        " - " ( "#yearbuilt-range" ).slider( "values", 1 ) );
} ;

var map = L.map('map',{
    center: [47.64701, -122.00425],
    zoom: 8
    });

 L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);


var a = [{"average": 676185.3921568628, "zipcode": 98177.0}, {"average": 310612.75572519086, "zipcode": 98178.0}, {"average": 423725.69506726455, "zipcode": 98155.0}, {"average": 645231.456445993, "zipcode": 98052.0}, {"average": 678163.0592592593, "zipcode": 98053.0}, {"average": 304262.1082089552, "zipcode": 98055.0}, {"average": 420890.54926108377, "zipcode": 98056.0}, {"average": 353608.63516483514, "zipcode": 98058.0}, {"average": 493552.53205128206, "zipcode": 98059.0}, {"average": 289078.3455882353, "zipcode": 98188.0}, {"average": 551688.6730038023, "zipcode": 98136.0}, {"average": 487479.6271186441, "zipcode": 98070.0}, {"average": 302878.8821428571, "zipcode": 98198.0}, {"average": 791820.807570978, "zipcode": 98199.0}, {"average": 569958.4652014652, "zipcode": 98072.0}, {"average": 685605.775510204, "zipcode": 98074.0}, {"average": 790576.6545961003, "zipcode": 98075.0}, {"average": 682774.8787878788, "zipcode": 98077.0}, {"average": 334921.0626780627, "zipcode": 98092.0}, {"average": 240328.3717472119, "zipcode": 98168.0}, {"average": 901258.2666666667, "zipcode": 98102.0}, {"average": 585085.465890183, "zipcode": 98103.0}, {"average": 862825.2314410481, "zipcode": 98105.0}, {"average": 319581.3940298507, "zipcode": 98106.0}, {"average": 579053.4172932331, "zipcode": 98107.0}, {"average": 355678.51612903224, "zipcode": 98108.0}, {"average": 879623.6238532111, "zipcode": 98109.0}, {"average": 1095499.342007435, "zipcode": 98112.0}, {"average": 619900.5471698113, "zipcode": 98115.0}, {"average": 618634.1696969697, "zipcode": 98116.0}, {"average": 576795.007233273, "zipcode": 98117.0}, {"average": 417637.43307086616, "zipcode": 98118.0}, {"average": 849448.0163043478, "zipcode": 98119.0}, {"average": 634360.1793103449, "zipcode": 98122.0}, {"average": 469455.77073170734, "zipcode": 98125.0}, {"average": 424706.3559322034, "zipcode": 98126.0}, {"average": 280804.6906077348, "zipcode": 98001.0}, {"average": 234284.0351758794, "zipcode": 98002.0}, {"average": 294111.27857142856, "zipcode": 98003.0}, {"average": 1355927.0820189274, "zipcode": 98004.0}, {"average": 386997.3967611336, "zipcode": 98133.0}, {"average": 859684.7791164658, "zipcode": 98006.0}, {"average": 616780.8357142857, "zipcode": 98007.0}, {"average": 645507.3780918728, "zipcode": 98008.0}, {"average": 423665.99, "zipcode": 98010.0}, {"average": 490351.4666666667, "zipcode": 98011.0}, {"average": 455617.1129032258, "zipcode": 98014.0}, {"average": 594547.6501457726, "zipcode": 98144.0}, {"average": 359483.2395833333, "zipcode": 98146.0}, {"average": 424788.74736842106, "zipcode": 98019.0}, {"average": 284908.5964912281, "zipcode": 98148.0}, {"average": 315709.30341880344, "zipcode": 98022.0}, {"average": 286732.79158316634, "zipcode": 98023.0}, {"average": 580526.7901234567, "zipcode": 98024.0}, {"average": 616990.5922330098, "zipcode": 98027.0}, {"average": 462480.035335689, "zipcode": 98028.0}, {"average": 612653.6105919003, "zipcode": 98029.0}, {"average": 296187.98046875, "zipcode": 98030.0}, {"average": 300539.8905109489, "zipcode": 98031.0}, {"average": 251296.24, "zipcode": 98032.0}, {"average": 803719.5231481482, "zipcode": 98033.0}, {"average": 521652.8587155963, "zipcode": 98034.0}, {"average": 366867.6, "zipcode": 98038.0}, {"average": 464231.8385826772, "zipcode": 98166.0}, {"average": 2160606.6, "zipcode": 98039.0}, {"average": 1194230.0212765958, "zipcode": 98040.0}, {"average": 311632.10583941604, "zipcode": 98042.0}, {"average": 527961.2032258065, "zipcode": 98065.0}, {"average": 439471.0814479638, "zipcode": 98045.0}, {"average": 810164.875, "zipcode": 98005.0}]
var zipcode = []
var price = []
for (var i = 0; i < a.length; i++) {
  zipcode.push(a[i].zipcode)
  price.push(a[i].average)
}

//d3.json("http://localhost:5000/project/status=2&sqft=2000&zipcode=98125&year=1920&bedroom=2&bathroom=2", function(json) {
//  var marker
//  for (var i = 0; i < json.length; i++) {
//    marker = L.marker([json[i].lat, json[i].lon]).addTo(map)
//  }
//})

d3.json("geo.json", function(json) {
    L.geoJson(json, {style: style}).addTo(map);
})

function getColor(zip) {
    var index = zipcode.indexOf(zip)
    if(index == -1){
        p = 0
    } else{
        var p = price[index]
    }
    return p > 800000 ? '#800026' :
           p > 700000 ? '#BD0026' :
           p > 600000 ? '#E31A1C' :
           p > 500000 ? '#FC4E2A' :
           p > 400000 ? '#FD8D3C' :
           p > 300000 ? '#FEB24C' :
           p > 200000 ? '#FED976' :
                            '#FFEDA0';
}

 function style(feature) {
    return {
      fillColor: getColor(feature.properties.ZIP),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

d3.json("geo.json", function(json) {
    geojson = L.geoJson(json, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);
})

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

function getPrize(zip) {
    var index = zipcode.indexOf(zip)
    if(index == -1){
        p = 0
    } else{
        var p = price[index]
    }
    return p
}

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>US Population Density</h4>' +  (props ?
        '<b>'+ '</b>zipcode <b/>' + props.ZIP + '</b><br />' + getPrize(props.ZIP) + ' dollar (average price)'
        : 'Hover over a state');
};

info.addTo(map);


// show the points from price range on map
function show_points(){
  min = 2
  max = 100000
  url = "http://localhost:5000/project/status=4&sqft=2000&zipcode=98125&year=1920&bedroom=2&bathroom=2"
  url = url.concat("&mi=").concat(min).concat("&ma=").concat(max)
  console.log(url)
  d3.json(url, function(json) {
    var marker
    for (var i = 0; i < json.length; i++) {
      marker = L.marker([json[i].lat, json[i].lon]).addTo(map)
      marker.bindPopup("<b>House Price</b><br>" + json[i].price).openPopup()
    }
  })
}