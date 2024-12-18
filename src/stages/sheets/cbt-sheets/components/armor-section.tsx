import React from "react";

type ArmorSectionProps = {
  className: string;
  location: string;
  dots: string;
};

export function ArmorSection({ className, location, dots }: ArmorSectionProps) {
  return (
    <section className={`armor-section-circles ${className}`}>
      <h5>
        {location} - {dots}
      </h5>
      {new Array(parseInt(dots)).fill("").map((_, i) => (
        <svg
          key={i}
          width="10"
          height="10"
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <circle
              cx="5"
              cy="5"
              r="4"
              fill="none"
              stroke-width="1.5"
              stroke="black"
            />
          </g>
        </svg>
      ))}
    </section>
  );
}
