import { Component, OnInit } from '@angular/core';

import * as ol from 'ol';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map:Map;
  source:XYZ;
  layer:TileLayer;
  view:View;

  constructor() {
  }


  ngOnInit() {
    this.source = new XYZ ({
      // Tiles from Mapbox (Light)
      //url: 'https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
      url:'http://mt.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
    });
   

    this.layer = new TileLayer({
      source: this.source
    });

    this.view = new View({
      center: [6.661594, 50.433237],
      zoom: 3,
    });

    this.map = new Map({
      target: 'map',
      layers: [this.layer],
      view: this.view
    });
  }

}
