import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef(); // getting inputs FROM Input.jsx file.
  const description = useRef(); // same
  const dueDate = useRef(); // same

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation...

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className=" w-[55rem] p-8 bg-white rounded-lg shadow-md">
      <menu className="flex items-center justify-end space-x-4 mb-6">
        <li>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Save
          </button>
        </li>
      </menu>
      <div className="space-y-4 py-10">
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" textarea={true} />
        <Input ref={dueDate} label="Due Date" type="date" />
      </div>
    </div>
  );
}
