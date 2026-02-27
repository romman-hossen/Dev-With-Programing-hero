// Double equal (==) operator provides type coercion, which means it converts the operands to the same type before making the comparison.
console.log(5 == "5"); // true
console.log(0 == false)
console.log(NaN == NaN) 
console.log([] == {})
console.log([] == [])
console.log({} == {})
console.log("5" == true)
console.log(true == '6')
console.log([5] == '5')
console.log({} == '5')
console.log(true == false)

// 🔥 1️⃣ Double Equal (==)

// 👉 এটাকে বলে Loose Equality
// 👉 এটা value compare করে
// 👉 কিন্তু compare করার আগে type convert করে (Type Coercion)