import Counter from "@/components/Counter";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="m-5">
      <h1 className="text-xl font-bold underline mb-5">My Shop</h1>
      <p className="text-lg mb-5">Welcome to my Shop.</p>
      <div className="flex gap-5">
        <Link
          href={"./products"}
          className="bg-sky-300 text-black p-2 rounded border-2 border-sky-500"
        >
          View All Products
        </Link>
        <Counter />
      </div>
    </main>
  );
}
