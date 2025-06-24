import React from 'react'
import RoomCarousel from './RoomCarousel'

// Sample room images from Pexels
const roomImages = [
  {
    src: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/partner-images/79/92/2f41bf85caca9e2555412c0f6d47739e247bb382cd18bf928fa30d626029.jpeg",
    alt: "Luxury Hotel Room"
  },
  {
    src: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Elegant Hotel Suite"
  },
  {
    src: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/partner-images/55/81/42ea1f94c11a748b190b5894400bd6aa1256e491fd9456def026b852a1ae.jpeg",
    alt: "Modern Hotel Bathroom"
  }
]

export default function RoomImageSection() {
  return (
    <div className="lg:col-span-1">
      <div className="bg-card rounded-lg shadow-md overflow-hidden sticky top-8">
        <RoomCarousel images={roomImages} />
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-semibold text-xl text-card-foreground">Deluxe Single Room</h3>
            <p className="text-muted-foreground">Experience luxury and comfort</p>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <span className="text-2xl font-bold text-card-foreground">$35</span>
              <span className="text-muted-foreground text-sm ml-1">per night</span>
            </div>
            
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg 
                  key={i} 
                  className="w-5 h-5 text-yellow-400 fill-current" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <span className="text-sm text-muted-foreground ml-1">(42 reviews)</span>
            </div>
          </div>
          
          <div className="pt-4 border-t border-border">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Availability</span>
              <span className="font-medium text-green-500">Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}