import Image from "next/image";
import { DeleteButton, EditButton } from "@/components/button";
import type { Upload } from "@prisma/client";

const Card = ({ data }: { data: Upload }) => {
  return (
    <div className="max-w-sm rounded-md border border-gray-200 shadow">
      <div className="relative aspect-video">
        <Image
          src={data.image}
          alt={data.title}
          fill
          priority
          sizes="(max-width:768)100vw, (max-width:1200) 50vw, 33vw"
          className="rounded-t-md object-cover"
        />
      </div>
      <div className="p-5">
        <h2 className="truncate text-2xl font-bold text-gray-900">
          {data.title}
        </h2>
      </div>
      <div className="flex items-center justify-between">
        <EditButton id={data.id} />
        <DeleteButton id={data.id} />
      </div>
    </div>
  );
};

export default Card;
