function sanitizeData(data, items = []) {
    if (!data) return null;
    if (!Array.isArray(items)) {
        throw new Error('items must be an array');
    }

    if (Array.isArray(data)) {
        // map calls sanitize once for each element in the array
        // and collects the returned values into a new array
        data.map((item) => sanitizeData(item, items));
    }
    // here 'data' is a single object from the main 'data' array
    // this object comes from 'eachData' in sanitize(eachData, items)
    const objData = { ...data };

    items.forEach((key) => {
        delete objData[key];
    });
    // this returned object becomes one element
    // inside the array returned by map()
    return objData;
}

const data = [
    { name: 'alamin', password: '123', roles: 'admin' },
    { name: 'abrar syed', password: '123', roles: 'reader' },
];

console.log(sanitizeData(data, ['password', 'roles']));

/* 
function "sanitizeData" is called with 'data=[{..1..},{..2..}]' and 'items=['password', 'roles']'
1st if is false so go to the next line
2nd if is false too. so go to the next line
as the 'data' is an array get into the if
map data and call 'sanitizeData' with the followings
sanitizeData({ name: 'alamin', password: '123', roles: 'admin' }, ['password', 'roles'])
as it (the function) calling itself again, go at the begining
Now,
1st, 2nd & 3rd all if false go next line and make a copy of data. const objData = { ...data };
remove/delete all items from the copied 'objData'
and return objData with remaining properties and values

Now
*/
