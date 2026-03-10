import { useRef, useEffect, useState } from "react";
import { cityPhotos } from "../data/photos";

interface Place {
  name: string;
  country: string;
  lat: number;
  lng: number;
  images?: string[];
  caption?: string;
}

const VISITED_PLACES: Place[] = [
  // Europe
  { name: "Paris", country: "France", lat: 48.8566, lng: 2.3522, caption: "" },
  { name: "Marseille", country: "France", lat: 43.2965, lng: 5.3698, caption: "" },
  { name: "Barcelona", country: "Spain", lat: 41.3851, lng: 2.1734, caption: "" },
  { name: "Palma de Mallorca", country: "Spain", lat: 39.5696, lng: 2.6502, caption: "" },
  { name: "Rome", country: "Italy", lat: 41.9028, lng: 12.4964, caption: "" },
  { name: "Naples", country: "Italy", lat: 40.8518, lng: 14.2681, caption: "" },
  { name: "Florence", country: "Italy", lat: 43.7696, lng: 11.2558, caption: "" },

  // Central America & Mexico
  { name: "Panama City", country: "Panama", lat: 8.9936, lng: -79.5197, caption: "" },
  { name: "San José", country: "Costa Rica", lat: 9.9281, lng: -84.0907, caption: "" },
  { name: "Liberia", country: "Costa Rica", lat: 10.6346, lng: -85.4408, caption: "" },
  { name: "Limón", country: "Costa Rica", lat: 9.9902, lng: -83.0362, caption: "" },
  { name: "Mexico City", country: "Mexico", lat: 19.4326, lng: -99.1332, caption: "" },
  { name: "Cancún", country: "Mexico", lat: 21.1619, lng: -86.8515, caption: "" },
  { name: "Cozumel", country: "Mexico", lat: 20.4230, lng: -86.9223, caption: "" },
  { name: "Playa del Carmen", country: "Mexico", lat: 20.6296, lng: -87.0739, caption: "" },

  // South America
  { name: "Bogotá", country: "Colombia", lat: 4.7110, lng: -74.0721, caption: "" },
  { name: "Medellín", country: "Colombia", lat: 6.2442, lng: -75.5812, caption: "" },
  { name: "Cartagena", country: "Colombia", lat: 10.3910, lng: -75.4794, caption: "" },
  { name: "Santa Marta", country: "Colombia", lat: 11.2408, lng: -74.2110, caption: "" },
  { name: "Bucaramanga", country: "Colombia", lat: 7.1193, lng: -73.1227, caption: "" },
  { name: "Lima", country: "Peru", lat: -12.0464, lng: -77.0428, caption: "" },
  { name: "Cusco", country: "Peru", lat: -13.5320, lng: -71.9675, caption: "" },
  { name: "Machu Picchu", country: "Peru", lat: -13.1631, lng: -72.5450, caption: "" },

  // North America
  { name: "Orlando", country: "USA", lat: 28.5383, lng: -81.3792, caption: "" },
  { name: "Miami", country: "USA", lat: 25.7617, lng: -80.1918, caption: "" },
  { name: "Tampa", country: "USA", lat: 27.9506, lng: -82.4572, caption: "" },
  { name: "Daytona Beach", country: "USA", lat: 29.2108, lng: -81.0228, caption: "" },
  { name: "Gainesville", country: "USA", lat: 29.6516, lng: -82.3248, caption: "" },
  { name: "Tallahassee", country: "USA", lat: 30.4383, lng: -84.2807, caption: "" },
  { name: "Panama City", country: "USA", lat: 30.1588, lng: -85.6602, caption: "" },
  { name: "Atlanta", country: "USA", lat: 33.7490, lng: -84.3880, caption: "" },
  { name: "Savannah", country: "USA", lat: 32.0809, lng: -81.0912, caption: "" },
  { name: "Gatlinburg", country: "USA", lat: 35.7143, lng: -83.5102, caption: "" },
  { name: "New York City", country: "USA", lat: 40.7128, lng: -74.0060, caption: "" },
  { name: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194, caption: "" },
  { name: "San Diego", country: "USA", lat: 32.7157, lng: -117.1611, caption: "" },
  { name: "Los Angeles", country: "USA", lat: 34.0522, lng: -118.2437, caption: "" },
  { name: "Anaheim", country: "USA", lat: 33.8366, lng: -117.9143, caption: "" },
  { name: "Salt Lake City", country: "USA", lat: 40.7608, lng: -111.8910, caption: "" },
  { name: "Park City", country: "USA", lat: 40.6461, lng: -111.4980, caption: "" },
  { name: "Las Vegas", country: "USA", lat: 36.1699, lng: -115.1398, caption: "" },
  { name: "Hoover Dam", country: "USA", lat: 36.0160, lng: -114.7377, caption: "" },
  { name: "Grand Canyon", country: "USA", lat: 36.0544, lng: -112.1401, caption: "" },
  { name: "Yellowstone", country: "USA", lat: 44.4280, lng: -110.5885, caption: "" },
  { name: "Bozeman", country: "USA", lat: 45.6770, lng: -111.0429, caption: "" },
  { name: "Gardiner", country: "USA", lat: 45.0358, lng: -110.7071, caption: "" },
  { name: "West Thumb", country: "USA", lat: 44.4199, lng: -110.5741, caption: "" },
  { name: "Seattle", country: "USA", lat: 47.6062, lng: -122.3321, caption: "" },
  { name: "Victoria", country: "Canada", lat: 48.4284, lng: -123.3656, caption: "" },
  { name: "Ketchikan", country: "USA", lat: 55.3422, lng: -131.6461, caption: "" },
  { name: "Skagway", country: "USA", lat: 59.4583, lng: -135.3139, caption: "" },
  { name: "Juneau", country: "USA", lat: 58.3005, lng: -134.4197, caption: "" },
  { name: "Glacier Bay", country: "USA", lat: 58.6658, lng: -136.9000, caption: "" },
  { name: "Denver", country: "USA", lat: 39.7392, lng: -104.9903, caption: "" },
  { name: "Boulder", country: "USA", lat: 40.0150, lng: -105.2705, caption: "" },
  { name: "Colorado Springs", country: "USA", lat: 38.8339, lng: -104.8214, caption: "" },
  { name: "Breckenridge", country: "USA", lat: 39.4817, lng: -106.0384, caption: "" },
  { name: "Keystone", country: "USA", lat: 39.6061, lng: -105.9669, caption: "" },
  { name: "Winter Park", country: "USA", lat: 39.8868, lng: -105.7631, caption: "" },
  { name: "Ward", country: "USA", lat: 40.0711, lng: -105.5097, caption: "" },
  { name: "New Orleans", country: "USA", lat: 29.9511, lng: -90.0715, caption: "" },
  { name: "Naples", country: "USA", lat: 26.1420, lng: -81.7948, caption: "" },
];

