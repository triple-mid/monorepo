export const hexToRgba = (hex: string, opacity: number): string => {
    const clearHex = hex.slice(1);

    let r = 0;
    let g = 0;
    let b = 0;

    if (clearHex.length === 3) {
        r = Number.parseInt(clearHex[0] + clearHex[0], 16);
        g = Number.parseInt(clearHex[1] + clearHex[1], 16);
        b = Number.parseInt(clearHex[2] + clearHex[2], 16);
    } else if (clearHex.length === 6) {
        r = Number.parseInt(clearHex.slice(0, 2), 16);
        g = Number.parseInt(clearHex.slice(2, 4), 16);
        b = Number.parseInt(clearHex.slice(4, 6), 16);
    }

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
