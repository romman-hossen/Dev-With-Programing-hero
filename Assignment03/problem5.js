// Problem-05: Text Analyzer for an AI Company
// ⚠️ Function Name Must be analyzeText()

// জিহাদ একটি AI কোম্পানিতে কাজ করে।
// অনেক সময় ইউজাররা অনেক বড় লেখা(text) ইনপুট দেয়। এত বড় লেখা নিয়ে কাজ করতে AI-এর বেশি সময় লাগে।

// তাই জিহাদ এমন একটি ফাংশন বানাতে চায়, যা বড় টেক্সটকে একটু ছোট করে বিশ্লেষণ করতে সাহায্য করবে।

// তোমাকে একটি ফাংশন লিখতে হবে, যা—
// 1️⃣ ইনপুট হিসেবে একটি text (string) নেবে
// 2️⃣ ওই text থেকে সবচেয়ে বড় (দীর্ঘ) শব্দটি খুঁজে বের করবে
// 3️⃣ পুরো text-এ মোট কতটি অক্ষর আছে তা গণনা করবে
// ➡️ স্পেস (space) গণনায় ধরা হবে না

function analyzeText(str) {
    // Your code here 
    if(typeof str !== "string" ||  str === "")
   {
       return "Invalid";
   }
   else if(typeof str === "string"){
    let newStr = str.split(" ");
    let obj = {

     };
    let length = 0;
    let textLen = 0;
    let  bigWord = "";

    for(let str of newStr)

        {

            if(length < str.length )
            {
                length = str.length;
                bigWord = str;
                
            }
            let text = newStr.join("")
            textLen = text.length;
            // console.log(textLen)
            obj ={
                  longwords:  bigWord,
                  token:  textLen
            }         

        }
        return obj;
}
}

// "I am a little honest person"
// "Hello world"
// "Keep coding keep shining"
// 12345


let myStr = analyzeText("I am a little honest person")
console.log(myStr)

// এই তথ্যগুলো ব্যবহার করে জিহাদ একটি ছোট summary তৈরি করতে পারবে।

// 👉 তোমার কাজ হলো এই লজিক ব্যবহার করে একটি ফাংশন তৈরি করা।

// ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি String নেবে এবং একটি Object রিটার্ন করবে যেখানে সবচেয়ে বড় শব্দ এবং মোট ক্যারেক্টার সংখ্যা থাকবে।

// 📥 Input:
// ইনপুট হবে একটি String (একটি পূর্ণ বাক্য/Sentence)।

// 🚀 Output:
// একটি Object

// {
//   longwords: String,   // সবচেয়ে লম্বা শব্দ(প্রথমটি যদি একাধিক থাকে)
//   token: Number        // স্পেস বাদ দিয়ে মোট character সংখ্যা
// }
// 🚩 Challenge:
// যদি

// ইনপুট string না হয় (যেমন: Number, Array বা Object)
// তাহলে "Invalid" রিটার্ন করতে হবে।
// 💡 Hints:
// split(), join() মেথড ব্যবহার করতে পারো।


