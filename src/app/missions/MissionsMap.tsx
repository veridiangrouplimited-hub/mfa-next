"use client";

import { useEffect, useRef, useCallback } from "react";
import "leaflet/dist/leaflet.css";
import type { Mission, MissionCategory } from "@/data/missions";

type ExtendedCategory = MissionCategory | "Permanent Mission";

const categoryColor: Record<ExtendedCategory, string> = {
  "Embassy":           "#007d53",
  "Permanent Mission": "#007d53",
  "High Commission":   "#c8993e",
  "Consulate":         "#1a3d6b",
};

const categoryLabel: Record<ExtendedCategory, string> = {
  "Embassy":           "Embassy",
  "Permanent Mission": "Embassy",
  "High Commission":   "High Commission",
  "Consulate":         "Consulate",
};

interface Props {
  missions: Mission[];
}

export default function MissionsMap({ missions }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef       = useRef<import("leaflet").Map | null>(null);
  const markersRef   = useRef<import("leaflet").Layer[]>([]);
  const leafletRef   = useRef<typeof import("leaflet") | null>(null);

  const addMarkers = useCallback((list: Mission[]) => {
    const L   = leafletRef.current;
    const map = mapRef.current;
    if (!L || !map) return;

    markersRef.current.forEach((m) => map.removeLayer(m));
    markersRef.current = [];

    list.forEach((m) => {
      if (m.lat == null || m.lng == null) return;

      const cat   = (m.category as ExtendedCategory) ?? "Embassy";
      const color = categoryColor[cat] ?? "#007d53";
      const label = categoryLabel[cat] ?? m.category;

      const icon = L.divIcon({
        className: "mission-dot",
        html: `<span style="display:block;width:14px;height:14px;background:${color};border:2.5px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.40);cursor:pointer;"></span>`,
        iconSize:   [14, 14],
        iconAnchor: [7, 7],
      });

      const popup = L.popup({ maxWidth: 280 }).setContent(`
        <div style="font-family:Georgia,serif;min-width:200px">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:${color};margin-bottom:5px">${label}</div>
          <div style="font-size:15px;font-weight:700;color:#1a2e1a;line-height:1.35;margin-bottom:3px">${m.name}</div>
          <div style="font-size:13px;font-weight:600;color:#007d53;margin-bottom:8px">${m.city}, ${m.country}</div>
          ${m.address ? `<div style="font-size:12px;color:#444;line-height:1.5;margin-bottom:4px">${m.address}</div>` : ""}
          <div style="font-size:12px;color:#666;margin-top:4px;border-top:1px solid #e5e5e5;padding-top:6px">${m.hours}</div>
          ${m.website ? `<a href="${m.website}" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-top:8px;font-size:12px;font-weight:700;color:#007d53;text-decoration:none">Visit Mission Site →</a>` : ""}
        </div>
      `);

      const marker = L.marker([m.lat, m.lng], { icon }).bindPopup(popup).addTo(map);
      markersRef.current.push(marker);
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    async function init() {
      const L = await import("leaflet");

      // Fix webpack default icon breakage
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl:       "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      if (!containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: [5, 20],
        zoom: 3,
        scrollWheelZoom: false,
        zoomControl: true,
      });

      mapRef.current   = map;
      leafletRef.current = L;

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://openstreetmap.org">OSM</a>',
        maxZoom: 18,
      }).addTo(map);

      map.invalidateSize();
      addMarkers(missions);
    }

    init();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current    = null;
        leafletRef.current = null;
        markersRef.current = [];
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    addMarkers(missions);
  }, [missions, addMarkers]);

  return (
    /* isolation:isolate contains Leaflet's z-indexes (200-1000) so popups don't bleed above the navbar */
    <div style={{ isolation: "isolate", height: "100%", width: "100%" }}>
      <div ref={containerRef} className="h-full w-full" />
    </div>
  );
}
