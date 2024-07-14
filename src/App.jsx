import Navbar from "./components/Navbar"
import Header from "./components/Header"
import ProjectCard from "./components/ProjectCard"
import Footer from "./components/Footer"
import Cursor from "./components/Cursor"

// TODO: add a fade out linear gradient in front of grid pattern
function App() {
  return (
    <>
      <Cursor />
      <div className="min-h-screen bg-denim-950 absolute inset-0 bg-[linear-gradient(to_right,#191d24_1px,transparent_1px),linear-gradient(to_bottom,#191d24_1px,transparent_1px)] bg-[size:75px_75px]"> 
        
        <div id="wrapper" className="mx-auto max-w-4xl py-10 px-8 font-body text-denim-300">
          <Navbar />
          <div className="mx-auto max-w-3xl py-24">
            <Header />
              <div className="grid grid-cols-2 gap-4">
                <ProjectCard 
                  name="website-v2" 
                  descr="attempt at creating a website using reactjs. I hate js so idk why i did this" 
                  link="https://github.com/jormy/website-v2"/>

                <ProjectCard 
                  name="old-website" 
                  descr="My first site ever (as you can probably tell from the code)" 
                  link="https://github.com/jormy/jormy.github.io"/>
                    
                <ProjectCard 
                  name="future-project" 
                  descr="ill add more projects here as i make them" 
                  link="https://github.com/jormy"/>

                <ProjectCard 
                  name="future-project" 
                  descr="i swear ill do something soon i promise" 
                  link="https://github.com/jormy"/>
              </div>
            </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
