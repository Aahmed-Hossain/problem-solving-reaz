
// function functionpassword(obj) {
//     if (
//         // obj &&
//         // obj.name &&
//         // obj.birthYear &&
//         // obj.siteName &&
//         typeof obj.name === 'string' &&
//         typeof obj.birthYear === 'number' &&
//         typeof obj.siteName === 'string' &&
//         obj.birthYear >= 1000 && 
//         obj.birthYear <= 9999   
//     ) {
//         const password = `${obj.siteName.charAt(0).toUpperCase()}${obj.siteName.slice(1)}#${obj.name.toLowerCase()}@${obj.birthYear}`;
//         console.log(password);
//         return password;
//     } else {
//         console.log('invalid');
//         return 'invalid';
//     }
// }
// const obj = { name: "uddin", birthYear: 1999, siteName: "google" }
// const result = functionpassword(obj);
// console.log(result);

// console.log(functionpassword({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));
// console.log(functionpassword({ name: "rahat", birthYear: 2002, siteName: "facebook" }));
// console.log(functionpassword({ name: "toky", birthYear: 200, siteName: "facebook" }));
// console.log(functionpassword({ name: "maisha", birthYear: 2002 }));









function getPassword (obj){
    if(typeof obj.name === 'string' && typeof obj.siteName === 'string'&& typeof obj.birthYear === 'number' && obj.birthYear >= 2000 && obj.birthYear <= 3000
    ){
const password = `${obj.siteName.charAt(0).toUpperCase()}${obj.siteName.slice(1).toLowerCase()}#${obj.name.toLowerCase()}@${obj.birthYear}`
return password;
    }else{
        return 'Invalid Passwrod'
    }
};
const obj = { name: "toky", birthYear: 3001, siteName: "facebook" }
const result = getPassword(obj)
console.log(result)