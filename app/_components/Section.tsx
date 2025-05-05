import { PropsWithChildren } from "react";
import {cn} from "@/lib/utils";

export const Section = ( props : PropsWithChildren<{className?:string}>) => {
    return (
        <section className={cn("w-full max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto py-8 sm:py-12",props.className)}>
            {props.children}
        </section>
    );
};