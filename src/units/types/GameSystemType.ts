export enum GameTypeAbbrEnum {
    CBT = 'cbt',
    DST = 'dst',
    AS = 'as',
    OV = 'ov'
}

export enum GameTypeEnum {
    CBT = 'Classic Battletech',
    DST = 'Battletech Destiny',
    AS = 'Alpha Strike',
    OV = 'Override'
}

export enum PlayingFieldEnum {
    HEX = 'hex',
    INCH = 'inches'
}

export type GameSystem = {
    gametype: GameTypeEnum;
    gametypeAbbr: GameTypeAbbrEnum;
    board: PlayingFieldEnum;
}