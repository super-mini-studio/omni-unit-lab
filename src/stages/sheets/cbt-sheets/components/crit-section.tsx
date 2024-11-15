import React from "react";

type CritSectionProps = {
  title: string;
  crits: string[];
};

export function CritSection({ title, crits }: CritSectionProps) {
  const grouping = (n: number): number => {
    if (n <= 6) {
      return n;
    }
    switch (n) {
      case 7:
        return 1;
      case 8:
        return 2;
      case 9:
        return 3;
      case 10:
        return 4;
      case 11:
        return 5;
      case 12:
        return 6;
      default:
        return n;
    }
  };

  return (
    <div className="crits-section">
      <h3>{title}</h3>
      <table>
        {crits.map((item, i) => {
          return (
            <tr key={i}>
              <td>{grouping(i + 1)}</td>
              <td>{item}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
