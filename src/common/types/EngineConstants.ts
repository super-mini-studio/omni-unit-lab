export const engineWeightMap = (): Map<string, number[]> => {
    const ewMap = new Map();

    ewMap.set('0.5', [10, 15, 20, 25]);
    ewMap.set('1', [30, 35, 40, 45]);
    ewMap.set('1.5', [50, 55, 60]);
    ewMap.set('2', [65, 70, 75]);
    ewMap.set('2.5', [80, 85]);
    ewMap.set('3', [90, 95, 100]);
    ewMap.set('3.5', [105, 110]);
    ewMap.set('4', [115, 120, 125]);
    ewMap.set('4.5', [130, 135]);
    ewMap.set('5', [140, 145]);
    ewMap.set('5.5', [150, 155]);
    ewMap.set('6', [160, 165, 170]);
    ewMap.set('7', [175, 180]);
    ewMap.set('7.5', [185, 190]);
    ewMap.set('8', [195]);
    ewMap.set('8.5', [200, 205]);
    ewMap.set('9', [210]);
    ewMap.set('9.5', [215]);
    ewMap.set('10', [220, 225]);
    ewMap.set('10.5', [230]);
    ewMap.set('11', [235]);
    ewMap.set('11.5', [240]);
    ewMap.set('12', [245]);
    ewMap.set('12.5', [250]);
    ewMap.set('13', [255]);
    ewMap.set('13.5', [260]);
    ewMap.set('14', [265]);
    ewMap.set('14.5', [270]);
    ewMap.set('15.5', [275]);
    ewMap.set('16',[280]);
    ewMap.set('16.5', [285]);
    ewMap.set('17.5', [290]);
    ewMap.set('18', [295]);
    ewMap.set('19', [300]);
    ewMap.set('19.5', [305]);
    ewMap.set('20.5', [310]);
    ewMap.set('21.5', [315]);
    ewMap.set('22.5', [320]);
    ewMap.set('23.5', [325]);
    ewMap.set('24.5', [330]);
    ewMap.set('25.5', [335]);
    ewMap.set('27', [340]);
    ewMap.set('28.5', [345]);
    ewMap.set('29.5', [350]);
    ewMap.set('31.5', [355]);
    ewMap.set('33', [360]);
    ewMap.set('34.5', [365]);
    ewMap.set('36.5', [370]);
    ewMap.set('38.5', [375]);
    ewMap.set('41', [380]);
    ewMap.set('43.5', [385]);
    ewMap.set('46', [390]);
    ewMap.set('49', [395]);
    ewMap.set('52.5', [400]);

    return ewMap;
}

export enum engineTypes {
    'NORMAL' = 'Normal',
    'L' = 'Light',
    'XL' = 'Extralight',
    'XXL' = 'Extra Extralight',
    'P' = 'Primitive',
    'ICE' = 'Internal Combustion',
    'C' = 'Compact'
}