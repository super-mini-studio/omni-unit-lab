import React, { useEffect, useState } from "react";
import { Mech } from "../../../common/mech";
import { CritSection } from "./components/crit-section";
import { ArmorSection } from "./components/armor-section";
import { InternalSection } from "./components/internal-section";
import {
  countTuples,
  TupleCount,
  getEquipmentDetails,
  EquipmentDetails,
} from "../equipmentUtils";

type CbtMechSheetProps = {
  details: Mech;
};

export function CbtMechSheet({ details }: CbtMechSheetProps) {
  const hasJump = details.jump ? true : false;
  const [armsDetails, setArmsDetails] = useState<TupleCount[]>([]);

  let parsedArms: TupleCount[];

  const getRanges = (name: string): EquipmentDetails => {
    const equipment = name;
    return getEquipmentDetails(equipment);
  };

  if (armsDetails.length === 0 && details.arms) {
    if (details.arms[0][0] === "Weapons") {
      details.arms.shift();
    }
    parsedArms = countTuples(details.arms);
  }

  const weaponsAndEquipment = (armsTuple: TupleCount) => {
    const found = getRanges(armsTuple.values[0]);
    return (
      <>
        <td>{armsTuple.count}</td>
        <td>{armsTuple.values[0]}</td>
        <td>{armsTuple.values[1]}</td>
        <td>{found.heat}</td>
        <td>{found.damage}</td>
        <td>{found.ranges[0]}</td>
        <td>{found.ranges[1]}</td>
        <td>{found.ranges[2]}</td>
        <td>{found.ranges[3]}</td>
      </>
    );
  };

  useEffect(() => {
    setArmsDetails(parsedArms);
  }, [details.arms]);

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
              {hasJump && <dt>Jumping:</dt>}
              {hasJump && <dd>{details.jump}</dd>}
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
          <h2>Weapons & Equipment</h2>
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
            {armsDetails.map((r, i) => (
              <tr key={i}>{weaponsAndEquipment(r)}</tr>
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
            <td></td>
          </tr>
        </table>
      </div>
      <div className="armor-diagram">
        <div className="armor-front">
          <ArmorSection
            className="armor-hd"
            location="HD"
            dots={details.armor[6][1]}
          />
          <ArmorSection
            className="armor-ra"
            location="RA"
            dots={details.armor[2][1]}
          />
          <ArmorSection
            className="armor-rt"
            location="RT"
            dots={details.armor[4][1]}
          />
          <ArmorSection
            className="armor-ct"
            location="CT"
            dots={details.armor[5][1]}
          />
          <ArmorSection
            className="armor-lt"
            location="LT"
            dots={details.armor[3][1]}
          />
          <ArmorSection
            className="armor-la"
            location="LA"
            dots={details.armor[1][1]}
          />
          <ArmorSection
            className="armor-rl"
            location="RL"
            dots={details.armor[8][1]}
          />
          <ArmorSection
            className="armor-ll"
            location="LL"
            dots={details.armor[7][1]}
          />
        </div>
        <div className="armor-back">
          <ArmorSection
            className="armor-rlt"
            location="RTL"
            dots={details.armor[9][1]}
          />
          <ArmorSection
            className="armor-rct"
            location="RTC"
            dots={details.armor[11][1]}
          />
          <ArmorSection
            className="armor-rrt"
            location="RTR"
            dots={details.armor[10][1]}
          />
        </div>
      </div>
      <div className="crits-table">
        <CritSection title="Left Arm" crits={details.crits.la} />
        <CritSection title="Head" crits={details.crits.hd} />
        <CritSection title="Right Arm" crits={details.crits.ra} />
        <CritSection title="Left Torso" crits={details.crits.lt} />
        <CritSection title="Center Torso" crits={details.crits.ct} />
        <CritSection title="Right Torso" crits={details.crits.rt} />
        <CritSection title="Left Leg" crits={details.crits.ll} />
        <table className="critical-systems">
          <tr>
            <td>Engine Hits</td>
            <td>
              <svg
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
              <svg
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
              <svg
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
            </td>
          </tr>
          <tr>
            <td>Gyro Hits</td>
            <td>
              <svg
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
              <svg
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
            </td>
          </tr>
          <tr>
            <td>Sensor Hits</td>
            <td>
              <svg
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
              <svg
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
            </td>
          </tr>
          <tr>
            <td>Life Support</td>
            <td>
              <svg
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
            </td>
          </tr>
        </table>
        <CritSection title="Right Leg" crits={details.crits.rl} />
      </div>
      <div className="structure-heat-container">
        <div className="internal-structure-diagram">
          <div className="internal-row">
            <InternalSection
              className="internal-hd"
              location="HD"
              dots={details.internals.h.toString()}
            />
          </div>
          <div className="internal-row">
            <InternalSection
              className="internal-ra"
              location="RA"
              dots={details.internals.a.toString()}
            />
            <InternalSection
              className="internal-rt"
              location="RT"
              dots={details.internals.t.toString()}
            />
            <InternalSection
              className="internal-ct"
              location="CT"
              dots={details.internals.ct.toString()}
            />
            <InternalSection
              className="internal-lt"
              location="LT"
              dots={details.internals.t.toString()}
            />
            <InternalSection
              className="internal-la"
              location="LA"
              dots={details.internals.a.toString()}
            />
          </div>
          <div className="internal-row">
            <InternalSection
              className="internal-rl"
              location="RL"
              dots={details.internals.l.toString()}
            />
            <InternalSection
              className="internal-ll"
              location="LL"
              dots={details.internals.l.toString()}
            />
          </div>
        </div>
        <div className="heat-effects">
          <h4>Heat Data</h4>
          <table>
            <tr>
              <th>Heat Level</th>
              <th>Effects</th>
              <th>{details["heat sinks"]}</th>
            </tr>
            <tr>
              <td>30</td>
              <td>Shutdown</td>
              <td></td>
            </tr>
            <tr>
              <td>28</td>
              <td>Ammo Exp, avoid on 8+</td>
              <td></td>
            </tr>
            <tr>
              <td>26</td>
              <td>Shutdown, avoid on 10+</td>
              <td>
                <svg
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
                <svg
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
                <svg
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
              </td>
            </tr>
            <tr>
              <td>25</td>
              <td>-5 Movement Points</td>
              <td>
                <svg
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
                <svg
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
                <svg
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
              </td>
            </tr>
            <tr>
              <td>24</td>
              <td>+4 Modifier to fire</td>
              <td>
                <svg
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
                <svg
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
                <svg
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
              </td>
            </tr>
            <tr>
              <td>23</td>
              <td>Ammo Exp, avoid on 6+</td>
              <td>
                <svg
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
                <svg
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
                <svg
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
              </td>
            </tr>
            <tr>
              <td>22</td>
              <td>Shutdown, avoid on 8+</td>
              <td>
                <svg
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
                <svg
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
                <svg
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
              </td>
            </tr>
            <tr>
              <td>20</td>
              <td>-4 Movement Points</td>
              <td>
                <svg
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
                <svg
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
                <svg
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
              </td>
            </tr>
            <tr>
              <td>19</td>
              <td>Ammo Exp, avoid on 4+</td>
              <td>
                <svg
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
                <svg
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
                <svg
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
              </td>
            </tr>
            <tr>
              <td>18</td>
              <td>Shutdown, avoid on 6+</td>
              <td>
                <svg
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
                <svg
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
                <svg
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
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td>+3 Modifier to Fire</td>
              <td>
                <svg
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
                <svg
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
                <svg
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
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>-3 Movement Points</td>
              <td>
                <svg
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
                <svg
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
                <svg
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
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>Shutdown, avoid on 4+</td>
              <td>
                <svg
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
                <svg
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
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>+2 Modifier to Fire</td>
              <td>
                <svg
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
                <svg
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
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>-2 Movement Points</td>
              <td></td>
            </tr>
            <tr>
              <td>8</td>
              <td>+1 Modifier to Fire</td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td>-1 Movement Points</td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
      <div className="heat-chart">
        <h5>Heat Scale</h5>
        <table>
          <tr>
            <td>30</td>
          </tr>
          <tr>
            <td>29</td>
          </tr>
          <tr>
            <td>28</td>
          </tr>
          <tr>
            <td>27</td>
          </tr>
          <tr>
            <td>26</td>
          </tr>
          <tr>
            <td>25</td>
          </tr>
          <tr>
            <td>24</td>
          </tr>
          <tr>
            <td>23</td>
          </tr>
          <tr>
            <td>22</td>
          </tr>
          <tr>
            <td>21</td>
          </tr>
          <tr>
            <td>20</td>
          </tr>
          <tr>
            <td>19</td>
          </tr>
          <tr>
            <td>18</td>
          </tr>
          <tr>
            <td>17</td>
          </tr>
          <tr>
            <td>16</td>
          </tr>
          <tr>
            <td>15</td>
          </tr>
          <tr>
            <td>14</td>
          </tr>
          <tr>
            <td>13</td>
          </tr>
          <tr>
            <td>12</td>
          </tr>
          <tr>
            <td>11</td>
          </tr>
          <tr>
            <td>10</td>
          </tr>
          <tr>
            <td>9</td>
          </tr>
          <tr>
            <td>8</td>
          </tr>
          <tr>
            <td>7</td>
          </tr>
          <tr>
            <td>6</td>
          </tr>
          <tr>
            <td>5</td>
          </tr>
          <tr>
            <td>4</td>
          </tr>
          <tr>
            <td>3</td>
          </tr>
          <tr>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
          </tr>
          <tr>
            <td>0</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
