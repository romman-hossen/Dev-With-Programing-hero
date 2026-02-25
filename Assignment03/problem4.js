// Problem-04: Upcoming Gono Vote
// ⚠️ Function Name Must be gonoVote()
// আসন্ন গণভোটের ফলাফল বিশ্লেষণের জন্য তোমাকে একটি দায়িত্ব দেওয়া হয়েছে। ভোটের ডাটাগুলো একটি Array-তে জমা করা হয়েছে যেখানে ভোটারদের মতামত "ha" অথবা "na" হিসেবে আছে। তোমার কাজ হলো একটি ফাংশন তৈরি করা যা ভোট গণনা করবে এবং দেখবে "ha" ভোট সংখ্যাগরিষ্ঠ (Majority) কি না।
// ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি Array নেবে এবং ভোটের সংখ্যার ওপর ভিত্তি করে একটি Boolean (true/false) অথবা equal (string) রিটার্ন করবে।
// 📥 Input:
// ইনপুট হবে একটি Array। যেমন: ["ha", "na", "ha"]


// 🚀 Output:
// যদি "ha" সংখ্যা "na" এর বেশি → true
// যদি "ha" সংখ্যা "na" এর সমান → “equal”
// অন্যথায় → false


// 🚩 Challenge:
// যদি ইনপুটটি একটি Array না হয় (যেমন: String, Number বা Object), তবে আউটপুট হিসেবে Invalid রিটার্ন করতে হবে।


// function gonoVote(array) {
//     //write your code here
//    if(Array.isArray(array) === false)
//         {
//            return  "Invalid";
//         }
//     else if(Array.isArray(array) === true)
//     {
 
//     for(const item of array )
//     {
        
//         if(item["ha"] === item["na"]){
//             return "equal";  

//         }
//         else if(item["ha"] > item["na"])

//         {
//             return true;  

//         } 

//     }
    
// }
// else{
//     return false;
// }
// }

// function gonoVote(array) {
//     let havote = 0;
//     let navote = 0;
//     for (const arr of array)
//     {
//         if(arr.includes(["ha"]))
//         {
//             havote ++;
            
//         }
//         else{
//             navote ++;
//         }

//     }
//     if(Array.isArray(array) === false)
//         {
//            return  "Invalid";
//         }
//     else if(havote > navote)
//     {
//         return true;
//     }
//     else if(havote === navote)
//     {
//         return "equal"
//     }
//     else{
//         return false;
//     }
// }

// function gonoVote(array) {
//     let havote = 0;
//     let navote = 0;
//     if(Array.isArray(array) === true){
//      for (const item of array)
//     {
//         if(item.includes(["ha"]))
//         {
//             havote ++;
            
//         }
//         else{
//             navote ++;
//         }

//     }
//     if(havote > navote)
//     {
//         return true;
//     }
//     else if(havote === navote)
//     {
//         return "equal"
//     }
//     else{
//         return false;
//     }

// }  
//    else
//         {
//            return  "Invalid";
//         } 
    
// }

function gonoVote(array) {
    let havote = 0;
    let navote = 0;
    if(Array.isArray(array) === true)
    {
     for (const arr of array)
    {
        if(arr.includes(["ha"]))
        {
            havote ++;
            
        }
        else if(arr.includes(["na"]))
        {
            navote ++;
        }
        else{
            return "Invalid";
        }

    }
    if(havote > navote)
     {
        return true;
     }
    else if(havote === navote)
     {
        return "equal"
     }
    else{
        return false;
     }
  }  
   else
    {
      return  "Invalid";
    }   
}


const voteRes = gonoVote(["ha","na","na"]);
console.log(voteRes)
