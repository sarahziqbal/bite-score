import MapboxClient from "@/components/MapboxClient";

export default function Home() {
  return (
    <div className="h-full w-full">
      <MapboxClient lat={49.8951} lng={-97.1384} />
    </div>
  );
}
