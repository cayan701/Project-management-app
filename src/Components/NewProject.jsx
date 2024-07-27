import Input from "./Input";

export default function NewProject() {
  return (
    <div className=" w-[55rem] p-8 bg-white rounded-lg shadow-md">
      <menu className="flex items-center justify-end space-x-4 mb-6">
        <li>
          <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400">
            Cancel
          </button>
        </li>
        <li>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Save
          </button>
        </li>
      </menu>
      <div className="space-y-4 py-10">
        <Input label="Title" className="w-full" />
        <Input label="Description" textarea={true} className="w-full" />
        <Input label="Due Date" className="w-full" />
      </div>
    </div>
  );
}
