import Navbar from "./Navbar"
import Header from "./Header"
import Links from "./Links"
import ProjectCard from "./ProjectCard"
import Footer from "./Footer"

function App() {


  return (
    <>
      <div id="wrapper" className="mx-auto max-w-4xl py-10 px-5 font-body">
        <Navbar />
        <div className="mx-auto max-w-3xl space-y-12 md:py-24">
          <Header />
          <Links />
              <div className="grid grid-cols-2 gap-3">
                <ProjectCard 
                  name="website-v2" 
                  descr="My attempt at remaking my website using react and vite" 
                  link="https://github.com/jormy/website-v2"/>

                <ProjectCard 
                  name="old-website" 
                  descr="My first site ever (as you can probably tell from the code)" 
                  link="https://github.com/jormy/jormy.github.io"/>
                  
                <ProjectCard/>
                <ProjectCard/>
              </div>
            </div>
          <Footer />
      </div>
    </>
  )
}

export default App
