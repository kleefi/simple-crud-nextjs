import Card from "@/components/card";
import Link from "next/link";
import { getImages } from "@/lib/data";

export default async function Home() {
  const images = await getImages();
  return (
    <div className="mx-auto max-w-screen-lg py-14">
      <div className="flex items-end justify-between">
        <h1 className="text-4xl font-bold">Latest Images</h1>
        <Link
          href="/create"
          className="bg-blue-600 px-6 py-3 text-white hover:to-blue-700"
        >
          upload new image
        </Link>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {images.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
