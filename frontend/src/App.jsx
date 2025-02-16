// import { useState } from 'react'
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Events from "./components/Events"
import Hackathons from "./components/Hackathons"
import Footer from "./components/Footer"

const App = () => {

  return(
    <main className="relative">
      <header className="bg-indigo-800 p-2">
        <Nav />
      </header>
      <section className="">
        <Hero />
      </section>
      <section className="flex flex-row pt-[10rem] px-[5rem]">
        <section className="flex flex-col align-middle gap-[4rem]">
          <nav className="flex flex-row justify-between px-[2rem]">
            <span className="text-indigo-950 text-5xl font-semibold">Events</span>
            <button className="bg-indigo-950 py-2 px-6 text-white">Filter</button>
          </nav>
          <Events />
        </section>
        <section>
          <Hackathons />
        </section>
      </section>
      <footer className="pt-12">
        <Footer />
      </footer>
    </main>
  )
}

export default App
