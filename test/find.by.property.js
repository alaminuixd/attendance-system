// Dummy data (simulating database records)
const users = [
    { _id: '1', name: 'Alice', email: 'alice@example.com', age: 25 },
    { _id: '2', name: 'Bob', email: 'bob@example.com', age: 30 },
    { _id: '3', name: 'Charlie', email: 'charlie@example.com', age: 35 },
];

// Simulated async "database" methods
const User = {
    findById: (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const user = users.find((user) => user._id === id) || null;
                resolve(user);
            }, 200); // simulate async delay
        });
    },

    findOne: (query) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const key = Object.keys(query)[0];
                const value = query[key];
                const user = users.find((user) => user[key] === value) || null;
                resolve(user);
            }, 200); // simulate async delay
        });
    },
};

// Your function (same logic as original)
const findUserByProperty = (key, value) => {
    if (key === '_id') {
        return User.findById(value);
    }
    return User.findOne({ [key]: value });
};

// Example usage
findUserByProperty('_id', '2').then((user) =>
    console.log('Find by _id:', user)
);

findUserByProperty('email', 'alice@example.com').then((user) =>
    console.log('Find by email:', user)
);

findUserByProperty('name', 'Unknown').then((user) =>
    console.log('Not found:', user)
);
