const numbers=[10,45,32,78,33,19];
const result=Math.max(...numbers);
console.log(result);

//spread out items into array into comma sepreated value
const arr=[1,2,3], arr2=[4,5,6];
const arr3=[...arr,...arr2];
console.log(arr3);

//object spread
const john={
    name:'John',
    age:32,
    emailids:[
        'john@gmail.com',
        'john@yahoo.com'
    ],
    address:{
            city:'Banglore',
            pincode:560056
    }
};

const johncopy={// a shallow copy
    ...john
};
console.log(john);
console.log(johncopy);

//primitive value change
johncopy.name='Jonathan';

//non primitive value change
johncopy.emailids.push('john@xyz.com');