"use client";

import { AnimateIn } from '@/components/ui/animations';
import { Button } from '@/components/ui/button';
import React from "react";
import { CheckCircle } from "lucide-react";

const facilities = [
  "Modern and full Air Condition (AC) Conference Rooms Capacity",
  "Conference facilities can occupy up to 100 delegates",
  "PowerPoint screen facilities",
  "Flip chart and Maker Pens",
  "A variety of seating arrangements / layouts",
  "Seminar / Syndicate classrooms and offices",
  "Lunches & refreshments",
  "Onsite event planner",
  "Delegate packs (writing materials / badges)",
  "A free Parking Space",
  "Free WiFi",
  "Business support(stationary)",
];

export function MeetingsSection() {
  return (
    <section id="meetings" className="py-20 mt-17 bg-gray-200 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Meetings & Training
          </h2>
          <div className="w-20 h-1 bg-[color:var(--greenish)] mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Sophisticated spaces designed for productive business meetings, conferences, and training sessions, 
            equipped with cutting-edge technology and supported by our attentive staff.
          </p>
        </AnimateIn>


        <AnimateIn>
          <div className="mt-12 mb-5 bg-background p-6 md:p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Plan Your Next Event With Us</h3>
                <p className="text-muted-foreground mb-6">
                  From corporate meetings to training programs, our versatile venues and dedicated event planning team 
                  will ensure your event is a success. All spaces include high-speed Wi-Fi, audiovisual equipment, 
                  and customizable catering options.
                </p>
                <Button className='text-base text-sm border-[color:var(--greenish)] bg-[color:var(--greenish)] transition-colors duration-700 border-white hover:bg-[color:var(--limeish)] hover:text-black'>Request a Proposal</Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/40 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary">5</p>
                  <p className="text-sm">Meeting Rooms</p>
                </div>
                <div className="bg-muted/40 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary">200</p>
                  <p className="text-sm">Max Capacity</p>
                </div>
                <div className="bg-muted/40 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary">100%</p>
                  <p className="text-sm">Wi-Fi Coverage</p>
                </div>
                <div className="bg-muted/40 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm">Technical Support</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>

      <section className="py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6 text-center">
          Conference Facilities
        </h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {facilities.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-200">
              <CheckCircle className="text-[color:var(--greenish)] mt-1" size={22} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      </section>
    </section>
  );
}



