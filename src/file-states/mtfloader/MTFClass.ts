        import { Mech } from "../../common/mech";

interface RetObj {
    chassis: string,
    model: string,
    mul: number,
    config: string,
    techbase: string,
    era: string,
    source: string,
    rules: string,
    role: string
    quirk: string[],
    mass: number,
    engine: string,
    structure: string,
    myomer: string,
    'heat sinks': string,
    walk: number,
    run: number | undefined,
    jump: number | undefined,
    armortype: string,
    armor: [],
    arms: string[],
    crits: {
        la: [],
        ra: [],
        lt: [],
        rt: [],
        ct: [],
        hd: [],
        ll: [],
        rl: [],
    }
}
export class MTFClass {
    private colonRegExp = new RegExp(/:/gi);
    private shallowRegExp = new RegExp(/(chassis)|(model)|(mul)|(config)|(techbase)|(era)|(source)|(rules)|(role)|(quirk)|(mass)|^(engine)|(structure)|(myomer)|(heat sinks)|(walk)|(run)|(jump)$/gi);
    private multilineOptions = ['Armor', 'Weapons', 'Left Arm', 'Right Arm', 'Left Torso', 'Right Torso', 'Center Torso', 'Head', 'Left Leg', 'Right Leg'];
    private deepRegExp = new RegExp(/(armor)|(weapons)|(left arm)|(right arm)|(left torso)|(right torso)|(center torso)|(head)|(left leg)|(right leg)/gi);
    private critRegExp = new RegExp(/^(left arm)$|^(right arm)$|^(left torso)$|^(right torso)$|^(center torso)$|^(head)$|^(left leg)$|^(right leg)$/gi);


    private singeLines(line: string): string[] {
        const isColon = String(line.match(this.colonRegExp));
        const keyvalTuple = ['', ''];

        if(isColon) {
            const splitString = line.split(':');
            const first = splitString[0];
            const second = splitString[1];
            
            keyvalTuple[0] = first ? first.trim() : '';
            keyvalTuple[1] = second ? second.trim() : '';
        }

        return keyvalTuple;
    }

