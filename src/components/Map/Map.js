import React, { Component } from 'react'
import Leaflet from 'leaflet';
import { 
    MapContainer, 
    TileLayer, 
    Marker, 
    Popup, 
    LayersControl, 
    LayerGroup, 
    FeatureGroup, 
    Rectangle, 
    Circle
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

Leaflet.Icon.Default.imagePath =
'../../../node_modules/leaflet';



const Map = () => {
    const center = [51.505, -0.09]
    const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
    ]

    return (
        <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{width: '400px', height: '600px'}}>
          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.Overlay name="Marker with popup">
              <Marker position={center}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Layer group with circles">
              <LayerGroup>
                <Circle
                  center={center}
                  pathOptions={{ fillColor: 'blue' }}
                  radius={200}
                />
                <Circle
                  center={center}
                  pathOptions={{ fillColor: 'red' }}
                  radius={100}
                  stroke={false}
                />
                <LayerGroup>
                  <Circle
                    center={[51.51, -0.08]}
                    pathOptions={{ color: 'green', fillColor: 'green' }}
                    radius={100}
                  />
                </LayerGroup>
              </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay name="Feature group">
              <FeatureGroup pathOptions={{ color: 'purple' }}>
                <Popup>Popup in FeatureGroup</Popup>
                <Circle center={[51.51, -0.06]} radius={200} />
                <Rectangle bounds={rectangle} />
              </FeatureGroup>
            </LayersControl.Overlay>
          </LayersControl>
        </MapContainer>
    )
}

export default Map;
