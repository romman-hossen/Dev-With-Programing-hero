// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 
// 190, 120, 165, 137];
function lowest(numbers)
{
    let lowest = numbers[0];
    for(const number of numbers)
    {
        if(number < lowest)
        {
            lowest = number;
        }
    }
    return lowest;
}
// console.log(lowest(heights2))

// Task -2:
// Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function smallest(friends){
    let sotoBondhu =friends[0];
    let smal = ""
    for(const friend of friends)
    {
        const len = friend.length;
        if(len < sotoBondhu.length)
            {
            smal = friend;
        }


    }
    return smal;

}
// console.log(smallest(heights2))




// Task-3:
// Your task is to calculate the total budget required to buy electronics:

// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
function calculateElectronicsBudget(laptop,tablets,mobile){
      const  laptopPrice = 35000;
      const  tabletPrice = 15000;
      const mobilePrice = 20000;
      const moneyRequired = laptop * laptopPrice + tablets * tabletPrice + mobile * mobilePrice;
      return moneyRequired;

    }
    const neddedMoney = calculateElectronicsBudget(1,1,45);
    console.log('Total money required :',neddedMoney,'tk');

    