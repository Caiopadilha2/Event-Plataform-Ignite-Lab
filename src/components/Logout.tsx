import { SignOut } from "phosphor-react";
import { useNavigate } from "react-router-dom";


export function Logout() {
  localStorage.removeItem("user");
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="flex items-center justify-center gap-1 hover:border border-gray-500 rounded "  
    >
      <SignOut size={22}/>
      Logout
    </button>
  )
}