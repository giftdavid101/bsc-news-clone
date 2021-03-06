export const colorCodes = (styles) => {
    const colors = {
        red: '#f65058ff',
        gold: '#c3a604',
        green: '#008c76',
        white: '#fff',
        black: '#000',
    };
    return styles ? colors[styles] : 'black';
};
