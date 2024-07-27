export default function ProjectSidebar() {
  return (
    <aside className="w-64 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Your Projects</h2>
      <div className="mb-6">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          + Add project
        </button>
      </div>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {/* Replace with actual project items */}
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </aside>
  );
}
