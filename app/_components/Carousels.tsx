import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import * as React from "react"
import { Button } from "@/components/ui/button"

type Project = {
    title: string;
    description: string;
    link: string;
};
import projects from "@/public/projects.json" assert { type: "json" };


const typedProjects: Project[] = projects;


export function CarouselProjects() {

    return (
        <div id="projets" className="w-full px-4 py-12">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-6xl mx-auto"
            >
                <CarouselContent>
                    {typedProjects.map((project, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/3 flex"
                        >
                            <div className="p-4 w-full h-full">
                                <Card className="h-full flex flex-col justify-between min-h-[320px]">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{project.title}</CardTitle>
                                        <CardDescription className="text-sm text-gray-600">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="mt-auto">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-block w-full"
                                        >
                                            <Button
                                                variant="outline"
                                                className="w-full mt-4 transition hover:scale-[1.02]"
                                            >
                                                Voir le projet
                                            </Button>
                                        </a>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

