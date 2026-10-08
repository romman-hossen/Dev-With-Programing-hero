"use client";
import { useRouter } from "next/navigation";
import { BiLeftArrowAlt } from "react-icons/bi";

const BackBtn = () => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-0.5 hover:cursor-pointer" onClick={() => router.back()}>
      <BiLeftArrowAlt className="text-xl" />
      Back to Destinations
    </div>
  );
};

export default BackBtn;
