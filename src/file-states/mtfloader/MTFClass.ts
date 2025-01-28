import { InternalsFactory } from "../../common/internals-factory";
import { Mech, IQuadCrits, QuadMech } from "../../common/mech";
import { RetObj, QuadRetObj, BipedRetObj } from "./RetObjInterfaces";

export class MTFClass {
  private internalsFactory = new InternalsFactory();
  private colonRegExp = new RegExp(/:/gi);
  private shallowRegExp = new RegExp(
    /(chassis)|(model)|(mul)|(config)|(techbase)|(era)|(source)|(rules)|(role)|(quirk)|(mass)|^(engine)|(structure)|(myomer)|(heat sinks)|(walk)|(run)|^(jump)?(?!mp)/gi
  );
  private multilineOptions = [
    "Armor",
    "Weapons",
    "Left Arm",
    "Right Arm",
    "Left Torso",
    "Right Torso",
    "Center Torso",
    "Head",
    "Left Leg",
    "Right Leg",
  ];
  private deepRegExp = new RegExp(
    /(armor)|(weapons)|^(left arm)$|^(right arm)$|(left torso)|(right torso)|(center torso)|(head)|^(left leg)$|^(right leg)$/gi
  );
  private critRegExp = new RegExp(
    /^(left arm)$|^(right arm)$|^(left torso)$|^(right torso)$|^(center torso)$|^(head)$|^(left leg)$|^(right leg)$/gi
  );
  private multilineOptionsQuad = [
    "Armor",
    "Weapons",
    "Left Torso",
    "Right Torso",
    "Center Torso",
    "Head",
    "Front Left Leg",
    "Front Right Leg",
    "Rear Left Leg",
    "Rear Right Leg",
  ];
  private deepRegExpQuad = new RegExp(
    /(armor)|(weapons)|(left torso)|(right torso)|(center torso)|(head)|^(front left leg)$|^(front right leg)$|^(rear left leg)$|^(rear right leg)$/gi
  );
  private critRegExpQuad = new RegExp(
    /^(left torso)$|^(right torso)$|^(center torso)$|^(head)$|^(front left leg)$|^(front right leg)$|^(rear left leg)$|^(rear right leg)$/gi
  );

  private determineRun = (walk): number => {
    return Math.round(walk * 1.5);
  };

  private singeLines(line: string): string[] {
    const isColon = String(line.match(this.colonRegExp));
    const keyvalTuple = ["", ""];

    if (isColon) {
      const splitString = line.split(":");
      const first = splitString[0];
      const second = splitString[1];

      keyvalTuple[0] = first ? first.trim() : "";
      keyvalTuple[1] = second ? second.trim() : "";
    }

    return keyvalTuple;
  }

  private multiLines(
    items: string[][],
    isQuad: boolean
  ): (string | string[][])[][] {
    const collectedMultis: (string | string[][])[][] = [];
    let startFrom = 0;
    let isCrit = -2;
    this.multilineOptions.filter((opt, i) => {
      if (isCrit == -2 && !isQuad) {
        isCrit = opt.search(this.critRegExp);
      } else if (isCrit == -2 && isQuad) {
        isCrit = opt.search(this.critRegExpQuad);
      }
      const start = items.findIndex((item) => {
        return item[0] === opt;
      });
      let end: number;

      if (startFrom < start) {
        startFrom = start;
      }

      if (opt === "Weapons") {
        const skipAhead = parseInt(items[start][1]) * 2 + 1;
        end = startFrom + skipAhead;
      } else if (isCrit == 0) {
        end = startFrom + 13;
      } else {
        const multiOptions = isQuad
          ? this.multilineOptionsQuad
          : this.multilineOptions;
        end = items.findIndex((item) => {
          return item[0] === multiOptions[i + 1];
        });
      }

      const collected: string[][] = [];
      let count = startFrom;

      while (count < end) {
        if (opt === "Weapons" && count === start) {
          const weap = items[count][0];
          const loc = items[count][1];
          collected.push([weap, loc]);
          count++;
        } else if (opt === "Weapons" && count > start) {
          const weap = items[count][0];
          const next = count + 1;
          const loc = items[next][0];
          collected.push([weap, loc]);
          count = count + 2;
        } else if (isCrit == 0) {
          collected.push(items[count]);
          count++;
        } else {
          collected.push(items[count]);
          count++;
        }
      }
      startFrom = end;
      isCrit = -2;
      collectedMultis.push([opt, collected]);
    });

    return collectedMultis;
  }

  private unTuple(tupleArray: string[]): string[] {
    const untupled: string[] = [];

    tupleArray.forEach((val: any) => {
      untupled.push(val[0]);
    });

    return untupled;
  }

  private isBipedCrits(crits: any): crits is BipedRetObj["crits"] {
    return "rl" in crits;
  }

  private isQuadCrits(crits: any): crits is QuadRetObj["crits"] {
    return "fll" in crits;
  }