export default function TravelGlobe({ onReady }: { onReady?: (fly: () => void) => void }) {
  const [GlobeComponent, setGlobeComponent] = useState<any>(null);
  const globeRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [selected, setSelected] = useState<Place | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isFlying, setIsFlying] = useState(false);
  const [visitedHistory, setVisitedHistory] = useState<string[]>([]);

  useEffect(() => {
    import("react-globe.gl").then((module) => {
      setGlobeComponent(() => module.default);
    });
  }, []);

  useEffect(() => {
    const updateSize = () => setDimensions({
      width: Math.min(window.innerWidth * 0.65, 900),
      height: window.innerHeight * 1.2,
    });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.pointOfView({ lat: 20, lng: -30, altitude: 2.2 }, 0);
      const controls = globeRef.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.15;
        controls.enableZoom = true;
      }
    }
  }, [GlobeComponent]);

  useEffect(() => {
    if (lightboxIndex === null || !selected?.images) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setLightboxIndex(i => Math.min((i ?? 0) + 1, selected.images!.length - 1));
      if (e.key === "ArrowLeft") setLightboxIndex(i => Math.max((i ?? 0) - 1, 0));
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, selected]);

  const takeMeSomewhere = () => {
    const citiesWithPhotos = VISITED_PLACES.filter(p => {
      const photos = cityPhotos[p.name];
      return photos && photos.length > 0;
    });
    if (citiesWithPhotos.length === 0) return;

    // Filter out already visited; reset if we've seen them all
    let remaining = citiesWithPhotos.filter(p => !visitedHistory.includes(p.name));
    if (remaining.length === 0) {
      setVisitedHistory([]);
      remaining = citiesWithPhotos;
    }

    const randomPlace = remaining[Math.floor(Math.random() * remaining.length)];

    const controls = globeRef.current?.controls();
    if (controls) controls.autoRotate = false;
    setIsFlying(true);
    setSelected(null);

    globeRef.current?.pointOfView(
      { lat: randomPlace.lat, lng: randomPlace.lng, altitude: 1.5 },
      2000
    );

    setTimeout(() => {
      const photos = cityPhotos[randomPlace.name] || [];
      setSelected({ ...randomPlace, images: photos });
      setLightboxIndex(null);
      setIsFlying(false);
      setVisitedHistory(prev => [...prev, randomPlace.name]);
    }, 2200);
  };

  // Expose takeMeSomewhere to parent — re-expose whenever visitedHistory changes
  useEffect(() => {
    if (onReady && GlobeComponent) onReady(takeMeSomewhere);
  }, [GlobeComponent, visitedHistory]);

  const closeModal = () => {
    setSelected(null);
    setLightboxIndex(null);
    const controls = globeRef.current?.controls();
    if (controls) controls.autoRotate = true;
  };

  const hasImages = (p: Place) => p.images && p.images.length > 0;

  if (!GlobeComponent || dimensions.width === 0) {
    return <div className="w-full h-screen bg-[#f8f5fb]" />;
  }

  const images = selected?.images ?? [];
  const currentImg = lightboxIndex !== null ? images[lightboxIndex] : null;

  return (
    <div className="relative w-full bg-[#f8f5fb]" style={{ height: "150vh" }}>
      <GlobeComponent
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="#f8f5fb"
        pointsData={VISITED_PLACES}
        pointLat="lat"
        pointLng="lng"
        pointColor={() => "#F2B6C1"}
        pointAltitude={0.015}
        pointRadius={0.35}
        pointLabel={(d: any) => `
          <div style="
            background: white;
            color: #4A0F2A;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-family: 'DM Serif Display', serif;
            font-weight: 600;
            box-shadow: 0 2px 8px rgba(74,15,42,0.2);
            white-space: nowrap;
          ">${d.name}</div>
        `}
        onPointClick={(point: any) => {
          const controls = globeRef.current?.controls();
          if (controls) controls.autoRotate = false;
          const place = point as Place;
          const photos = cityPhotos[place.name] || [];
          setSelected({ ...place, images: photos });
          setLightboxIndex(null);
        }}
      />

      {/* Main modal */}
      {selected && lightboxIndex === null && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center"
          style={{ background: "rgba(74, 15, 42, 0.45)", backdropFilter: "blur(4px)" }}
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full mx-6"
            style={{ maxWidth: "1100px", maxHeight: "95vh", animation: "modalIn 0.25s ease" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between px-8 pt-7 pb-4">
              <div>
                <h3 className="text-2xl font-serifItalic2 text-[#4A0F2A]">{selected.name}</h3>
                <p className="text-xs tracking-[0.3em] text-[#9a4652] mt-1 font-semibold uppercase">{selected.country}</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={takeMeSomewhere}
                  className="text-xs tracking-widest text-[#9a4652] hover:text-[#4A0F2A] font-semibold transition flex items-center gap-1"
                >
                  ✈ Next destination
                </button>
                <button onClick={closeModal} className="text-[#C74864] hover:text-[#4A0F2A] transition text-3xl leading-none">×</button>
              </div>
            </div>

            {selected.caption && (
              <p className="px-8 pb-4 text-[#6D2542] font-serif text-sm leading-relaxed">{selected.caption}</p>
            )}

            <div className="overflow-y-auto px-8 pb-8" style={{ maxHeight: "70vh" }}>
              {hasImages(selected) ? (
                <div className="grid grid-cols-4 gap-3">
                  {selected.images!.map((src, i) => (
                    <div
                      key={i}
                      className="aspect-square overflow-hidden rounded-xl cursor-pointer"
                      onClick={() => setLightboxIndex(i)}
                    >
                      <img
                        src={src}
                        alt={`${selected.name} ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="w-full h-48 rounded-2xl flex flex-col items-center justify-center gap-3"
                  style={{ background: "linear-gradient(135deg, #F2B6C1 0%, #C74864 100%)" }}
                >
                  <span className="text-4xl">📍</span>
                  <span className="text-white text-lg font-serif tracking-wide">{selected.name}</span>
                  <span className="text-white/70 text-xs italic">No photos yet</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {currentImg && (
        <div
          className="absolute inset-0 z-30 flex items-center justify-center"
          style={{ background: "rgba(20, 5, 15, 0.92)", backdropFilter: "blur(10px)", animation: "modalIn 0.2s ease" }}
          onClick={() => setLightboxIndex(null)}
        >
          <button className="absolute top-6 right-8 text-white/70 hover:text-white text-4xl leading-none z-40" onClick={() => setLightboxIndex(null)}>×</button>
          <button
            className="absolute top-6 left-8 text-white/60 hover:text-white text-sm tracking-widest uppercase z-40"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
          >← Back</button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest z-40">
            {(lightboxIndex ?? 0) + 1} / {images.length}
          </div>
          {lightboxIndex! > 0 && (
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 transition flex items-center justify-center text-white text-2xl"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(i => Math.max((i ?? 0) - 1, 0)); }}
            >‹</button>
          )}
          {lightboxIndex! < images.length - 1 && (
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 transition flex items-center justify-center text-white text-2xl"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(i => Math.min((i ?? 0) + 1, images.length - 1)); }}
            >›</button>
          )}
          <img
            src={currentImg}
            alt="Photo"
            className="max-w-[80vw] max-h-[80vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.93) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}