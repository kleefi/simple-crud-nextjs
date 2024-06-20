"use client";
import { uploadImage } from "@/lib/action";
import React from "react";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/button";

const CreateForm = () => {
  const [state, formAction] = useFormState(uploadImage, null);
  return (
    <form action={formAction}>
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="title"
          id=""
          placeholder="isi judul"
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
          id=""
          className="w-full border-gray-400 file:mr-4 file:cursor-pointer file:rounded-sm file:border-0 file:bg-gray-200 file:px-4 file:py-2 hover:file:bg-gray-300"
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.error?.image}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <SubmitButton label="upload" />
      </div>
    </form>
  );
};

export default CreateForm;
