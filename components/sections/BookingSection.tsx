"use client"

import { useState } from "react"
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export function Booking() {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()

  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="border-none shadow-lg bg-white bg-black/40 max-w-4xl mx-auto text-black dark:text-white">
            <CardContent className="p-6">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                
                {/* Check-in */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Check-in</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-white dark:bg-neutral-900 dark:text-white",
                          !checkIn && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Check-out */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Check-out</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-white dark:bg-neutral-900 dark:text-white",
                          !checkOut && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        initialFocus
                        disabled={(date) => date < (checkIn || new Date())}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Guests</label>
                  <Select>
                    <SelectTrigger className="bg-white dark:bg-neutral-900 dark:text-white">
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                      <SelectItem value="5">5+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Button */}
                <div className="flex items-end">
                  <Button className="w-full text-base text-sm border-green-500 bg-green-400 transition-colors duration-700 border-white hover:bg-green-500 hover:text-white">
                    Check Availability
                  </Button>
                </div>

              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