    private multiLines(items: string[][]): (string | string[][])[][] {
        const collectedMultis: (string | string[][])[][] = [];
        let startFrom = 0;
        let isCrit = -2;
        this.multilineOptions.filter((opt, i) => {
            if (isCrit == -2) {
                isCrit = opt.search(this.critRegExp);
            }
            const start = items.findIndex((item) => {
                return item[0] === opt;
            });
            let end: number;
            
            if(startFrom < start) {
                startFrom = start;
            }

            if(opt === 'Weapons'){
                const skipAhead = parseInt(items[start][1]) * 2 + 1;
                end = startFrom + skipAhead;
            } else if(isCrit == 0) {
                end = startFrom + 13;
            } else {
                end = items.findIndex((item) => {
                    return item[0] === this.multilineOptions[i+1];
                });
            }
            
            const collected = [];
            let count = startFrom;

            while(count < end) {
                if(opt === 'Weapons' && count === start) {
                    const weap = items[count][0];
                    const loc = items[count][1]
                    collected.push([weap, loc]);
                    count++;
                } else if(opt === 'Weapons' && count > start) {
                    const weap = items[count][0];
                    const next = count + 1;
                    const loc = items[next][0]
                    collected.push([weap, loc]);
                    count = count + 2;  
                } else if(isCrit == 0) {
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
        
        tupleArray.filter((val) => {
            untupled.push(val[0]);
        })

        return untupled;
    }

    private deepPop(dataArray: (string | string[][])[][]): Partial<RetObj> {
        const deep: Partial<RetObj> = {
            armortype: "",
            armor: [],
            arms: [],
            crits: {
                la: [],
                ra: [],
                lt: [],
                rt: [],
                ct: [],
                hd: [],
                ll: [],
                rl: []
            }
        };
        let armsArray: string[] = [];
        let critsArray: string[] = []
        
        dataArray.filter((item) => {
            console.log(item)
            
            const zerozero = item[0] as string;
            const found = zerozero.match(this.deepRegExp) as string[];
            const foundCrit = found[0].match(this.critRegExp) as string[];
            const foundValues = item[1];
            const foundKey = found[0].toLowerCase() as unknown as keyof RetObj;

            if(found?.includes('Armor')) {
                deep['armortype'] = foundValues[0][1];
                deep[foundKey] = foundValues as never;
            } else if(found?.includes('Weapons')) {
                armsArray = foundValues as never;
            } else if(foundCrit) {
                critsArray = foundValues as never;
            } else {
                deep[foundKey] = foundValues as never;
            }

            if(critsArray.length > 0) {
                critsArray.filter((val) => {
                    const loc = val[0];
                    if(loc === 'Left Arm'){
                        deep.crits.la = this.unTuple(critsArray) as never;
                    }
                    if(val[0] === 'Right Arm'){
                        deep.crits.ra = this.unTuple(critsArray) as never;
                    }
                    if(val[0] === 'Right Torso'){
                        deep.crits.rt = this.unTuple(critsArray) as never;
                    }
                    if(val[0] === 'Left Torso'){
                        deep.crits.lt = this.unTuple(critsArray) as never;
                    }
                    if(val[0] === 'Center Torso'){
                        deep.crits.ct = this.unTuple(critsArray) as never;
                    }
                    if(val[0] === 'Head'){
                        deep.crits.hd = this.unTuple(critsArray) as never;
                    }
                    if(val[0] === 'Right Leg'){
                        deep.crits.rl = this.unTuple(critsArray) as never;
                    }
                    if(val[0] === 'Left Leg'){
                        deep.crits.ll = this.unTuple(critsArray) as never;
                    }
                });
            }
        });

        if(armsArray.length > 0) {
            deep.arms = armsArray;
        }

        deep.crits?.la.shift();
        deep.crits?.ra.shift();
        deep.crits?.lt.shift();
        deep.crits?.rt.shift();
        deep.crits?.ct.shift();
        deep.crits?.ll.shift();
        deep.crits?.rl.shift();

        return deep
    }

    private shallowPop(dataArray: string[][]): Partial<RetObj> {
        const shallow: Partial<RetObj> = {
            chassis: '',
            model: '',
            mul: 0,
            config: '',
            techbase: '',
            era: '',
            source: '',
            rules: '',
            role: '',
            quirk: [],
            mass: 0,
            engine: '',
            structure: '',
            myomer: '',
            'heat sinks': '',
            walk: 0,
            run: 0,
            jump: 0,
        };
        const draftQuirks: string[] = [];

        dataArray.filter((item) => {
            const found = item[0].match(this.shallowRegExp);
            const foundValue = item[1];
            const foundKey = found?.toString().toLowerCase() as unknown as keyof RetObj;
            
            if(found?.includes('quirk')) {
                draftQuirks.push(foundValue)
            } else {
                shallow[foundKey] = foundValue as never;
            }
        });

        if(draftQuirks.length > 0) {
            shallow.quirk = draftQuirks;
        }

        return shallow;
    }

    public reader(contents: string): Partial<RetObj> {
        //const firstPass = contents.split('\n');
        let firstPass = contents.replaceAll('\n', ',').split(',');
        firstPass = firstPass.filter((el) => {
            return el.length > 0;
        });
        const secondPass = firstPass.map((item) => {
            return this.singeLines(item);
        });

        const firstResult = this.shallowPop(secondPass);
        const mutliChunks = this.multiLines(secondPass);
        const deepResult = this.deepPop(mutliChunks);

        const retObj = {...deepResult, ...firstResult};

        return retObj;
    }

    public writer(path: string, blob: Mech): boolean {
        // not ready for development. still focusing on reading and displaying.
        return true;
    }
}