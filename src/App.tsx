import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import type { ITechnologyType } from "./types/TechnologyType"

const technologiesfetch = async (): Promise<ITechnologyType[]> => {
  const res = await fetch('/technologies.json')
  const data = await res.json()
  return data
}
function App() {


  return (
    <>
      <div className="container mx-auto">

        <Navbar />
        <Hero />

      </div>

    </>
  )
}

export default App
