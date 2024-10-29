import { describe, it, expect } from "vitest";
import { MTFClass } from "./MTFClass";

describe('MTF Class tests', () => {
    const sampleMtfFile = "chassis: Firebee\nmodel: FRB-2E\nmul id:1079\n\nConfig:Biped\nTechBase:Inner Sphere\nEra:2524\nSource:TRO: 3075\nRules Level:1\nrole:Brawler\n\n\n\nquirk:poor_life_support\nquirk:weak_legs\n\n\nMass:35\nMass:35\nEngine:175 Fusion Engine\nStructure:Standard\nMyomer:Standard\n\nHeat Sinks:10 Single\nWalk MP:5\nJump MP:5\n\nArmor:Standard(Inner Sphere)\nLA Armor:10\nRA Armor:10\nLT Armor:10\nRT Armor:10\nCT Armor:11\nHD Armor:8\nLL Armor:13\nRL Armor:13\nRTL Armor:3\nRTR Armor:3\nRTC Armor:5\n\nWeapons:5\nSRM 2, Left Arm\nLarge Laser, Right Arm\nSRM 2, Left Torso\nSRM 2, Right Torso\nSRM 2, Center Torso\n\nLeft Arm:\nShoulder\nUpper Arm Actuator\nLower Arm Actuator\nHand Actuator\nSRM 2\n-Empty-\n-Empty-\n-Empty-\n-Empty\n-Empty-\n-Empty-\n-Empty-\n\nRight Arm:\nShoulder\nUpper Arm Actuator\nLower Arm Actuator\nLarge Laser\nLarge Laser\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n\nLeft Torso:\nHeat Sink\nJump Jet\nJump Jet\nSRM 2\nIS Ammo SRM-2\nIS Ammo SRM-2\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n\nRight Torso:\nJump Jet\nJump Jet\nSRM 2\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n\nCenter Torso:\nFusion Engine\nFusion Engine\nFusion Engine\nGyro\nGyro\nGyro\nGyro\nFusion Engine\nFusion Engine\nFusion Engine\nJump Jet\nSRM 2\n\nHead:\nLife Support\nSensors\nCockpit\n-Empty-\nSensors\nLife Support\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n\nLeft Leg\nHip\nUpper Leg Actuator\nLower Leg Actuator\nFoot Actuator\nHeat Sink\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n\nRight Leg:\nHip\nUpper Leg Actuator\nLower Leg Actuator\nFoot Actuator\nHeat Sink\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-";
    const mtfclass = new MTFClass();

    describe('reader method should return json object of parsed file', () => {
        const actual = mtfclass.reader(sampleMtfFile);
        
        it('should find that the chassis of the mech is a firebee and have its two quirks', () => {
            expect(actual.chassis).toBe("Firebee");
            expect(actual.quirk?.length).toBe(2);
        });

        it('should have basic details about engine and mass and heat sinks', () => {
            expect(actual.engine).toBe('175 Fusion Engine');
            expect(actual.mass).toBe('35');
            expect(actual.jump).toBe(0);
        })

        it('should find and break down armor amounts', () => {
            expect(actual.armortype).toBe("Standard(Inner Sphere)");
            expect(actual?.armor[1][1]).toBe('10');
        })

        it('should populate armaments and equipment correctly', () => {
            expect(actual.arms?.length).toBe(6);
            expect(actual.arms[1][0]).toBe('Large Laser');
            expect(actual.arms[1][1]).toBe('Right Arm');
        })

        it('should populate crits arrays correctly', () => {
            expect(actual.crits?.ra.length).toBe(12);
            expect(actual.crits?.la.length).toBe(12);
            expect(actual.crits?.lt.length).toBe(12);
            expect(actual.crits?.rt.length).toBe(12);
            expect(actual.crits?.ct.length).toBe(12);
            expect(actual.crits?.hd.length).toBe(12);
            expect(actual.crits?.ll.length).toBe(12);
            expect(actual.crits?.rl.length).toBe(12);
            expect(actual.crits?.ra[0]).toBe('Shoulder');
        })
    })
});