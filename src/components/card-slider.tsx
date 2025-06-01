"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/button";


import {CardClients} from "../components/cardClientes"; // si lo exportás por default



// Sample data for cards
const cardData = [
  {
    id: 1,
    title: "Card One",
    image: "/betterez.png",
    description: "This is the first card in our slider",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Card Two",
    description: "This is the second card in our slider",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "Card Three",
    description: "This is the third card in our slider",

    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    title: "Card Four",
    description: "This is the fourth card in our slider",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    title: "Card Five",
    description: "This is the fifth card in our slider",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
];

export default function CardSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const totalCards = cardData.length;

  // Handle hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalCards - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < totalCards - 1 ? prevIndex + 1 : 0
    );
  };

  if (!isClient) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className="relative py-10" style={{ width: "80vw" }}>
      <div
        className="relative h-[400px] overflow-visible mx-auto"
        style={{ perspective: "1000px" }}
      >
        {/* Left navigation arrow */}
        <Button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 border-none rounded-full bg-transparent "
          size="sm"
          onClick={handlePrevious}
        >
          {
            <img
              alt="Flecha anterior cliente"
              height={51.99999618530278}
              src={"/flecha.png"}
              width={51.99999618530278}
            />
          }
          {/* <ChevronLeft className="h-5 w-5" /> */}
        </Button>

        {/* Right navigation arrow */}
        <Button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-transparent"
          size="sm"
          style={{ right: "-20px" }}
          onClick={handleNext}
        >
          {
            <img
              alt="Flecha siguiente cliente"
              height={51.99999618530278}
              src={"/flecha2.png"}
              width={51.99999618530278}
            />
          }
        </Button>

        <div
          className=" h-full relative"
          style={{
            transformStyle: "preserve-3d",
            width: "100%",
          }}
        >
          {cardData.map((card, index) => {
            // Calculate the position relative to the active card
            // For infinite effect, we need to handle wrapping
            let position = index - activeIndex;

            // Handle wrapping for infinite effect
            if (position < -Math.floor(totalCards / 2)) {
              position += totalCards;
            } else if (position > Math.floor(totalCards / 2)) {
              position -= totalCards;
            }

            // Calculate the visual properties based on position
            const zIndex =
              position === 0 ? 10 : 5 - Math.min(Math.abs(position), 4);
            const scale =
              position === 0
                ? 1
                : 0.85 - Math.min(Math.abs(position) * 0.05, 0.2);
            const opacity =
              position === 0
                ? 1
                : 0.7 - Math.min(Math.abs(position) * 0.1, 0.5);
            let translateX = 0;

            if (position === 0) {
              translateX = 0;
            } else if (position > 0) {
              translateX = 50 + (position - 1) * 10;
            } else {
              translateX = -50 + (position + 1) * 10;
            }

            return (
              <div
                key={card.id}
                className={`absolute top-0 left-0 right-0 transition-all duration-500 ease-in-out `}
                style={{
                  transform: `translateX(${translateX}%) scale(${scale})`,
                  zIndex,
                  opacity,
                  transformOrigin: "center center",
                  width: "639px",
                  marginLeft: "23vw",
                }}
              >
                <CardClients titleImageSrc={card.image} titleText={card.title}>
                  {card.content}
                </CardClients>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {cardData.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? "bg-primary" : "bg-gray-300"}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}