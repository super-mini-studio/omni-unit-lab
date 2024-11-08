import React from "react";
import { Mech } from "../../../common/mech";

type CbtMechSheetProps = {
  details: Mech;
};

export function CbtMechSheet({ details }: CbtMechSheetProps) {
  return (
    <div className="cbt-sheet">
      <div className="static-title">
        <h1>Mech Record Sheet</h1>
      </div>
      <div className="unit-details">
        <div className="general-details">
          <h2>Mech Data</h2>
          <h3>
            Type: {details.chassis} {details.model}
          </h3>
          <div className="movement">
            <p className="movement-list-title">Movement:</p>
            <dl>
              <dt>Walking:</dt>
              <dd>{details.walk}</dd>
              <dt>Running:</dt>
              <dd>{details.run}</dd>
              {details.jump && <dt>Jumping:</dt>}
              {details.jump && <dd>{details.jump}</dd>}
            </dl>
          </div>
          <div className="tonnage-tech">
            <dl>
              <dt>Tonnage:</dt>
              <dd>{details.mass}</dd>
              <dt>Tech Base:</dt>
              <dd>{details.techbase}</dd>
            </dl>
          </div>
        </div>
        <div className="loadout-details">
          <h2>Weapons & Equipement</h2>
          <table>
            <tr>
              <th>Qty</th>
              <th>Type</th>
              <th>Loc</th>
              <th>Ht</th>
              <th>Dmg</th>
              <th>Min</th>
              <th>Sht</th>
              <th>Med</th>
              <th>Lng</th>
            </tr>
            {details.arms &&
              details.arms.map((r, i) => (
                <tr key={i}>
                  <td>1</td>
                  <td>{r[0]}</td>
                  <td>{r[1]}</td>
                </tr>
              ))}
          </table>
        </div>
        <div className="bv">
          <dl>
            <dt>BV:</dt>
            <dd>???</dd>
          </dl>
        </div>
      </div>
      <div className="mechwarrior-details">
        <p>Name:</p>
        <span>Gunnery:</span>
        <span>Piloting:</span>
        <table className="hits-consciousness">
          <tr>
            <td>Hits Taken</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Conciousness</td>
            <td>3</td>
            <td>5</td>
            <td>7</td>
            <td>10</td>
            <td>11</td>
          </tr>
        </table>
      </div>
      <div className="armor-diagram">
        <div className="armor-front">
          <div className="armor-row">
            <div className="armor-hd"></div>
          </div>
          <div className="armor-row">
            <div className="armor-ra"></div>
            <div className="armor-rt"></div>
            <div className="armor-ct"></div>
            <div className="armor-lt"></div>
            <div className="armor-la"></div>
          </div>
          <div className="armor-row">
            <div className="armor-rl"></div>
            <div className="armor-ll"></div>
          </div>
        </div>
        <div className="armor-back">
          <div className="armor-row">
            <div className="armor-rlt"></div>
            <div className="armor-rct"></div>
            <div className="armor-rrt"></div>
          </div>
        </div>
      </div>
      <div className="crits-table"></div>
      <div className="internal-structure-diagram"></div>
      <div className="heat-chart"></div>
      <div className="heat-effects"></div>
    </div>
  );
}
