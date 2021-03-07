export const colorCodes = (styles) => {
    const hoverLinks = [
        {
            id: 1,
            title: ['Dive Into Decentralized Finance', 'Monday Market Recap'],
            content: [
                'Greg Gotsis technical market report revolving around Crypto and DeFi',
                "Ben Antes' column which dives into various DeFi Topics & strategies",
            ],
        },
        {
            id: 2,
            title: ['Dive Into Decentralized Finance', 'Monday Market Recap'],
            content: [
                'Greg Gotsis technical market report revolving around Crypto and DeFi',
                "Ben Antes' column which dives into various DeFi Topics & strategies",
            ],
        },
    ];

    return styles ? colors[styles] : 'black';
};
