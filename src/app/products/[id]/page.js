import Button from "@/components/Button";
import Image from "next/image";

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const json = await res.json();

  return (
    <div className="w-[300px] lg:w-[600px] h-auto">
      <h2 className="m-5 text-2xl font-semibold underline">{`Product Detail for Product ${json.id}`}</h2>
      <div className="bg-gray-50 p-5 border-2 border-blue-400 m-5 rounded-lg">
        <h1 className="text-xl font-medium mb-3 pb-2 border-b border-blue-400">
          {json.title}
        </h1>
        <p>{json.description}</p>
        <Image
          src={json.image}
          alt={`Image of ${json.title}`}
          width={200}
          height={200}
          className="object-contain w-full h-auto max-w-[300px]"
        />
        <p className="p-2 text-lg font-semibold">Price: ${json.price}</p>
        <div className="flex justify-between">
          <Button variant="outline" text="Remove from Cart" />
          <Button text="Add to cart" />
          {/* <button className="bg-sky-200 text-black p-2">
            Remove from Cart
          </button>
          <button className="bg-sky-200 text-black p-2">Add to Cart</button> */}
        </div>
      </div>
    </div>
  );
}
