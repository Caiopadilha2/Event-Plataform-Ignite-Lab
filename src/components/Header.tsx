import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full py-5 bg-gray-700 flex items-center justify-center border-b border-gray-600">
      <Logo />
    </header>
  )
}