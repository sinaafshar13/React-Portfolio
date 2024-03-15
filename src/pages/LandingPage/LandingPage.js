import About from "../../components/About/About";
import Header from "../../components/Header/Header";
import Home from '../../components/Home/Home'
import Services from "../../components/Services/Services";
import Skills from "../../components/Skills/Skills";
import './LandingPage.css'

function LandingPage(){
    return (
        <>
        <Header />
        <main className="main">
            <Home />
            <About />
            <Skills />
            <Services />
        </main>
        </>
    )
}
export default LandingPage;