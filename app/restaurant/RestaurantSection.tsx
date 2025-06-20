'use client'

import React from 'react'
import { Clock, Users, TreePine, Coffee, MapPin } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

const restaurants = [
  {
    id: 'tembo',
    name: 'Tembo Restaurant',
    icon: Users,
    description: 'Indoor restaurant that is ideal for large groups and individuals who want to enjoy their meals in a spacious and more private space. The restaurant best serves big groups attending training and seminars. Variety of dishes are offered to include buffet, cocktails.',
    features: ['Indoor Dining', 'Large Groups', 'Private Space', 'Buffet & Cocktails'],
    gradient: 'from-blue-500 to-purple-600',
    bgGradient: 'from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30'
  },
  {
    id: 'kipepeo',
    name: 'Kipepeo Garden',
    icon: TreePine,
    description: 'The perfect setting for outdoor dining with a relaxing meal for those who want to enjoy their meal accompanied by a nice view of our beautiful garden and swimming pool. Enjoy your drink and a variety of tasty a la carte dishes as you enjoy the soothing sounds of birds.',
    features: ['Outdoor Dining', 'Garden View', 'Pool View', 'A La Carte'],
    gradient: 'from-green-500 to-teal-600',
    bgGradient: 'from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30'
  },
  {
    id: 'mbuga',
    name: 'Mbuga Coffee Shop & Bar',
    icon: Coffee,
    description: 'Mbuga coffee shop and Bar provides you with a variety of coffee tastes, tea, cocktails and all drinks. Enjoy your favorite drink with friends while you can have snacks, bites, light meals and watch sports or listen to music.',
    features: ['Coffee & Tea', 'Cocktails', 'Light Meals', 'Sports & Music'],
    gradient: 'from-amber-500 to-orange-600',
    bgGradient: 'from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30'
  }
]

const operatingHours = [
  { meal: 'Breakfast', time: '06:30 – 10:30', icon: '🌅' },
  { meal: 'Lunch', time: '12:00 – 15:00', icon: '☀️' },
  { meal: 'Dinner', time: '18:00 – 22:30', icon: '🌙' }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: 'easeOut'
    }
  })
}

export default function RestaurantSection() {
  return (
    <section className=" mt-17 bg-gray-200 dark:bg-zinc-900">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeInUp}
        className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-gray-100 dark:bg-zinc-900" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-black mb-6">
              Restaurant &amp; Bar
            </h1>
            <div className="w-17 h-1 bg-[color:var(--greenish)] mx-auto mb-4"></div>

            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              With culinary offerings ranging from fresh African specialties, Indian and a variety of seafood, KCC Hotels is celebrated for its rich fusion of flavors. Dine on pleasure-seeking cuisine bursting with creativity in our hotel&apos;s restaurants.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Operating Hours Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Operating Hours</h2>
            <p className="text-gray-600 dark:text-gray-300">All our dining venues share the same convenient hours</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {operatingHours.map((schedule, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="text-3xl mb-3">{schedule.icon}</div>
                    <h3 className="text-xl font-semibold text-[color:var(--greenish)] mb-2">{schedule.meal}</h3>
                    <div className="flex items-center justify-center">
                      <Clock className="w-4 h-4 text-[color:var(--greenish)] mr-2" />
                      <span className="text-gray-600 dark:text-gray-300 font-medium">{schedule.time}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Restaurants Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[color:var(--greenish)] mb-4">Our Dining Venues</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Each venue offers a unique atmosphere and dining experience tailored to different preferences and occasions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {restaurants.map((restaurant, index) => {
              const IconComponent = restaurant.icon
              return (
                <motion.div
                  key={restaurant.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <Card
                    className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${restaurant.bgGradient} hover:-translate-y-2 overflow-hidden`}
                  >
                    <CardHeader className="relative pb-6">
                      <div className={`absolute top-4 right-4 p-3 bg-gradient-to-br ${restaurant.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-[color:var(--greenish)] mb-2 pr-16">
                        {restaurant.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                        {restaurant.description}
                      </CardDescription>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-[color:var(--greenish)] flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          Features
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {restaurant.features.map((feature, featureIndex) => (
                            <Badge
                              key={featureIndex}
                              variant="secondary"
                              className="bg-white/80 dark:bg-slate-700/80 text-[color:var(--greenish)] hover:bg-white dark:hover:bg-slate-700 transition-colors"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="font-semibold text-[color:var(--greenish)] mb-3 flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          Operating Hours
                        </h4>
                        <div className="space-y-2">
                          {operatingHours.map((schedule, scheduleIndex) => (
                            <div key={scheduleIndex} className="flex justify-between items-center text-sm">
                              <span className="text-gray-600 dark:text-gray-400">{schedule.meal}</span>
                              <span className="font-medium text-[color:var(--greenish)]">{schedule.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href="tel:+255232402644" passHref >
              <Button size="lg" variant="outline">
                Order Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </section>
  )
}