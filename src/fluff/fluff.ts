import {TechLvl, UnitRole} from '../units/types/MiscRecordTypes'
export class Fluff {
    mulId = 0;
    chassis = '';
    model = '';
    config = '';
    era = '';
    source = '';
    techBase = '';
    rules = TechLvl.TECHINTRO;
    role = UnitRole.NONE;
    quirks = []
}