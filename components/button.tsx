"use client";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import Link from "next/link";
import { deleteImage } from "@/lib/action";

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={clsx(
        "w-full rounded-sm bg-blue-700 py-2.5 pt-4 text-base font-medium text-white hover:bg-blue-600",
        {
          "cursor-progress opacity-50": pending,
        },
      )}
      type="submit"
      disabled={pending}
    >
      {label === "upload" ? (
        <>{pending ? "Uploading..." : "Upload"}</>
      ) : (
        <>{pending ? "Updating..." : "Update"}</>
      )}
    </button>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`edit/${id}`}
      className="w-full rounded-bl-md bg-gray-50 py-3 text-center text-sm hover:bg-gray-100"
    >
      Edit
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteImageWithId = deleteImage.bind(null, id);
  return (
    <form
      action={deleteImageWithId}
      className="w-full rounded-br-md bg-gray-50 py-3 text-center text-sm hover:bg-gray-100"
    >
      <DeleteBtn />
    </form>
  );
};

const DeleteBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
};
