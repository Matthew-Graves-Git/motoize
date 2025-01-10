import heroImg from '../../Assets/hero_img.jpg';
const Hero = () => {
    return ( 
        <div className='h-screen w-screen sticky top-0 -z-10 overflow-clip'>
            <img src={heroImg} className='h-full w-screen object-cover object-[30%]' alt="" />
        </div>
     );
}
 
export default Hero;