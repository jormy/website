import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Links from "./components/Links"
import ProjectCard from "./components/ProjectCard"
import Footer from "./components/Footer"
import Cursor from "./components/Cursor"

// TODO: add a fade out linear gradient in front of grid pattern
function App() {
  return (
    <>
      <Cursor />
      <div className="min-h-screen bg-midnight absolute inset-0 bg-[linear-gradient(to_right,#191d24_1px,transparent_1px),linear-gradient(to_bottom,#191d24_1px,transparent_1px)] bg-[size:75px_75px]"> 
        
        <div id="wrapper" className="mx-auto max-w-4xl py-10 px-8 font-body">
          <Navbar />
          <div className="mx-auto max-w-3xl py-24">
            <Header />
            <Links />
              <div className="grid grid-cols-2 gap-4">
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
      </div>
    </>
  )
}

export default App
