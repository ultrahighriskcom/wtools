import Image from "next/image";
import Search from "./components/search";

export default function Home() {
  return (
    <>
      <div className="mb-4">
        <h2 className="text-neutral-700 text-lg font-semibold mb-2">
          Text
        </h2>
        <div className="p-10 bg-neutral-50 rounded-md">
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-neutral-700 text-lg font-semibold mb-2">
          Image
        </h2>
        <div className="p-10 bg-neutral-50 rounded-md">
        </div>
      </div>
    </>
  );
}
