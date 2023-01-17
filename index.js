let isEven = (num) => num % 2 === 0;
let result = [1, 2, 3, 4].filter(isEven);

//console.log(result);

users = [{
        name: 'Zelda',
        age: 25
    },
    {
        name: 'Peach',
        age: 30
    },
    {
        name: 'Mooncake',
        age: 20
    }
];

// .map
let over24 = (user) => user.age > 24;

let usersOver24 = users.map(over24);
//console.log(usersOver24);

// returnera hela objektet från .map
let res = users.map(user => {
    if (over24(user)) {
        return user;
    }
});
//console.log(res);

let newArray = [1, 2, 3, 4].map((el) => el * 2);
//console.log(newArray);

let array = [1, 2, 3, 4];

let sumStuff = (total, val) => {
    return total + val
}

let arrayReduced = array.reduce(sumStuff);

console.log(arrayReduced);
