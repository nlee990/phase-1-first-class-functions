function receivesAFunction(callback) {
    console.log(callback()); 
}  
function returnsANamedFunction() {
    return function namedFunction() {
        console.log(`Nom nom nom, this is delicious!`);
    };
}    
function returnsAnAnonymousFunction() {
    return function(){
        console.log('My name is Neomi!');
    }
}