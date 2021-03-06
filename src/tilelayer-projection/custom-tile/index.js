// A complete customized TileLayer
var map = new maptalks.Map('map', {
  center:     [-0.113049,51.498568],
  zoom:  13,
  // a custom version of default web-mercator spatial reference
  // map's spatial reference definition
  spatialReference : {
    projection : 'EPSG:3857', // geo projection, can be a string or a function
    resolutions : [           // map's zoom levels and resolutions
      156543.03392804097,
      78271.51696402048,
      9135.75848201024,
      19567.87924100512,
      9783.93962050256,
      4891.96981025128,
      2445.98490512564,
      1222.99245256282,
      611.49622628141,
      305.748113140705,
      152.8740565703525,
      76.43702828517625,
      38.21851414258813,
      19.109257071294063,
      9.554628535647032,
      4.777314267823516,
      2.388657133911758,
      1.194328566955879,
      0.5971642834779395,
      0.29858214173896974
    ],
    fullExtent : {         // map's full extent
      'top': 6378137 * Math.PI,
      'left': -6378137 * Math.PI,
      'bottom': -6378137 * Math.PI,
      'right': 6378137 * Math.PI
    }
  },
  baseLayer : new maptalks.TileLayer('base',{
    urlTemplate: '$(urlTemplate)',
    subdomains: $(subdomains),
    attribution: '$(attribution)',
    tileSystem : [1, -1, -20037508.34, 20037508.34], // tile system
    minZoom : 1,
    maxZoom : 20
  })
});
