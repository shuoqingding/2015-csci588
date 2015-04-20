$(document).ready(function(){/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize);

var map;

function initialize() {

  /* position Amsterdam */
  var latlng = new google.maps.LatLng(34.022352,-118.285117);

  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 16
  };
  
  // var marker = new google.maps.Marker({
  //   position: latlng,
  //   url: '/',
  //   animation: google.maps.Animation.DROP
  // });
  
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  // marker.setMap(map);
 
};

var mks = [];

var gym = [ [34.0243674,-118.2883412], [34.0219909,-118.2887591] ];
var dine = [ [34.0240944,-118.2874238], [34.0210133,-118.2854873], [34.020084,-118.2833683], [34.0202632,-118.2888436], [34.019424,-118.2837191] ];
var parking = [ [34.0202158,-118.2912245], [34.0216649,-118.289636], [34.0231188,-118.2855376], [34.0245745,-118.2892887], [34.0211217,-118.2896952] ];
var transport = [ [34.0240052,-118.2870032], [34.0224706,-118.2833248] ];
var lib = [ [34.0236214,-118.2868131], [34.0221442,-118.284261], [34.0210612,-118.2844513], [34.0208745,-118.2854598] ];
var hospital = [ [34.0240067,-118.2886758] ];


function setMarkers( markers ){
  clear_markers();
  for (var i = markers.length - 1; i >= 0; i--) {
      var marker = new google.maps.Marker({
        position:  new google.maps.LatLng(markers[i][0],markers[i][1]),
        animation: google.maps.Animation.DROP,

      });
      marker.setMap(map);
      mks.push( marker );
  };
};

function clear_markers(){
  for (var i = mks.length - 1; i >= 0; i--) {
    mks[i].setMap(null);
  }
  mks = [];
}

$("#food_icon").click( function(){
  setMarkers(dine);
} );

$("#transp_icon").click( function(){
  setMarkers(transport);
} );

$("#lib_icon").click( function(){
  setMarkers(lib);
} );

$("#med_icon").click( function(){
  setMarkers(hospital);
} );

$("#park_icon").click( function(){
  setMarkers(parking);
} );


$("#gym_icon").click( function(){
  setMarkers(gym);
} );


/* end google maps -----------------------------------------------------*/
});


