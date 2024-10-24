'use client'
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Eleanor Pena 1',
    role: 'Business Owner',
    avatar: 'https://img.freepik.com/premium-photo/elevate-your-brand-with-friendly-avatar-that-reflects-professionalism-ideal-sales-managers_1283595-18531.jpg',
    content: 'Some customers prefer to sit down and enjoy their purchase, while others may grab-and-go.The layout, ambiance, and cleanliness of the bakery can influence customer satisfaction and their likelihood of returning.People may be drawn to seasonal items (e.g., pumpkin spice in fall, or chocolate treats near Valentines Day).The layout, ambiance, and cleanliness of the bakery can influence customer satisfaction and their likelihood of returning.',
    rating: 5
  },
  {
    id: 2,
    name: 'Eleanor Pena 2',
    role: 'Business Owner',
    avatar: 'https://img.freepik.com/premium-photo/elevate-your-brand-with-friendly-avatar-that-reflects-professionalism-ideal-sales-managers_1283595-18531.jpg',
    content: 'Some customers prefer to sit down and enjoy their purchase, while others may grab-and-go.The layout, ambiance, and cleanliness of the bakery can influence customer satisfaction and their likelihood of returning.People may be drawn to seasonal items (e.g., pumpkin spice in fall, or chocolate treats near Valentines Day).The layout, ambiance, and cleanliness of the bakery can influence customer satisfaction and their likelihood of returning.',
    rating: 5
  },
  {
    id: 3,
    name: 'Eleanor Pena 3',
    role: 'Business Owner',
    avatar: 'https://img.freepik.com/premium-photo/elevate-your-brand-with-friendly-avatar-that-reflects-professionalism-ideal-sales-managers_1283595-18531.jpg',
    content: 'Some customers prefer to sit down and enjoy their purchase, while others may grab-and-go.The layout, ambiance, and cleanliness of the bakery can influence customer satisfaction and their likelihood of returning.People may be drawn to seasonal items (e.g., pumpkin spice in fall, or chocolate treats near Valentines Day).The layout, ambiance, and cleanliness of the bakery can influence customer satisfaction and their likelihood of returning.',
    rating: 5
  },
  {
    id: 4,
    name: 'Eleanor Pena 4',
    role: 'Business Owner',
    avatar: 'https://img.freepik.com/premium-photo/elevate-your-brand-with-friendly-avatar-that-reflects-professionalism-ideal-sales-managers_1283595-18531.jpg',
    content: 'Some customers prefer to sit down and enjoy their purchase, while others may grab-and-go.The layout, ambiance, and cleanliness of the bakery can influence customer satisfaction and their likelihood of returning.People may be drawn to seasonal items (e.g., pumpkin spice in fall, or chocolate treats near Valentines Day).The layout, ambiance, and cleanliness of the bakery can influence customer satisfaction and their likelihood of returning.',
    rating: 5
  },
  {
    id: 5,
    name: 'Eleanor Pena 5',
    role: 'Business Owner',
    avatar: 'https://img.freepik.com/premium-photo/elevate-your-brand-with-friendly-avatar-that-reflects-professionalism-ideal-sales-managers_1283595-18531.jpg',
    content: 'Some customers prefer to sit down and enjoy their purchase, while others may grab-and-go.The layout, ambiance, and cleanliness of the bakery can influence customer satisfaction and their likelihood of returning.People may be drawn to seasonal items (e.g., pumpkin spice in fall, or chocolate treats near Valentines Day).The layout, ambiance, and cleanliness of the bakery can influence customer satisfaction and their likelihood of returning.',
    rating: 5
  },
  {
    id: 6,
    name: 'Eleanor Pena 6',
    role: 'Business Owner',
    avatar: 'https://img.freepik.com/premium-photo/elevate-your-brand-with-friendly-avatar-that-reflects-professionalism-ideal-sales-managers_1283595-18531.jpg',
    content: 'Some customers prefer to sit down and enjoy their purchase, while others may grab-and-go.The layout, ambiance, and cleanliness of the bakery can influence customer satisfaction and their likelihood of returning.People may be drawn to seasonal items (e.g., pumpkin spice in fall, or chocolate treats near Valentines Day).The layout, ambiance, and cleanliness of the bakery can influence customer satisfaction and their likelihood of returning.',
    rating: 5
  },
  {
    id: 7,
    name: 'Eleanor Pena 7',
    role: 'Business Owner',
    avatar: 'https://img.freepik.com/premium-photo/elevate-your-brand-with-friendly-avatar-that-reflects-professionalism-ideal-sales-managers_1283595-18531.jpg',
    content: 'Some customers prefer to sit down and enjoy their purchase, while others may grab-and-go.The layout, ambiance, and cleanliness of the bakery can influence customer satisfaction and their likelihood of returning.People may be drawn to seasonal items (e.g., pumpkin spice in fall, or chocolate treats near Valentines Day).The layout, ambiance, and cleanliness of the bakery can influence customer satisfaction and their likelihood of returning.',
    rating: 5
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((current) => 
      current + 1 === testimonials.length ? 0 : current + 1
    );
  };

  const prev = () => {
    setActiveIndex((current) => 
      current - 1 < 0 ? testimonials.length - 1 : current - 1
    );
  };

  const getCardStyle = (index:number) => {
    const diff = (index - activeIndex + testimonials.length) % testimonials.length;
    let transform = '';
    let zIndex = 0;
    let opacity = 1;

    if (diff === 0) { // Active card
      transform = 'translateX(0) scale(1)';
      zIndex = 4;
    } else if (diff === 1) { // Next card
      transform = 'translateX(90%) scale(0.95)';
      zIndex = 3;
    } else if (diff === testimonials.length - 1) { // Previous card
      transform = 'translateX(-90%) scale(0.95)';
      zIndex = 3;
    } else {
      opacity = 0;
      transform = 'translateX(0) scale(0.9)';
      zIndex = 1;
    }

    return {
      transform,
      zIndex,
      opacity,
      transition: 'all 0.5s ease-in-out',
    };
  };

  return (
    <div className="relative flex justify-center items-center w-full max-w-6xl mx-auto px-4 py-12 overflow-hidden">
      <div className="relative flex justify-center items-center h-[400px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="absolute top-0 w-[490px]"
            style={getCardStyle(index)}
          >
            <div className="bg-white rounded-[50px] p-8 shadow-lg border border-[#753F21]">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-[#8B4513] font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 line-clamp-6">{testimonial.content}</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none flex items-center justify-between z-10">
        <button
          onClick={prev}
          className="pointer-events-auto p-2 rounded-full bg-[#753F21] text-white hover:bg-brown-700 transition-colors ml-2"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="pointer-events-auto p-2 rounded-full bg-[#753F21] text-white hover:bg-brown-700 transition-colors mr-2"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}