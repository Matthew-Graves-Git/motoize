import Navbar from "../../Components/Navbar";
import About from "./About";
import Bar from "./Bar";
import Hero from "./Hero";
import Info from "./Info";
import Tools from "./Tools";

const Landing = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Tools/>
            <Bar/>
            <Info/>
        </>    
    );
}
 
export default Landing;