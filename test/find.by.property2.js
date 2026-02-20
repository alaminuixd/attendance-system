// Dummy data (simulating database records)
const users = [
    { _id: '1', name: 'Alice', email: 'alice@example.com', age: 25 },
    { _id: '2', name: 'Bob', email: 'bob@example.com', age: 30 },
    { _id: '3', name: 'Charlie', email: 'charlie@example.com', age: 35 },
];

const User = {
    findById: function (id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const data = users.find((user) => user._id === id) || null;
                resolve(data);
            }, 2000);
        });
    },
    findByProperty: function (query) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const key = Object.keys(query)[0];
                const value = query[key];
                const data = users.find((user) => value === user[key]) || null;
                resolve(data);
            }, 3000);
        });
    },
};

User.findById('2').then((result) => console.log(result));
User.findByProperty({ email: 'charlie@example.com' }).then((result) =>
    console.log(result)
);
