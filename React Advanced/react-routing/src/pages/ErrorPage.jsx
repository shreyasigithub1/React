import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function ErrorPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/"),3000); //navigate(-1) to go to the previous page only //or -2    
  },[]);
  return (
    <>
      <main>
        <h2>Something went wrong</h2>
      </main>
    </>
  );
}
