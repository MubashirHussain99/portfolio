import Image from 'next/image'
import Navbar from './component/navbar/Navbar'
import HomeView from './component/home/HomeView'
import AboutView from './component/about/AboutView'
import Experience_View from './component/experience-education/Experience_View'
import Project from './component/project/Project'
import Contact from './component/contact/Contact'

export default function Home() {
  return (
    <div class="bg-[url('../assets/particle.jpg')]">
      <Navbar/>
      <HomeView/>
      <AboutView/>
      <Experience_View/>
      <Project/>
      <Contact/>
    </div>
  )
}
