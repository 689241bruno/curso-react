import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-300 p-6">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default TaskPage;
