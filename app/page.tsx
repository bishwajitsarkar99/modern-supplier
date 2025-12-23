"use client";
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Card from "@/components/card/card";
import Flex from "@/components/flex/flex";
import Section from "@/components/section/section";
import Main from "@/components/main/main";
import Div from "@/components/div/div";
import Span from "@/components/span/span";
import AuthHeader from "@/components/header/header";

export default function LoginPage() {
  // scroll
  const [isScroll, setIsScroll] = React.useState(false);
  React.useEffect(() => {
    const chnageProperty = () => {
      if (window.scrollY >= 10) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
    window.addEventListener("scroll", chnageProperty);
    return () => window.removeEventListener("scroll", chnageProperty);
  }, []);


  return (
    <Section>
      <Section className={twMerge(
        "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full items-center",
        "font-sans dark:bg-black gap-0"
      )}>
        <AuthHeader className={`z-40  ${isScroll ? 'bg-[repeating-linear-gradient(315deg,#80808010_0,#80808050_1px,transparent_0,transparent_100%)] bg-size-[5px_5px] mask-size-[50%] mask-image-[radial-gradient(ellipse_100%_100%_at_20%_20%,#000_80%,transparent_100%)] w-full border border-neutral-200 text-gray-800 font-bold items-center fixed top-0 inset-shadow-sm' : 'bg-[repeating-linear-gradient(315deg,#80808010_0,#80808050_1px,transparent_0,transparent_100%)] bg-size-[5px_5px] mask-size-[50%] mask-image-[radial-gradient(ellipse_100%_100%_at_20%_20%,#000_80%,transparent_100%)] w-full h-auto border border-neutral-200 text-gray-800 font-bold items-center fixed top-0 inset-shadow-sm'}`} style={{ backgroundColor: 'white' }}>
          <Div className={twMerge(
            "text-sm md:text-xl lg:text-2xl xl:text-2xl pt-1",
            "text-gray-700 font-bold uppercase",
            "tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)] bg-linear-to-r from-emerald-800 to-indigo-400 text-transparent bg-clip-text"
          )}>
            <Div className={twMerge("ps-5 w-full h-16 flex justify-start items-center")}>
              <Span>Logo</Span>
            </Div>
          </Div>
        </AuthHeader>
        <Main className={twMerge(
          "min-h-screen w-full",
        )}>
          <Flex justifycontent="between" items="center">
            <Card className={twMerge("w-full mx-30 my-30 shadow-sm hover:shadow-sm rounded-md aspect-video")}>
              Home
            </Card>
          </Flex>
        </Main>
      </Section>
    </Section>
  );
}
