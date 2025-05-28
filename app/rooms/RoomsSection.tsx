import RoomHeader from "./RoomHeader";
import RoomCard from "./RoomCard";
import { rooms } from "@/lib/rooms";

export default function RoomSection() {
  return (
    <section className="py-20 mt-9 px-4 bg-background mb-9">
      <div className="max-w-6xl mx-auto">
        <RoomHeader />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RoomCard room={rooms[0]} variant="simple" />
          <RoomCard room={rooms[1]} variant="detailed" />
          <RoomCard room={rooms[2]} variant="minimal" />
        </div>
      </div>
    </section>
  );
}