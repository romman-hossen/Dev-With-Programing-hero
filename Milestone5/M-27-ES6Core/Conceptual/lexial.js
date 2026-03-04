// Lexial scope in js
function getLife(name){
    let totalLife = 3;
    return  () => {
        // totalLife = totalLife-1;
        // console.log(name ,totalLife)
        if(totalLife > 0){
            totalLife --;
            console.log(`${name} you lost a life remaining : ${totalLife}`);
        }
        else{
            console.log(`${name} your life is over! no life left! : ${totalLife}`);
        }
    }
    // return lifeCount;
}
 let romman = getLife("romman");
 romman()
  romman()
  let tumpa = getLife("Tumpa");
  tumpa()
   romman()
    romman()
    tumpa()
    tumpa()