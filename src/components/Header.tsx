import { Logo } from "./Logo";
import { Logout } from "./Logout";

export function Header() {

  const username = localStorage.getItem("user");
  return (
    <header className="w-full py-5 bg-gray-700 flex items-center justify-evenly border-b border-gray-600">
      <Logo />
      <span className="">{`Olá, ${username}!`}</span>
      <Logout />
    </header>
  )
}