export default function SelectedProject({ project }) {
  const formattedDate = new Date(project.dueDate);

  return (
    <div>
      <header>
        <div>
          <h2>{project.title}</h2>
          <button>Delete</button>
        </div>
        <p>Date</p>
        <p>Description</p>
      </header>
      TASks
    </div>
  );
}