  private deepPop(
    dataArray: (string | string[][])[][],
    isQuad: boolean = false
  ): Partial<BipedRetObj | QuadRetObj> {
    const deepQuad: Partial<QuadRetObj> = {
      armortype: "",
      armor: [],
      arms: [],
      crits: {
        lt: [] as any,
        rt: [] as any,
        ct: [] as any,
        hd: [] as any,
        fll: [] as any,
        frl: [] as any,
        rll: [] as any,
        rrl: [] as any,
      },
    };
    const deepBiped: Partial<BipedRetObj> = {
      armortype: "",
      armor: [],
      arms: [],
      crits: {
        la: [] as any,
        ra: [] as any,
        lt: [] as any,
        rt: [] as any,
        ct: [] as any,
        hd: [] as any,
        ll: [] as any,
        rl: [] as any,
      },
    };
    const deep = isQuad ? deepQuad : deepBiped;
    let armsArray: string[] = [];
    let critsArray: string[] = [];

    dataArray.filter((item) => {
      console.log(item);

      const zerozero = item[0] as string;
      const found = zerozero.match(this.deepRegExp) as string[];
      const foundCrit = found[0].match(this.critRegExp) as string[];
      const foundValues = item[1];
      const foundKey = found[0].toLowerCase() as unknown as keyof RetObj;

      if (found?.includes("Armor")) {
        deep["armortype"] = (foundValues as string[][])[0][1];
        deep[foundKey] = foundValues as any;
      } else if (found?.includes("Weapons")) {
        armsArray = foundValues as any;
      } else if (foundCrit) {
        critsArray = foundValues as any;
      } else {
        deep[foundKey] = foundValues as any;
      }

      if (critsArray.length > 0) {
        critsArray.filter((val) => {
          const loc = val[0];
          if (deep.crits) {
            if (val[0] === "Right Torso") {
              (deep.crits.rt as string[]) = this.unTuple(critsArray);
            }
            if (val[0] === "Left Torso") {
              (deep.crits.lt as string[]) = this.unTuple(critsArray);
            }
            if (val[0] === "Center Torso") {
              (deep.crits.ct as string[]) = this.unTuple(critsArray);
            }
            if (val[0] === "Head") {
              (deep.crits.hd as string[]) = this.unTuple(critsArray);
            }

            if (!isQuad && deep.crits && this.isBipedCrits(deep.crits)) {
              if (loc === "Left Arm") {
                (deep.crits.la as string[]) = this.unTuple(critsArray);
              }
              if (val[0] === "Right Arm") {
                (deep.crits.ra as string[]) = this.unTuple(critsArray);
              }
              if (val[0] === "Right Leg") {
                (deep.crits.rl as string[]) = this.unTuple(critsArray);
              }
              if (val[0] === "Left Leg") {
                (deep.crits.ll as string[]) = this.unTuple(critsArray);
              }
            }

            if (isQuad && deep.crits && this.isQuadCrits(deep.crits)) {
              if (val[0] === "Front Left Leg") {
                (deep.crits.fll as string[]) = this.unTuple(critsArray);
              }
              if (val[0] === "Front Right Leg") {
                (deep.crits.frl as string[]) = this.unTuple(critsArray);
              }
              if (val[0] === "Rear Left Leg") {
                (deep.crits.rll as string[]) = this.unTuple(critsArray);
              }
              if (val[0] === "Rear Right Leg") {
                (deep.crits.rrl as string[]) = this.unTuple(critsArray);
              }
            }
          }
        });
      }
    });

    if (armsArray.length > 0) {
      deep.arms = armsArray;
    }

    if (deep.crits) {
      (deep.crits.lt as string[]).shift();
      (deep.crits.rt as string[]).shift();
      (deep.crits.ct as string[]).shift();
      (deep.crits.hd as string[]).shift();

      if (!isQuad && this.isBipedCrits(deep.crits)) {
        deep.crits.la.shift();
        deep.crits.ra.shift();
        deep.crits.ll.shift();
        deep.crits.rl.shift();
      }
      if (isQuad && this.isQuadCrits(deep.crits)) {
        deep.crits.rll.shift();
        deep.crits.frl.shift();
        deep.crits.fll.shift();
        deep.crits.rrl.shift();
      }
    }

    return deep;
  }

  private shallowPop(dataArray: string[][]): Partial<RetObj> {
    const shallow: Partial<RetObj> = {
      chassis: "",
      model: "",
      mul: 0,
      config: "",
      techbase: "",
      era: "",
      source: "",
      rules: "",
      role: "",
      quirk: [],
      mass: 0,
      engine: "",
      structure: "",
      myomer: "",
      "heat sinks": "",
      walk: 0,
      run: 0,
      jump: 0,
    };
    const draftQuirks: string[] = [];

    dataArray.filter((item) => {
      const found = item[0].match(this.shallowRegExp);
      const foundValue = item[1];
      let foundKey;
      const isActuallyJumpJet = item[0].match(/^(jump jet)/gi);
      if (!isActuallyJumpJet) {
        foundKey = found?.toString().toLowerCase() as unknown as keyof RetObj;
      }

      if (found?.includes("quirk")) {
        draftQuirks.push(foundValue);
      } else {
        shallow[foundKey] = foundValue;
      }
    });

    if (draftQuirks.length > 0) {
      shallow.quirk = draftQuirks;
    }

    shallow.walk = shallow.walk ? shallow.walk : 0;
    shallow.run = this.determineRun(shallow.walk);

    return shallow;
  }

  public reader(contents: string): Mech | QuadMech {
    //const firstPass = contents.split('\n');
    let firstPass = contents.replaceAll("\n", ",").split(",");
    firstPass = firstPass.filter((el) => {
      return el.length > 0;
    });
    const secondPass = firstPass.map((item) => {
      return this.singeLines(item);
    });

    const firstResult = this.shallowPop(secondPass);
    const isQuad = firstResult.config === "Quad" ? true : false;

    const mutliChunks = this.multiLines(secondPass, isQuad);
    //this seems to be where the thing can't read. (ln 57)
    const deepResult = this.deepPop(mutliChunks, isQuad);

    const retObj = { ...deepResult, ...firstResult };
    const currMass = retObj.mass ? retObj.mass : 0;
    retObj.internals = this.internalsFactory.internalsReadFromFile(currMass);

    if (isQuad) {
      return retObj as unknown as QuadMech;
    }

    return retObj as unknown as Mech;
  }

  public writer(path: string, blob: Mech): boolean {
    // not ready for development. still focusing on reading and displaying.
    return true;
  }
}
