import { SignOut } from "phosphor-react";
import { useNavigate } from "react-router-dom";


export function Logout() {
  const navigate = useNavigate();
  
  function logout() {
    localStorage.removeItem("user");
    navigate('/')
  }

  return (
    <button
      onClick={logout}
      className="flex items-center justify-center gap-1 hover:border border-gray-500 rounded "  
    >
      <SignOut size={22}/>
      Logout
    </button>
  )
}