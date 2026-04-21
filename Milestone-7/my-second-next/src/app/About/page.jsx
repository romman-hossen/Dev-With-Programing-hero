import AboutItem from "@/component/AboutItem";
import { Suspense } from "react";

const AboutPage =() => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    // const data = await res.json();

    // console.log(data);

    const res = fetch ('https://jsonplaceholder.typicode.com/todos').then(res => res.json());
    console.log(res,"suspense data")
    
    // console.log("I am about page");

    return (
        <div>
    <Suspense fallback={<div>Loading...</div>}>


     <AboutItem res = {res} />
     </Suspense>

        </div>
    );
};

export default AboutPage;