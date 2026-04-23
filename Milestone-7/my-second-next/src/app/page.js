import Link from "next/link";

export default function Home() {
  console.log("I am home page")
  return (
  <>
   <Link href={`/foods`}  className="min-h-[60vh] flex items-center justify-center ">
    <h1 className="text-2xl btn btn-success text-black hover:shadow-2xl hover:shadow-cyan-200 transform hover:translate-y-1 hover:scale-105 animate-bounce hover:animate-none ">Go to Foods page</h1>
   </Link>
  </>
  );
}
