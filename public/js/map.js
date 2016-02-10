// $( document ).ready(function(){
// 	L.mapbox.accessToken = 'pk.eyJ1IjoiZGlnaXRhbGFydGNyZXciLCJhIjoiY2lrY2pibHNrMG0zbnZoa3Uwd2dzMHdrNiJ9.qVjcEgr_bpv5TCmso_hkjA';
// var geojson = [
//   {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "geometry": {
//         "type": "Point",
//         "coordinates": [
//           -77.0366048812866,
//           38.89784666877921
//         ]
//       },
//       "properties": {}
//     }
//   ]
// }

// ];
// var map = L.mapbox.map('map-five', 'mapbox.streets', {
//     scrollWheelZoom: false
// }).setView([38.8929,-77.0252], 14);

// var myLayer = L.mapbox.featureLayer(geojson, {
//   pointToLayer: function(feature, latlon) {
//     return L.circleMarker(latlon, {
//       fillColor: '#ff0000',
//       fillOpacity: 0.8,
//       stroke: false
//     });
//   }
// }).addTo(map);

// });

