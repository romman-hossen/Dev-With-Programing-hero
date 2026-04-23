import Image from "next/image";

const FoodDetails =async ({params}) => {
    const {foodId} =await (params);
     const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    // console.log(data,"food page data")
    // const foodDetails = data?.data?.[0];
    const foodDetails = data.data;
    // if(!foodDetails){
    //     return(
    //         <div>
    //             Item not found
    //         </div>
    //     )
    // }
    const {dish_name,
    category,
    price,
    image_link,
    origin_and_popularity,
    main_ingredients,
    cooking_steps,
    approximate_nutrition_per_serving,
} = foodDetails;

    console.log(foodDetails)

    console.log(foodId,"erkerj")
    return (
      <div className="min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-info-content rounded-2xl shadow-lg p-6 space-y-6">
        
        {/* 🔝 Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold">{data?.dish_name || "no name found"}</h1>
          <p className="text-gray-500 capitalize">{category}</p>
          <p className="text-green-600 font-semibold text-lg">৳ {price}</p>
        </div>

        {/* 🖼️ Image */}
        <div className="flex justify-center">
          <Image
            className={`${
              category === "beverage"? 'rounded-none':category ==="burger"? '':'rounded-full shadow-lg shadow-black'
            }`}
            src={image_link}
            alt={dish_name}
            width={300}
            height={300}
          />
        </div>

        {/* 🌍 Origin */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Origin & Popularity :</h2>
          <p className="text-secondary-content">{origin_and_popularity}</p>
        </div>

        {/* 🥦 Ingredients */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Ingredients :</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
            {main_ingredients?.map((item, index) => (
              <li key={index} className="bg-gray-100 px-3 py-2 rounded-md">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* <div>
            { possible_price_in_dhaka.home_cooked}
        </div> */}

        {/* 🔥 Nutrition */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Nutrition :</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(approximate_nutrition_per_serving || {}).map(
              ([key, value]) => (
                <div
                  key={key}
                  className="bg-gray-100 p-3 rounded-lg text-center"
                >
                  <p className="font-semibold capitalize text-secondary">{key}</p>
                  <p className="text-gray-600">{value}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* 👨‍🍳 Steps */}
        <div>
          <h2 className="text-xl font-semibold mb-2"> Cooking Steps</h2>
          <ol className="space-y-3 text-gray-700">
            {cooking_steps?.map((step, index) => (
              <li
                key={index}
                className="bg-gray-100 p-3 rounded-md flex gap-3"
              >
                <span className="font-bold">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
    );
};

export default FoodDetails;