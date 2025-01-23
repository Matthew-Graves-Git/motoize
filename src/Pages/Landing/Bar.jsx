import { IoPricetagOutline } from "react-icons/io5";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TbReportMoney } from "react-icons/tb";
import { MdOutlineCarRepair } from "react-icons/md";

const Bar = () => {
    const reasons = [
        {
            title: "Special Financing Offers",
            description: "Our stress-free financial department can fins financial solutions to save you money.",
            icon:<TbReportMoney/>,
        },
        {
            title: "Trusted Car Dealers",
            description: "Over 4 million cars sold, we have a proven track record of customer satisfaction.",
            icon:<VscWorkspaceTrusted/>,
        },
        {
            title: "Best Price Guarantee",
            description: "Find a lower price? We'll refund you 100% of the difference.",
            icon:<IoPricetagOutline/>,
        },
        {
            title: "Expert Service & Repair",
            description: "Get your car repaired by our experts with years of experience.",
            icon:<MdOutlineCarRepair/>,
        }
    ]

    return ( 
        <section className="bg-gray-200 py-28 z-20 relative w-screen h-full">
            <h3 className="w-[70%] mx-auto mb-10 text-2xl font-bold">Why Choose Us?</h3>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-[70%] mx-auto">
                {reasons.map(({title,description,icon},index)=>{
                    return(
                        <li className="flex flex-col gap-4" key={index}>
                            <p className="text-3xl text-green-600">{icon}</p>
                            <h4 className="font-semibold">{title}</h4>
                            <p className="lg:w-3/4">{description}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
     );
}
 
export default Bar;