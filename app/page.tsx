import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import LearningCurve from './sections/LearningCurve'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Blogsection from './sections/BlogSection'


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <LearningCurve />
      <TechStack />
      <Blogsection/>
      <Contact />
    </>
  )
}