import { TechLvl } from "../units/types/MiscRecordTypes";
import {engineWeightMap, engineTypes} from "./types/EngineConstants";
import {locInternalTuple, LocationsEnum} from "./types/InternalType";

type engineDetails = {
    walking: number;
    running: number;
    rating: number;
    type: engineTypes;
    engineWeight: number;
    engineHeatSinks: number[];
    engineInternals: locInternalTuple[];
}

export class EngineFactory {
    walking = 0;
    running = 0;
    rating = 0;
    type: engineTypes = engineTypes.NORMAL;
    engineWeight = 0;
    engineHS = [0, 0];
    engineInternals: locInternalTuple[] = [[LocationsEnum['CT'], 6]]

    private checkEngineWeight(rating: number): number {
        const weightmap = engineWeightMap();

        let engineTonnage = 0;
        weightmap.forEach((rArray, key) => {
            const found = rArray.includes(rating);
            if (found) {
                engineTonnage = parseInt(key);
            }

        })

        return engineTonnage;
    }

    private ratingMath(walking: number, tonnage: number): void {
        this.rating = Math.round(tonnage * walking);
        if(this.rating > 400 || this.rating < 10) {
            //need builder error handler...
            console.log('engine rating cannot below 10 or above 400');
        }
        this.engineWeight = this.checkEngineWeight(this.rating);
    }

    private runningMath(walking: number): void {
        this.running = Math.round(walking * 1.5);
    }

    private engineHeatSinkMath(rating: number): void {
        const min = 10;
        const internal = Math.round(rating / 25);
        if (internal < min) {
            this.engineHS[0] = internal;
            this.engineHS[1] = min - internal;
        }
    }

    private engineInteralsGenerator(type: engineTypes, tech: string): void {
        switch (type) {
            case 'Normal':
                break;
            case 'Extralight':
                if(tech === TechLvl.CLANTWO) {
                    this.engineInternals.push([LocationsEnum['RT'], 2]);
                    this.engineInternals.push([LocationsEnum['LT'], 2]);
                }
                if(tech === TechLvl.ISTWO) {
                    this.engineInternals.push([LocationsEnum['RT'], 3]);
                    this.engineInternals.push([LocationsEnum['LT'], 3]);
                }
                break;
            default:
                break;
        }
    }

    public get getWalking() {
        return this.walking;
    }

    public get getRunning() {
        return this.running;
    }

    public get getRating() {
        return this.type;
    }

    public get getType() {
        return this.type;
    }

    public get getEngineHS() {
        return this.engineHS;
    }

    public get getEngineInterals() {
        return this.engineInternals;
    }

    public calculateEngine(walk: number, tonnage: number, type: engineTypes, tech: TechLvl): engineDetails {
        this.ratingMath(walk, tonnage);
        this.runningMath(walk);
        this.engineHeatSinkMath(this.rating);
        this.engineInteralsGenerator(type, tech);
        this.walking = walk;

        const eng: engineDetails = {
            walking: this.walking,
            running: this.running,
            rating: this.rating,
            type: this.type,
            engineWeight: this.engineWeight,
            engineHeatSinks: this.engineHS,
            engineInternals: this.engineInternals
        }

        return eng;
    }

    public getEngineDetails(): engineDetails {
        return {
            walking: this.walking,
            running: this.running,
            rating: this.rating,
            type: this.type,
            engineWeight: this.engineWeight,
            engineHeatSinks: this.engineHS,
            engineInternals: this.engineInternals
        }
    }
}