import Header from "../components/Header"
import ProjectCard from "../components/ProjectCard"

// TODO: add a fade out linear gradient in front of grid pattern
function Home() {
  return (
    <>
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
    </>
  )
}

export default Home
