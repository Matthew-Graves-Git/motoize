import aboutImg from '../../Assets/about_img.jpg';
import InfoContainer from '../../Components/InfoContainer';
const About = () => {
    return ( 
        <div className='z-10 h-screen w-screen sticky top-0 overflow-clip '>
            <InfoContainer/>
            <img src={aboutImg} className='h-full w-screen object-cover object-[55%]' alt="" />
        </div>
     );
}
 
export default About;