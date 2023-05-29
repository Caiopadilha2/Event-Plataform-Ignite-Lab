import { Routes, Route } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscriber";

export function Router() {
  return (
    <Routes>
      <Route path="/" Component={Subscribe}/>
      <Route path="/event" Component={Event} />
      <Route path="/event/lesson/:slug" Component={Event} />
    </Routes>
  );
}