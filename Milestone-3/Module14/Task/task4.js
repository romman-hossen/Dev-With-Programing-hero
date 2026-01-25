/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
const number = 80;
const score = 30 ;
if(number >= 80 )
{
    if(score >= 80){
         console.log('message unseen.')
        }
    else if(score >= 60 && score < 80){
        console.log('good luck next time.')
    }
    else if(score >= 40 && score < 60){
            console.log('message unseen.')
          }
    else{
        console.log('you are block.')
    }
 }

else{
    console.log('go to home and sleep and act sad') 
}