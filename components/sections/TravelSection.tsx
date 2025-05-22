import DestinationsGrid from "./sub-sections/DestinationsGrid";
import HeroSection from "./sub-sections/destination-hero";

export default function TravelSection() {
  return (
    <div className="container mx-auto px-12 py-12"> {/* Increased px-4 to px-8 for more horizontal margin */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <HeroSection />
        </div>
        <div className="lg:col-span-8">
          <DestinationsGrid />
        </div>
      </div>
    </div>
  );
}