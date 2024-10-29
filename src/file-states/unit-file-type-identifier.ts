export const unitFileTypeIdentifier = (fp: string) => {
    const suffixRegExp = new RegExp(/((mtf)|(blk))$/i);
    const fileType = fp.match(suffixRegExp);

    !fileType ? [''] : fileType[0];

    return fileType;
};