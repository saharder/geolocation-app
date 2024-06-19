import {useEffect } from "react";
import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";

export interface IOpenLayersMap {
  latitude: number;
  longitude: number;
}

const OpenLayersMap = (props: IOpenLayersMap) => {
  const { latitude, longitude } = props;
  useEffect(() => {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: "map",
      view: new View({
        center: fromLonLat([longitude, latitude]),
        zoom: 12,
      }),
    });

    // Clean up the map on unmount
    return () => {
      console.log("Cleaning up the map");
      map.setTarget(undefined);
    };
  }, [longitude, latitude]);

  return (
    <div
      id="map"
      className="map"
      style={{ width: "100%", height: "400px" }}
    />
  );
};

export default OpenLayersMap;
