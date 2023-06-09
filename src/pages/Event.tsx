import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Sidebar } from "../components/Sidebar";

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        { slug ? <Video lessonSlug={slug}/> : <Video lessonSlug={"abertura-do-evento"}/>}
        <Sidebar />
      </main>
    </div>
  )
}