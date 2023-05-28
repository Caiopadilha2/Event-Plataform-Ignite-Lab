import { Routes, Route } from "react-router-dom";
import { Event } from "./pages/Event";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Olá</h1>}/>
      <Route path="/event" Component={Event} />
    </Routes>
  );
}