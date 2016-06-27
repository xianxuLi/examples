
var map = new maptalks.Map('map', {
  center: [121.48542888885189, 31.228541533313702],
  zoom: 14,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: '$(urlTemplate)',
    subdomains: $(subdomains)
  })
});

var areaTool = new maptalks.AreaTool({
  symbol: {
    lineColor: 'blue',
    lineWidth: 2,
    polygonFill: 'white',
    polygonOpacity: 0.5
  },
  language: ''
}).addTo(map);
