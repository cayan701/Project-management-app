import Button from "./Button";

export default function ProjectSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="w-64 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Your Projects
      </h2>
      <div className="mb-6">
        <Button
          onClick={onStartAddProject}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-150"
        >
          + Add project
        </Button>
      </div>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="text-left w-full px-2 py-1 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition duration-150">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
