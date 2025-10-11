import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <>
      <p>Welcome !</p>
      <button onClick={() => navigate("/add")}>Add new expenses </button>
      <button onClick={() => navigate("/list")}>View all expenses</button>
    </>
  );
};
