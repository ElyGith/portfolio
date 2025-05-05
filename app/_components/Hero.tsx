import { Section } from "./Section";
import Image from "next/image";
import { PulseBeamsDemo } from "./PulseBeams";


 export const Hero = () => {
    return (
        <Section className="items-center">
            <div className="flex flex-col items-center justify-center gap-4 p-4">
            <h1>Bienvenue sur mon portfolio</h1>
            <h3>Je suis un développeur passionné par la data et la finance !</h3>
            <p>Je suis ravi de vous accueillir sur mon portfolio. Vous y trouverez des 
                infos
                 sur moi et des liens vers mes 
                 réseaux
                .</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-4">
                <img src="next.svg"
                 width={200}
                height={200}
                alt="Photo" 

                />
            </div>

            <PulseBeamsDemo/>
            </Section>
            )};
        

