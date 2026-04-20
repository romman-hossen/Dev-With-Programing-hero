import Image from "next/image";
export const metadata = {
  title: 'This is home',
  description: 'This is blog page ',
}
export default function Home() {
  return (
   <>
   <h1 className="text-5xl">This is home</h1>
   </>
  );
}
