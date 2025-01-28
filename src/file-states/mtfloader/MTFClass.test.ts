import { describe, it, expect } from "vitest";
import { MTFClass } from "./MTFClass";
import { Mech } from "../../common/mech";

describe('MTF Class tests', () => {
    const sampleMtfFile = "chassis: Firebee\nmodel: FRB-2E\nmul id:1079\n\nConfig:Biped\nTechBase:Inner Sphere\nEra:2524\nSource:TRO: 3075\nRules Level:1\nrole:Brawler\n\n\n\nquirk:poor_life_support\nquirk:weak_legs\n\n\nMass:35\nMass:35\nEngine:175 Fusion Engine\nStructure:Standard\nMyomer:Standard\n\nHeat Sinks:10 Single\nWalk MP:5\nJump MP:5\n\nArmor:Standard(Inner Sphere)\nLA Armor:10\nRA Armor:10\nLT Armor:10\nRT Armor:10\nCT Armor:11\nHD Armor:8\nLL Armor:13\nRL Armor:13\nRTL Armor:3\nRTR Armor:3\nRTC Armor:5\n\nWeapons:5\nSRM 2, Left Arm\nLarge Laser, Right Arm\nSRM 2, Left Torso\nSRM 2, Right Torso\nSRM 2, Center Torso\n\nLeft Arm:\nShoulder\nUpper Arm Actuator\nLower Arm Actuator\nHand Actuator\nSRM 2\n-Empty-\n-Empty-\n-Empty-\n-Empty\n-Empty-\n-Empty-\n-Empty-\n\nRight Arm:\nShoulder\nUpper Arm Actuator\nLower Arm Actuator\nLarge Laser\nLarge Laser\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n\nLeft Torso:\nHeat Sink\nJump Jet\nJump Jet\nSRM 2\nIS Ammo SRM-2\nIS Ammo SRM-2\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n\nRight Torso:\nJump Jet\nJump Jet\nSRM 2\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n\nCenter Torso:\nFusion Engine\nFusion Engine\nFusion Engine\nGyro\nGyro\nGyro\nGyro\nFusion Engine\nFusion Engine\nFusion Engine\nJump Jet\nSRM 2\n\nHead:\nLife Support\nSensors\nCockpit\n-Empty-\nSensors\nLife Support\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n\nLeft Leg\nHip\nUpper Leg Actuator\nLower Leg Actuator\nFoot Actuator\nHeat Sink\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n\nRight Leg:\nHip\nUpper Leg Actuator\nLower Leg Actuator\nFoot Actuator\nHeat Sink\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-\n-Empty-";
    const sampleQuadMTF = "chassis:Scorpion\nmodel:SCP-2N\nmul id:8315/nConfig:Quad/ntechbase:Inner Sphere/nera:3131/nsource:Rec Guide:ilClan #19/nrules level:2/nrole:Skirmisher/nquirk:bad_rep_clan/nquirk:bad_rep_is/nquirk:hard_pilot/nmass:55/nengine:330 Light Engine(IS)/nstructure:IS Endo Steel/nmyomer:Standard/ncockpit:Standard Cockpit/ngyro:XL Gyro/nheat sinks:10 IS Double/nwalk mp:6/njump mp:0/narmor:Standard(Inner Sphere)/nFLL armor:22/nFRL armor:22/nLT armor:20/nRT armor:20/nCT armor:28/nHD armor:8/nRLL armor:22/nRRL armor:22/nRTL armor:6/nRTR armor:6/nRTC armor:8/nWeapons:4/nTAG, Left Torso/nPlasma Rifle, Right Torso/nMML 3, Right Torso/nMML 3, Right Torso/nFront Left Leg:/nHip/nUpper Leg Actuator/nLower Leg Actuator/nFoot Actuator/nIS Endo Steel/nIS Endo Steel/n-Empty-/n-Empty-/n-Empty-/n-Empty-/n-Empty-/n-Empty-/nFront Right Leg:/nHip/nUpper Leg Actuator/nLower Leg Actuator/nFoot Actuator/nIS Endo Steel/nIS Endo Steel/n-Empty-/n-Empty-/n-Empty-/n-Empty-/n-Empty-/n-Empty-/nLeft Torso:/nFusion Engine/nFusion Engine/nIS Ammo MML-3 SRM/nIS Ammo MML-3 LRM/nISTAG/nSupercharger/nISCASEII/nIS Endo Steel/nIS Endo Steel/nIS Endo Steel/nIS Endo Steel/n-Empty-/nRight Torso:/nFusion Engine/nFusion Engine/nISPlasmaRifle/nISPlasmaRifle/nISMML3/nISMML3/nISMML3/nISMML3/nISPlasmaRifleAmmo/nISPlasmaRifleAmmo/nIS Endo Steel/nIS Endo Steel/nCenter Torso:/nFusion Engine/nFusion Engine/nFusion Engine/nGyro/nGyro/nGyro/nGyro/nGyro/nGyro/nFusion Engine/nFusion Engine/nFusion Engine/nHead:/nLife Support/nSensors/nCockpit/n-Empty-/nSensors/nLife Support/n-Empty-/n-Empty-/n-Empty-/n-Empty-/n-Empty-/n-Empty-/nRear Left Leg:/nHip/nUpper Leg Actuator/nLower Leg Actuator/nFoot Actuator/nIS Endo Steel/nIS Endo Steel/n-Empty-/n-Empty-/n-Empty-/n-Empty-/n-Empty-/n-Empty-/nRear Right Leg:/nHip/nUpper Leg Actuator/nLower Leg Actuator/nFoot Actuator/nIS Endo Steel/nIS Endo Steel/n-Empty-/n-Empty-/n-Empty-/n-Empty-/n-Empty-/n-Empty-/noverview: Every company has their beginnings. Many know Brigadier Corporation as one of the industrial powerhouses of the Free Worlds League. But at first, Brigadier was little more than a contract manufacturer for existing Hegemony designs. Ambition—along with a healthy lust for profits—would eventually spurn Brigadier to lunge towards manufacturing their own in-house designs, which would be boldly launched with the Scorpion: a quad BattleMech. Though Dr. Harrison, a strong proponent for quad designs, claimed that his new Scorpion would revolutionize 'Mech warfare, the Scorpion turned out to be barely more than a boondoggle. Sales were low, and few mourned the loss of the main factory on Oliver when they were destroyed in 2837./ncapabilities: The Scorpion is typically armed with a reliable one-two weapon combination. A primary large energy weapon or autocannon opens up holes, while a missile weapon usually takes advantage of any exposed weaknesses. While powerful in theory, in practice the Scorpion mounts barely more firepower than 'Mechs twenty tons lighter. With armor coverage barely better than some light 'Mechs, a badly positioned Scorpion is easy prey for better-armed BattleMechs. Combined with the bucking, bumpy ride the Scorpion has to offer, few choose to voluntarily pilot the design./ndeployment: Scorpions can be found throughout every part of the Inner Sphere. They are not a common design, and the limitations of the Succession Wars lead many Successor States to neglect their Scorpions in favor of better, more reliable designs. Upgrade kits would eventually appear with the discovery of the Helm Core, which gradually lead to the base SCP-1N Scorpion remaining solely in the hands of poorer nations or mercenary commands./nmanufacturer:Brigadier Corporation/nprimaryfactory:Oliver/nsystemmanufacturer:CHASSIS:Brigadier 800FE Endo-Steel/nsystemmanufacturer:ENGINE:Edasich 330 Light/nsystemmanufacturer:ARMOR:StarSlab/4 with CASE II/nsystemmanufacturer:COMMUNICATIONS:Garret 500A/nsystemmanufacturer:TARGETING:Garret GRNDTRK 9 with TAG"
    const mtfclass = new MTFClass();

    describe('reader method should return json object of parsed file', () => {
        const actual = mtfclass.reader(sampleMtfFile) as unknown as Mech;
        
        it('should find that the chassis of the mech is a firebee and have its two quirks', () => {
            expect(actual.chassis).toBe("Firebee");
            expect(actual.quirk?.length).toBe(2);
        });

        it('should find and read the Firebee walk, run, and jump values', () => {
            const walkString = actual.walk.toString();
            const walkNumber = parseInt(walkString);
            const jumpString = actual.jump.toString();
            const jumpNumber = parseInt(jumpString);
            expect(walkNumber).toBe(5);
            expect(actual.run).toBe(8);
            expect(jumpNumber).toBe(5)
        })

        it('should have basic details about engine and mass and heat sinks', () => {
            expect(actual.engine).toBe('175 Fusion Engine');
            expect(actual.mass).toBe('35');
        })

        it('should find and break down armor amounts', () => {
            expect(actual.armortype).toBe("Standard(Inner Sphere)");
            expect(actual?.armor[1][1]).toBe('10');
        })

        it('should populate armaments and equipment correctly', () => {
            expect(actual.arms?.length).toBe(6);
            expect(actual.arms[2][0]).toBe('Large Laser');
            expect(actual.arms[2][1]).toBe('Right Arm');
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
        });

        it('should populate the internal structure pip numbers correctly', () => {
            expect(actual.internals.a).toBe(6);
            expect(actual.internals.h).toBe(3);
            expect(actual.internals.t).toBe(8);
            expect(actual.internals.ct).toBe(11);
            expect(actual.internals.l).toBe(8);
        })
    })
    describe('populate mech object for quad mech', () => {
        const actual = mtfclass.reader(sampleQuadMTF);
        
        it('should find that the chassis of the mech is a scorpion and have its three quirks', () => {
            expect(actual.chassis).toBe("Firebee");
            expect(actual.quirk?.length).toBe(3);
        });
    })
});
