function checkName(name) {
    if (typeof name === 'string') {
        const lastChar = name.charAt(name.length - 1).toLowerCase();
        const reqChar = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
        if (reqChar.includes(lastChar)) {
            console.log('Good Name:', name);
        }else {
        console.log('Bad Name:', name);
    }
}else{
    console.log('Invalid');
}
}

checkName('TONMOY');    
checkName('Emily');   
checkName('Peterwp');  
checkName(['Peterwp']);  
checkName(123);
