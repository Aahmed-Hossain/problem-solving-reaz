
function functionpassword(obj) {
    if (
        obj &&
        obj.name &&
        obj.birthYear &&
        obj.siteName &&
        typeof obj.name === 'string' &&
        typeof obj.birthYear === 'number' &&
        typeof obj.siteName === 'string' &&
        obj.birthYear >= 1000 && 
        obj.birthYear <= 9999   
    ) {
        const password = `${obj.siteName.charAt(0).toUpperCase()}${obj.siteName.slice(1)}#${obj.name.toLowerCase()}@${obj.birthYear}`;
        console.log(password);
        return password;
    } else {
        console.log('invalid');
        return 'invalid';
    }
}

console.log(functionpassword({ name: "kolimuddin", birthYear: 1999, siteName: "Google" }));
console.log(functionpassword({ name: "rahat", birthYear: 2002, siteName: "facebook" }));
console.log(functionpassword({ name: "toky", birthYear: 200, siteName: "facebook" }));
console.log(functionpassword({ name: "maisha", birthYear: 2002 }));
