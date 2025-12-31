"use client";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

type Props = {
  lat: number;
  lng: number;
};
export default function MapboxMap({ lat, lng }: Props) {
  return (
    <Map
      initialViewState={{
        latitude: lat,
        longitude: lng,
        zoom: 13,
      }}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      style={{ width: "100%", height: "100%" }}
    >
      <Marker latitude={lat} longitude={lng} />
    </Map>
  );
}
