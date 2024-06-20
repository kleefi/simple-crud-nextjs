"use client";
import { updateImage } from "@/lib/action";
import React from "react";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/button";
import type { Upload } from "@prisma/client";

const EditForm = ({ data }: { data: Upload }) => {
  const [state, formAction] = useFormState(
    updateImage.bind(null, data.id),
    null,
  );
  return (
    <form action={formAction}>
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="title"
          defaultValue={data.title}
          className="w-full rounded-sm border border-gray-400 px-4 py-2"
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.error?.title}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="file"
          name="image"
          className="w-full border-gray-400 file:mr-4 file:cursor-pointer file:rounded-sm file:border-0 file:bg-gray-200 file:px-4 file:py-2 hover:file:bg-gray-300"
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.error?.image}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <SubmitButton label="update" />
      </div>
    </form>
  );
};

export default EditForm;
