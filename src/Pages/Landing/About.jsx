import aboutImg from '../../Assets/about_img.jpg';
const About = () => {
    return ( 
        <div className='h-screen w-screen relative overflow-clip'>
            <img src={aboutImg} className='h-full w-screen object-cover object-[55%]' alt="" />
        </div>
     );
}
 
export default About;