import React from "react";
import { Mech } from "../../../common/mech";
import { CritSection } from "./components/crit-section";
import { ArmorSection } from "./components/armor-section";

type CbtMechSheetProps = {
  details: Mech;
};

export function CbtMechSheet({ details }: CbtMechSheetProps) {
  const determineRun = (walk): number => {
    return Math.round(walk * 1.5);
  };

  const hasJump = details.jump ? true : false;

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
              <dd>{determineRun(details.walk)}</dd>
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
            <td></td>
          </tr>
        </table>
      </div>
      <div className="armor-diagram">
        <div className="armor-front">
          <div className="armor-row">
            <div className="armor-hd">
              <ArmorSection location="HD" dots={details.armor[6][1]} />
            </div>
          </div>
          <div className="armor-row">
            <div className="armor-ra">
              <ArmorSection location="RA" dots={details.armor[2][1]} />
            </div>
            <div className="armor-rt">
              <ArmorSection location="RT" dots={details.armor[4][1]} />
            </div>
            <div className="armor-ct">
              <ArmorSection location="CT" dots={details.armor[5][1]} />
            </div>
            <div className="armor-lt">
              <ArmorSection location="LT" dots={details.armor[3][1]} />
            </div>
            <div className="armor-la">
              <ArmorSection location="LA" dots={details.armor[1][1]} />
            </div>
          </div>
          <div className="armor-row">
            <div className="armor-rl">
              <ArmorSection location="RL" dots={details.armor[8][1]} />
            </div>
            <div className="armor-ll">
              <ArmorSection location="LL" dots={details.armor[7][1]} />
            </div>
          </div>
        </div>
        <div className="armor-back">
          <div className="armor-row">
            <div className="armor-rlt">
              <ArmorSection location="RTL" dots={details.armor[9][1]} />
            </div>
            <div className="armor-rct">
              <ArmorSection location="RTC" dots={details.armor[11][1]} />
            </div>
            <div className="armor-rrt">
              <ArmorSection location="RTR" dots={details.armor[10][1]} />
            </div>
          </div>
        </div>
      </div>
      <div className="crits-table">
        <CritSection title="Head" crits={details.crits.hd} />
        <CritSection title="Left Arm" crits={details.crits.la} />
        <CritSection title="Left Torso" crits={details.crits.lt} />
        <CritSection title="Center Torso" crits={details.crits.ct} />
        <CritSection title="Right Torso" crits={details.crits.rt} />
        <CritSection title="Right Arm" crits={details.crits.ra} />
        <CritSection title="Left Leg" crits={details.crits.ll} />
        <CritSection title="Right Leg" crits={details.crits.rl} />
      </div>
      <div className="internal-structure-diagram"></div>
      <div className="heat-chart">
        <h5>Heat Scale</h5>
        <table>
          <tr>
            <td>30</td>
            <td>29</td>
            <td>28</td>
            <td>27</td>
            <td>26</td>
            <td>25</td>
            <td>24</td>
            <td>23</td>
            <td>21</td>
            <td>20</td>
            <td>19</td>
            <td>18</td>
            <td>17</td>
            <td>16</td>
            <td>15</td>
            <td>14</td>
            <td>13</td>
            <td>12</td>
            <td>11</td>
            <td>10</td>
            <td>9</td>
            <td>8</td>
            <td>7</td>
            <td>6</td>
            <td>5</td>
            <td>4</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>0</td>
          </tr>
        </table>
      </div>
      <div className="heat-effects"></div>
    </div>
  );
}
