import Image from "next/image";

const FoodData = ({foodData}) => {
    const {id,dish_name,category,price,image_link,origin_and_popularity:popularity} = foodData;
    // console.log(foodData.id,foodData.,"food data")
    console.log(dish_name)
    return (
     <div className="card bg-base-100 shadow-sm py-6 relative">
  <figure className="pb-6">
    <Image className={`max-w-50 max-h-60 ${dish_name == "beverage"? 'rounded-none':dish_name ==="burger"? '':'rounded-full'}  shadow-lg shadow-black `}src={image_link} alt={dish_name } width={300} height={500}/> 
   
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl 	text-secondary-content">
      {dish_name}
    </h2>
       <div className={`badge  ${category === "dish" ?'animate-pulse badge-success': category === undefined ? 'animate-none badge-error': 'animate-bounce badge-warning'} absolute top-4 right-4`}>{category ||"Unknown"}</div>
    <p className="text-xl">Price : <span className="text-success">$</span><span className="text-yellow-400">{price}</span></p>
    <h3 className="text-cyan-100">{popularity}</h3>
    <div className="card-actions mt-3">
      <div className="badge hover:badge-success badge-outline cursor-pointer">Show Details</div>
      <div className="badge hover:badge-info cursor-pointer badge-outline">Add to Cart</div>
    </div>
  </div>
</div>
    );
};

export default FoodData;