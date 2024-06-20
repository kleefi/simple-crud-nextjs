import EditForm from "@/components/edit-form";
import { getImagesById } from "@/lib/data";
import { notFound } from "next/navigation";

const EditPage = async ({ params }: { params: { id: string } }) => {
  const data = await getImagesById(params.id);
  if (!data) return notFound;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-sm bg-white p-8 shadow">
        <h1 className="mb-5 text-2xl font-bold">Update image</h1>
        <EditForm data={data} />
      </div>
    </div>
  );
};

export default EditPage;
