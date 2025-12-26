"use client"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { twMerge } from "tailwind-merge"
import HeaderProfile from "./ui/header-profile"

import {
  InputGroup,
  InputGroupAddon,

} from "@/components/ui/input-group"
import { LoaderIcon, SearchIcon } from "lucide-react"
import SecondaryButton from "./button/button"
import Input from "./input/input"
import Div from "./div/div"

export function SiteHeader() {
  return (
    <header className={twMerge(
      "flex  h-(--header-height) shrink-0 items-center gap-2 border-b border-b-gray-200 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)",
      "bg-white bg-[repeating-linear-gradient(315deg,#80808010_0,#80808050_1px,transparent_0,transparent_60%)] bg-size-[5px_5px]",
      "mask-size-[50%] mask-image-[radial-gradient(ellipse_100%_100%_at_20%_20%,#000_80%,transparent_100%)]",
      "border border-[rgba(0,128,255,0.1)] rounded-sm",
      "fixed z-40 top-0 inset-shadow",
      )}>
      <div className="w-full grid grid-cols-4 justify-between gap-1 pb-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="ml-0 [&_svg:not([class*='size-'])]:size-8 cursor-pointer" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-8"
        />
        <div></div>
        <div className="flex justify-end items-end">
          <div className="flex w-full justify-between items-center">
            <InputGroup className="rounded-l-full shadow-sm w-300">
              <Input className={twMerge(
                "px-2 py-1 bg-transparent focus:ring-0 focus:outline-none",
                "border-none"
              )} placeholder="Search..." />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">
                <LoaderIcon className="animate-spin hidden" />
              </InputGroupAddon>
            </InputGroup>
            <SecondaryButton className="rounded-r-full p-2 w-68">
              <span className="me-8">Search</span>
            </SecondaryButton>
          </div>
          <div className="hidden sm:flex max-w-20 h-full ms-5">
            <div
              className="size-4 bg-white shadow-sm text-accent-foreground rounded-full font-extrabold cursor-pointer border border-neutral-100"
            >
              B
              {/* <HeaderProfile user={{
                name: "Bishwajit Sarkar",
                email: "bishwajitsarker99@gmail.com",
                avatar: "/facicon.svg",
              }} /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
