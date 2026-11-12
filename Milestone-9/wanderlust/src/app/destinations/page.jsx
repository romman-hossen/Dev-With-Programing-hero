import DestinationCard from "@/components/DestinationCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DestinationsPage = async () => {
    const {token} = await auth.api.getToken({
        headers: await headers()
  }
    );
    console.log(token, "this is token");
    const res = await fetch(`${process.env.SERVER_URL}/destination`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    );
    console.log(res);

    const destinations = await res.json();
    console.log(destinations);
    return (
        <div className="my-30 max-w-7xl mx-auto">
            <h1 className="text-3xl">Explore All Destinations </h1>
            <h3 className="text-xl">Find your perfect travel experience from our curated collection</h3>
            <div className="grid grid-cols-4 gap-4 p-4">
                {
                    destinations.map(((destination) => <DestinationCard key={destination._id} destination={destination}></DestinationCard>))
                }

            </div>
            
        </div>
    );
};
export default DestinationsPage;