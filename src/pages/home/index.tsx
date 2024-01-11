import About from './about'
import Contact from './contact'
import Home from './home'
import Projects from './projects'


const Index = () => {

    console.log('trigger render all')

    return <>
        <Home />
        <About />
        <Projects />
        <Contact />
    </>
}

export default Index