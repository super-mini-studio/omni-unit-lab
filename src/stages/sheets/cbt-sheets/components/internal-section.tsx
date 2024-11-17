import React from "react";

type InternalSectionProps = {
  className: string;
  location: string;
  dots: string;
};

export function InternalSection({
  className,
  location,
  dots,
}: InternalSectionProps) {
  const dotArray = new Array(parseInt(dots)).fill("");

  return (
    <section className={`internal-section-circles ${className}`}>
      <h5>
        {location} - {dots}
      </h5>
      {dotArray.map((it, i) => {
        return (
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
                stroke="#a1a1a1"
              />
            </g>
          </svg>
        );
      })}
    </section>
  );
}
