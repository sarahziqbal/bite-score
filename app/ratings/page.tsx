import MapboxClient from "@/components/MapboxClient";
import RatingsPanel from "@/components/RatingsPanel";

export default function RatingsPage() {
  return (
    <>
      <div className="w-1/3 h-full">
        <RatingsPanel />
      </div>
      <div className="w-2/3 h-full">
        <MapboxClient lat={49.8951} lng={-97.1384} />
      </div>
    </>
  );
}