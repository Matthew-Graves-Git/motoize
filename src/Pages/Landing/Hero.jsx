import heroImg from '../../Assets/hero_img.jpg';
import InfoContainer from '../../Components/InfoContainer';
const Hero = () => {
    return ( 
        <div className='h-screen w-screen sticky top-0 overflow-clip'>
            <InfoContainer/>
            <img src={heroImg} className='h-full w-screen object-cover object-[30%]' alt="" />
        </div>
     );
}
 
export default Hero;