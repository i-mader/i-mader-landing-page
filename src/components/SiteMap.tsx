"use client";

import "leaflet/dist/leaflet.css";
import { MapPinned } from "lucide-react";
import Link from "next/link";

import { MapContainer, TileLayer, Popup } from "react-leaflet";

function SiteMap() {
  const markerPosition = { lat: -6.1552264, lng: 106.8801062 };

  return (
    <MapContainer
      className="w-full h-[200px] lg:h-[417px]"
      center={markerPosition}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution="bullseye map"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Popup position={markerPosition}>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 "
          href="https://www.google.com/maps/place/Gedung+Wirausaha/@-6.2138777,106.8285411,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f4088c56757d:0x253f935e5b0a44fd!8m2!3d-6.213883!4d106.831116!16s%2Fg%2F1yfdpryjm?entry=ttu"
        >
          <MapPinned color="#2563EB" />
          <span className="text-blue-600">Our Office</span>
        </Link>
      </Popup>
    </MapContainer>
  );
}

export default SiteMap;
