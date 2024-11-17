import React from "react";

type InternalSectionProps = {
  location: string;
  dots: string;
};

export function InternalSection({ location, dots }: InternalSectionProps) {
  const dotArray = new Array(parseInt(dots)).fill("");

  return (
    <section className="internal-section-circles">
      <h5>
        {location} - {dots}
      </h5>
      {dotArray.map((it, i) => {
        return (
          <svg key={i} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <g>
              <circle
                cx="5"
                cy="5"
                r="4"
                fill="none"
                stroke-width="1"
                stroke="#616161"
              />
            </g>
          </svg>
        );
      })}
    </section>
  );
}
