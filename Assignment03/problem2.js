// Problem-02: OTP Validation for Zapshift
// ⚠️ Function Name Must be validOtp()

// Zapshift কোম্পানি তাদের প্রোডাক্ট ডেলিভারি করার সময় OTP পাঠায়। কিন্তু কিছু লোক Fraud OTP ব্যবহার করে প্রোডাক্ট রিসিভ করে ফেলে। তাই তোমার কাজ হলো একটি ফাংশন বানানো, যা OTP সঠিক কিনা চেক করবে।

// ফাংশনটি একটি Boolean (true/false) রিটার্ন করবে। যদি ইনপুটটি সঠিক ফরম্যাটে না থাকে তবে Invalid রিটার্ন করবে।

// 📥 Input:
// একটি ইনপুট: otp : string
// 🚀 Output:
// Boolean (true / false) রিটার্ন করবে
// 🚩 Challenge:
// যদি

// ইনপুট string না হয় (যেমন: Number, Array, Object, null ইত্যাদি)
// তাহলে "Invalid" রিটার্ন করতে হবে।
// 🎯 Validation Rules:
// OTP অবশ্যই ৮ অক্ষরের হতে হবে (length === 8)
// OTP অবশ্যই "ph-" দিয়ে শুরু হতে হবে
// 💡 Hints:
// startsWith() মেথড ব্যবহার করতে পারো।




function validOtp(otp) {
    // Your code here
    if(typeof  otp !== "string")
    {
        return "Invalid"; 
    }
    else if(otp.length === 8 && otp.startsWith("ph-"))
    {
        return true;
    }
    else{
        return false;
    }
}

const otpIs = validOtp("ph-10985");
console.log(otpIs)


const otpIs2 = validOtp("ph-1234");
console.log(otpIs2);


const otpIs3 = validOtp(["ph-10985"]);
console.log(otpIs3);


const otpIs4 = validOtp("abc-12345");
console.log(otpIs4);

const otpIs5 = validOtp(12345678);
console.log(otpIs5);

