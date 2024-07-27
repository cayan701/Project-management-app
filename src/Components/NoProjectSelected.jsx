import img from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white rounded-lg shadow-md">
      <img src={img} alt="No projects" className="w-1/3 mb-6" />
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        No project selected
      </h2>
      <p className="text-gray-600 mb-4">Select a project or create a new one</p>
      <p>
        <Button onClick={onStartAddProject}>Create a project</Button>
      </p>
    </div>
  );
}
