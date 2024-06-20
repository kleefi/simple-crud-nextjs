import CreateForm from "@/components/create-form";

function CreatePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-sm bg-white p-8 shadow">
        <h1 className="mb-5 text-2xl font-bold">Upload image</h1>
        <CreateForm />
      </div>
    </div>
  );
}

export default CreatePage;
