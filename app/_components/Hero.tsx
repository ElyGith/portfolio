import { Section } from "./Section";
import Image from "next/image";
import { PulseBeamsDemo} from "./PulseBeams";


 export const Hero = () => {
    return (
        <Section className="items-center">
            <div className="flex flex-col items-center justify-center gap-4 p-4">
                <h1 className="text-2xl md:text-5xl font-extrabold text-slate-100 leading-tight">
                    Bienvenue sur mon portfolio
                </h1>
                <h3 className="text-xl md:text-2xl text-slate-300 font-medium">
                    Développeur passionné par le web et la data 💻📊
                </h3>
                <p className="text-base md:text-lg text-slate-400 leading-relaxed">
                    Je suis ravi de vous accueillir ici. Vous trouverez des informations sur mon parcours, mes projets, et des liens vers mes réseaux !
                </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-4">
                <Image
                    width={200}
                    height={200}
                    src="/next.svg"
                    alt="Photo"
                />
            </div>
            <PulseBeamsDemo />



            </Section>

            )};
        

