// function deleteInvalids(array) {
//     if (Array.isArray(array)) {
//         const validArray = [];

//         for (let i = 0; i < array.length; i++) {
//             const element = array[i];
//             if (typeof element === 'number' && !isNaN(element)) {
//                 validArray.push(element);
//             }
//         }

//         return validArray;
//     } else {
//         return 'Invalid Array';
//     }
// }
// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
// console.log(deleteInvalids(["1", { num: 2 }, NaN])); 
// console.log(deleteInvalids([1, -1]));
// console.log(deleteInvalids({ num: [1, 2, 3] })); 


function onlyInvalid(arr){

    if(Array.isArray(arr)){
        const valirdArray = [];
        for(let i = 0; i < arr.length; i++){
            let element = arr[i];
            if(typeof element === 'number'&&  !isNaN(element)){
                valirdArray.push(element)
            }
        }
        return valirdArray;
    }else{
        `input valid array`
    }
}
const arr = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]
const result = onlyInvalid(arr)
console.log(result)
