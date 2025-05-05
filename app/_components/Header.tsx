import { Section } from "./Section";
import { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button";
import { GithubIcons } from "./icons/GithubIcons";
import { Mail_Icons } from "./icons/Mail_Icons";
import { LinkedinIcons } from "./icons/LinkedinIcons";
import { CvIcons } from "./icons/CvIcons";

export const Header = () => {
    return (
        <header className="w-full px-6 py-4 shadow-md backdrop-blur-sm flex items-center justify-between sticky top-0 z-50">
            <div>
                <Button variant="ghost"
    className="text-xl font-semibold transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-gray-400/40">
                    <a href="#top" aria-label="Home">Ely Wandeu</a>
                </Button>
            </div>
            <div className="flex gap-4">
                <Button size="icon" variant="ghost" 
                    className="rounded-full object-cover shadow transition-transform duration-300 ease-in-out hover:scale-130"
                asChild>
                    <a href="mailto:ely.wandeu@hotmail.com" aria-label="Email">
                        <Mail_Icons size={30}
                         />
                    </a>
                </Button>
                <Button size="icon" variant="ghost" 
                    className="rounded-full object-cover shadow transition-transform duration-300 ease-in-out hover:scale-130"
                asChild>
                    <a href="https://github.com/ElyGith" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <GithubIcons size={30} />
                    </a>
                </Button>
                <Button size="icon" variant="ghost"
                    className="rounded-full object-cover shadow transition-transform duration-300 ease-in-out hover:scale-200"
                asChild>
                    <a href="https://www.linkedin.com/in/ely-wandeu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <LinkedinIcons size={14}  />
                    </a>
                </Button>
                <Button size="icon" variant="ghost"
                    className="rounded-full object-cover shadow transition-transform duration-300 ease-in-out hover:scale-130"
                asChild>
                    <a href="CV_Ely.pdf" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <CvIcons size={30}  />
                    </a>
                </Button>
            </div>
        </header>

    );
};
