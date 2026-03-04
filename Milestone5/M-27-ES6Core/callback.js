// callback function
function settleLife(name,isBcs,marriage,pattri){
    if(isBcs){
        marriage(name,pattri);
        // console.log(name,"is settled in life");
    }

    // console.log(settleLife("Romman",true));
}
function boloKobul(pattri){
    console.log("Kobul",pattri);
}
settleLife('Tumpa',true,boloKobul,'nari'); // this is called callback function, we are passing a function as an argument to another function, and that function will be called inside the settleLife function when the condition is true.

