import RoomHeader from "./RoomHeader";
import RoomCard from "./RoomCard";
import { rooms } from "@/lib/rooms";
import { AnimateIn } from '@/components/ui/animations';


export default function RoomSection() {
  return (
    <section className="py-20 mt-9 px-4 bg-background mb-9">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <RoomHeader />
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimateIn from="bottom" delay={0.1}>
            <RoomCard room={rooms[0]} variant="simple" />
          </AnimateIn>
          <AnimateIn from="bottom" delay={0.2}>
            <RoomCard room={rooms[1]} variant="detailed" />
          </AnimateIn>
          <AnimateIn from="bottom" delay={0.3}>
            <RoomCard room={rooms[2]} variant="minimal" />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}