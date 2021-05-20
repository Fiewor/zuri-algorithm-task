let type;
function convertFahrToCelsius (fahr) {
   let celsius = (fahr * 32) * 5/9;
   if (Array.isArray(fahr)) {
        console.log(`${fahr} is not a valid number, but is an array`);
    } else if (typeof fahr === 'object' && fahr !== null) {
        console.log(`${fahr} is not a valid number, but is an object`);
    } else {
        console.log(celsius.toFixed(4) + " degC");
    }
}
convertFahrToCelsius({john: 40});