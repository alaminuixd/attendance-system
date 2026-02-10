const data = [
    {
        _id: '69633e42e18930c57bc78484',
        name: 'Al Amin Khan',
        email: 'alamin@gmail.com',
        password:
            '$2b$10$GGuSWbOIfTCgtACj5WSfsOlAlhrYCXjp2oQbPlEsbHt6Y1/izPk7K',
        roles: ['STUDENT'],
        accountStatus: 'PENDING',
        __v: 0,
    },
    {
        _id: '69634063264dca9dc5439590',
        name: 'Ruhul Amin Khan',
        email: 'ruhul@gmail.com',
        password:
            '$2b$10$R/UDNh6kx3ZKDVtDfNMdZuZnEQUDCsrksJzcZQ/APqqogXTXOZVYy',
        roles: ['STUDENT'],
        accountStatus: 'PENDING',
        __v: 0,
    },
    {
        _id: '6963407c264dca9dc5439593',
        name: 'Syeda Sultana',
        email: 'sultana@gmail.com',
        password:
            '$2b$10$rlQMpLF6zQjNXrBO3CvF9.oqpMMfgnT4SItyKw7Mh7CJqEybgLDza',
        roles: ['STUDENT'],
        accountStatus: 'PENDING',
        __v: 0,
    },
    {
        _id: '6963408d264dca9dc5439596',
        name: 'Abrar Syed Khan',
        email: 'abrar@gmail.com',
        password:
            '$2b$10$A.FxE3hpMDfBgYOAtwkcner40s2c9YYSFFBGYznnwsxFNxXL1U3/e',
        roles: ['STUDENT'],
        accountStatus: 'PENDING',
        __v: 0,
    },
    {
        _id: '696340a0264dca9dc5439599',
        name: 'Arshiya Nur',
        email: 'arshiya@gmail.com',
        password:
            '$2b$10$/pbiZ8ZNCpblHuksa6B/YOwwLrMZW2J53aSwdWdf9Z1WZf2q/4s2W',
        roles: ['STUDENT'],
        accountStatus: 'PENDING',
        __v: 0,
    },
    {
        _id: '696340b8264dca9dc543959c',
        name: 'Marium Binte Azad',
        email: 'marium@gmail.com',
        password:
            '$2b$10$a45iVQOjIFemErWZNOvTJOvg8/Tx4ivNk5h5GeNQognyVPD2hzfcm',
        roles: ['STUDENT'],
        accountStatus: 'PENDING',
        __v: 0,
    },
    {
        _id: '696340ca264dca9dc543959f',
        name: 'Abdullah Al Imran',
        email: 'abdullah@gmail.com',
        password:
            '$2b$10$qcZpMm230qrHSRBV6ujA8.Tva/HotTAgSdP24ed/UJ7smTRj8B3Gq',
        roles: ['STUDENT'],
        accountStatus: 'PENDING',
        __v: 0,
    },
    {
        _id: '696342f13a9aee8efe3c9e6e',
        name: 'Ahmadullah Al Mujahid',
        email: 'mujahid@gmail.com',
        password:
            '$2b$10$u8G7DEfbU9K3QoQ/WjYuzeUgadvB8CbKBdmbz48F8zl68WGiA1o7m',
        roles: ['STUDENT'],
        accountStatus: 'PENDING',
        __v: 0,
    },
    {
        _id: '6967e4f865ee961a8593f1a3',
        name: 'Ataullah Al Mahin',
        email: 'mahin@gmail.com',
        password:
            '$2b$10$6XPp9uw7ktB9d4ZU/1EzZOW7SJhcoPcMw7vtruR5svleIV4KDySw.',
        roles: ['STUDENT'],
        accountStatus: 'PENDING',
        __v: 0,
    },
    {
        _id: '69688a658e701b73e8a270e2',
        name: 'Mizanur Rahman',
        email: 'mizan@gmail.com',
        password:
            '$2b$10$7nfVctddsOkjQg7fciKOi.TtuZIU80TpKOZ5dJurQ/YCZifXEegzq',
        roles: ['STUDENT'],
        accountStatus: 'PENDING',
        __v: 0,
    },
];
const sanitizeData = (data, items = []) => {
    if (!data) return null;
    if (!Array.isArray(items)) {
        throw new Error('items must be an array');
    }
    const filteredData = [];
    for (let i = data.length; i > 0; i--) {
        const dataCopy =
            data[i]?.toObject === 'function'
                ? data[i].toObject
                : { ...data[i] };
        items.forEach((item) => delete dataCopy[item]);
        filteredData.push(dataCopy);
    }
    return filteredData;
};

console.log(
    sanitizeData(data, [
        'password',
        'roles',
        'accountStatus',
        'email',
        '_id',
        '__v',
    ])
);
