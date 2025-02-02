"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Card, CardContent } from "./card"

const events = [
  { id: 1, title: "Food Truck Festival", date: "March 15, 2024", time: "2:00 PM - 8:00 PM", location: "Downtown Plaza" },
  { id: 2, title: "Chef's Special Night", date: "April 5, 2024", time: "6:00 PM - 10:00 PM", location: "Eatzo Main Hall" },
  { id: 3, title: "Eatzo Anniversary Celebration", date: "May 20, 2024", time: "5:00 PM - 11:00 PM", location: "City Park" },
  { id: 4, title: "Wine & Dine Experience", date: "June 12, 2024", time: "7:00 PM - 11:30 PM", location: "Sunset Rooftop" },
  { id: 5, title: "Summer BBQ Bash", date: "July 4, 2024", time: "12:00 PM - 6:00 PM", location: "Lakeside Park" },
  { id: 6, title: "Vegan Food Festival", date: "August 18, 2024", time: "1:00 PM - 7:00 PM", location: "Greenway Market" },
  { id: 7, title: "Seafood Extravaganza", date: "September 9, 2024", time: "4:00 PM - 9:00 PM", location: "Harbor Square" },
  { id: 8, title: "Gourmet Street Food Night", date: "October 14, 2024", time: "6:30 PM - 12:00 AM", location: "City Walk" },
  { id: 9, title: "Holiday Feast Market", date: "December 20, 2024", time: "3:00 PM - 10:00 PM", location: "Winter Village" },
  { id: 10, title: "New Year's Celebration", date: "December 31, 2024", time: "8:00 PM - 1:00 AM", location: "Grand Plaza" },
]

export default function EventsCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { perView: 3, spacing: 20 },
    breakpoints: {
      "(max-width: 1024px)": { slides: { perView: 2, spacing: 15 } },
      "(max-width: 768px)": { slides: { perView: 1, spacing: 10 } },
    },
  })

  return (
    <div className="w-full mb-12"> {/* Added margin-bottom for spacing before footer */}
      <div ref={sliderRef} className="keen-slider w-full">
        {events.map((event) => (
          <div key={event.id} className="keen-slider__slide flex justify-center">
            <Card className="w-full max-w-sm rounded-2xl border-2 border-white bg-grey text-white shadow-md transition hover:shadow-lg">
              <CardContent className="p-6 text-center space-y-3">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">{event.date}</p>
                  <p>{event.time}</p>
                </div>
                <p className="text-white font-medium text-sm bg-gray-800 py-1 px-3 rounded-md inline-block">
                  📍 {event.location}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
