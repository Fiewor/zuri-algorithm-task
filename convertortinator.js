let type;
function convertFahrToCelsius (fahrenheit) {
   let celsius = (fahrenheit * 32) * 5/9;
   if (Array.isArray(fahrenheit)) {
       type = " array";
    } else if (typeof fahrenheit === 'object' && fahrenheit !== null) {
        type = " object";
    } else {
        console.log(celsius.toFixed(4) + " degF");
    }
    console.log(`${fahrenheit} is not a valid number but an` + type);
}
convertFahrToCelsius(40);