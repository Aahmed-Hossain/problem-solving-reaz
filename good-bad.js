// function checkName(name) {
//     if (typeof name === 'string') {
//         const lastChar = name.charAt(name.length - 1).toLowerCase();
//         const reqChar = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
//         if (reqChar.includes(lastChar)) {
//             console.log('Good Name:', name);
//         }else {
//         console.log('Bad Name:', name);
//     }
// }else{
//     console.log('Invalid');
// }
// }

// checkName('TONMOY');    
// checkName('Emily');   
// checkName('Peterwp');  
// checkName(['Peterwp']);  
// checkName(123);


function checkName(name){
    if(typeof name === 'string'){
        const lastChar = name.charAt(name.length - 1).toLocaleLowerCase();
        const reqChar = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
        if(reqChar.includes(lastChar)){
            return `Good name: ${name}`
        }else{
            return `Not okay name`
        }
    }else{
        `invalid name`
    }
}
const result = checkName('lalm')
console.log(result)
