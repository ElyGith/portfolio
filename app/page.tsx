import Image from "next/image"
import {Header} from "./_components/Header";
import { Footer } from "./_components/Footer";
import {CarouselProjects} from "./_components/Carousels";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { Hero } from "./_components/Hero";
import { Section } from "./_components/Section";
import { Contact } from "./_components/Contact";
import { About } from "./_components/About";




export default function Home() {
  return (
   
      <main className="min-h-screen flex flex-col">
      <Header/>
      <Hero/>
      <Section className="flex flex-col items-center gap-6 p-6">
       <About/>
        <CarouselProjects />
      </Section> 

     <Footer/>
      </main>
   
  );
}
