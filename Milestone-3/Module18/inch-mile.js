function feetNum(inch)
{
    const feet = inch / 12;
    // const feet = inch * 0.0833333;
    const intFeet = parseInt(feet);
    const inchi = inch % 12 ;   
    return intFeet + ' feet & : '+inchi+' inch'; // ami ata akta variable er moddhe rekeo sei variable ta ke retun korte pari 

}
const total = feetNum(67);
// console.log(total)

// gram to kg 1000 gram == 1 kg
function gramKg(gram)
{

    const kg = gram / 1000;
    return kg;

}
const gram  = 1700;
const kg = gramKg(gram);
console.log(gram,'gram :',kg,'kg')




