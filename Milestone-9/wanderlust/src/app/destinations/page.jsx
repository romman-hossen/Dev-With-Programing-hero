import DestinationCard from "@/components/DestinationCard";

const DestinationsPage = async () => {
    const res = await fetch('http://localhost:5000/destination');
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