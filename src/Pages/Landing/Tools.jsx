import { IoIosSearch ,IoIosCar, } from "react-icons/io";
import { FaGears } from "react-icons/fa6";
import { IoSparklesSharp } from "react-icons/io5";
import chain from '../../Assets/key.webp';
import person from '../../Assets/person.jpg';
import tire from '../../Assets/tire.jpg';
import wheel from '../../Assets/wheel.webp';

const Tools = () => {
    const tools = [
        {
            title: "All Vehicles",
            icon: <IoIosCar />,
            link: "/vehicles",
            img: chain
        },
        {
            title: "Build Your Own",
            icon: <FaGears />,
            link: "/vehicles",
            img: tire
        },
        {
            title: "Special Offers",
            icon: <IoSparklesSharp />,
            link: "/vehicles",
            img: person
        },
        {
            title: "View Inventory",
            icon: <IoIosSearch />,
            link: "/vehicles",
            img: wheel
        },
        
    ]
    return ( 
        <section className="bg-white h-full w-screen relative overflow-clip flex flex-col gap-12 justify-center items-center  z-20 p-20 pb-40">
            <h2 className="text-xl font-bold text-gray-500">Shopping Tools</h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
                
                {tools.map((tool, index) => (
                    
                    <li key={index} className="flex flex-col items-center justify-end relative overflow-clip group h-[500px] text-white font-semibold shadow-sm shadow-slate-300 cursor-pointer">
                        <span className="flex flex-col items-center mx-10">
                            <span className="text-4xl z-[21] mb-2 group-hover:-translate-y-8 duration-500" >{tool.icon}</span>
                            <h3 className="text-xl z-[21] mb-8 w-[8ch] text-center group-hover:-translate-y-8 duration-500">{tool.title}</h3>
                        </span>
                        {
                        (index === 1 || index === 2) ?
                        <img className="object-cover object-[17%]  absolute left-1/2 top-0 -translate-x-1/2 h-full group-hover:scale-110 duration-1000" src={tool.img} alt={tool.title} />
                        :
                        <img className="object-cover absolute left-1/2 top-0 -translate-x-1/2 h-full group-hover:scale-110 duration-1000" src={tool.img} alt={tool.title} />
                        }
                    </li>
                ))}

            </ul>
        </section>
     );
}
 
export default Tools;