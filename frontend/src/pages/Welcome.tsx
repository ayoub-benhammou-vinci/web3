import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl text-blue-800 font-semibold">
        Welcome to Your Expense Tracker 💰
      </h1>
      <p>
        Manage your expenses easily and keep track of your spending. <br />
        You can view all your expenses, add new ones, and analyze your data
        effortlessly.
      </p>
      
      <div className="flex flex-row justify-center gap-10">
      <button onClick={() => navigate("/add")}>Add new expenses </button>
      <button onClick={() => navigate("/list")}>View all expenses</button>
      </div>
    </div>
  );
};
