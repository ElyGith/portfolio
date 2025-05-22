import { Section } from "./Section";
import Image from "next/image";
import { PulseBeamsDemo} from "./PulseBeams";


 export const Hero = () => {
    return (
        <Section className="items-center">
            <div className="flex flex-col items-center justify-center gap-4 p-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-outfit font-bold tracking-wider text-cream drop-shadow-lg">
ELY WANDEU                </h1>
<br/>
                <h3 className="text-shadow-lg md:text-2xl font-medium">
                    Développeur passionné par le web et la data 💻📊
                </h3>
               
            </div>
           
            <PulseBeamsDemo />



            </Section>

            )};
        

