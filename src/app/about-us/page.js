import Link from "next/link";

export const metadata = {
  title: "About Karmine",
  description: "Learn more about the beautiful lady! Hehehe >_<",
};

const Page = () => {
  return (
    <div className="flex flex-col gap-5 m-5">
      <p>This is About Us Page</p>
      <Link
        href={"/about-us/partners"}
        className="py-1 w-fit px-3 bg-sky-300 border-2 rounded-lg border-sky-500"
      >
        View Our Partners
      </Link>
    </div>
  );
};

export default Page;
