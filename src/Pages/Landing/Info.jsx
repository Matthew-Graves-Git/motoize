import { useState } from "react";
import familyImg from "../../Assets/family-info.webp";
import familyOutdoorImg from "../../Assets/family-info2.webp";
const Info = () => {
    const [currentImg, setCurrentImg] = useState(familyImg);

    const handleHover = (e) => {
        const id =  (e.target.tagName.toLowerCase() === 'span') ? e.target.id : e.target.parentElement.id;
        if(id === "1"){
            setCurrentImg(familyImg);
        }
        if(id === "2"){
            setCurrentImg(familyOutdoorImg);
        }
    }

    return ( 
        <section className="bg-white h-full w-screen relative z-20">
            <div className="py-40 overflow-clip">
                <img className="h-[28rem] lg:w-[70%] w-auto object-cover mx-auto lg:px-8 mb-20" src={currentImg} alt="" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 lg:w-[70%] w-auto mx-auto">
                    <div  onMouseOver={(e)=>handleHover(e)} className="group">
                    <span id="1" className="flex flex-col gap-6 border-t-2 py-6 group-hover:border-green-950 group-hover:scale-105 cursor-pointer transition duration-500" >
                        <h3 className="font-bold">
                            Reasons to Love Ascent
                        </h3>
                        <p>
                        The 2025 Ascent is the largest Subaru SUV ever, 
                        with flexible 3-row seating and premium comfort available
                        in seven-seater or eight-seater models. 
                        With up to 153.2 cubic feet of passenger space, 
                        the Ascent has more room than the Toyota Highlander and the Mazda CX-902. 
                        Take family adventures to exciting new places with standard Symmetrical All-Wheel Drive. 
                        The Toyota Highlander, Kia Telluride, Honda Pilot, 
                        and Hyundai Palisade can’t match that kind of standard capability
                        </p>
                        <p>
                            Link Here
                        </p>
                    </span>
                    </div>
                    <div  onMouseOver={(e)=>handleHover(e)} className="group">
                    <span id="2"  className="flex flex-col gap-6 border-t-2 py-6 group-hover:border-green-950 group-hover:scale-105 cursor-pointer transition duration-500" >
                        <h3 className="font-bold">
                            Reasons to Love Ascent
                        </h3>
                        <p>
                        The 2025 Ascent is the largest Subaru SUV ever, 
                        with flexible 3-row seating and premium comfort available
                        in seven-seater or eight-seater models. 
                        With up to 153.2 cubic feet of passenger space, 
                        the Ascent has more room than the Toyota Highlander and the Mazda CX-902. 
                        Take family adventures to exciting new places with standard Symmetrical All-Wheel Drive. 
                        The Toyota Highlander, Kia Telluride, Honda Pilot, 
                        and Hyundai Palisade can’t match that kind of standard capability
                        </p>
                        <p>
                            Link Here
                        </p>
                    </span>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Info;