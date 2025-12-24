"use client"

import {
  IconDots,
  IconFolder,
  IconShare3,
  IconTrash,
  type Icon,
} from "@tabler/icons-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion} from "framer-motion";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Div from "./div/div"
import Span from "./span/span"

export function NavDocuments({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
    group?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const { state, isMobile } = useSidebar()
  const isCollapsed = state === "collapsed" && !isMobile

  return (
    <SidebarGroup>
      <SidebarGroupLabel className={twMerge(
        "font-medium text-sm text-emerald-600 group-hover:text-emerald-700"
      )}>Documents</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              {isCollapsed ? (
                // COLLAPSED MODE: icon-only top-level button
                <SidebarMenuButton tooltip={item.title} className="justify-center p-2">
                  {item.icon ? (
                    <item.icon className="size-4 text-gray-500" />
                  ) : (
                    <span className="size-4 inline-block" /> // fallback to keep layout
                  )}
                </SidebarMenuButton>
              ) : (
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className={twMerge(
                      "peer/menu-button overflow-hidden rounded-md p-2 text-left outline-hidden ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-normal data-[state=open]:hover:bg-sidebar-accent group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 hover:bg-sidebar-accent h-8 text-sm cursor-pointer",
                      "hover:bg-white hover:bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] hover:bg-size-[5px_5px] mask-size-[50%] hover:animate-[rotatedGrid_6s_linear_infinite]",
                      "hover:no-underline",
                    )}>
                      <Div className="flex w-full items-center gap-2 text-accent-foreground text-sm group">
                        {item.icon && <item.icon className="size-4 text-gray-500 group-hover:text-orange-400 group-hover:transform-3d group-hover:transition group-hover:duration-200" />}
                        <Span className="text-gray-700 group-hover:text-gray-800 group-hover:transform-3d group-hover:transition group-hover:duration-200">
                          {item.title}
                        </Span>
                      </Div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Div className="tree-root pl-4">
                        <motion.ul
                          className="tree-root tree-list pl-4"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: {
                              transition: {
                                staggerChildren: 0.05,
                                delayChildren: 0.2,
                              },
                            },
                            collapsed: {},
                          }}
                        >
                          {item.group?.map((child) => (
                            <motion.li
                              key={child.title}
                              className="tree-item"
                              variants={{
                                open: { opacity: 1, y: 0 },
                                collapsed: { opacity: 0, y: -10 },
                              }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                              <Link
                                href={child.url}
                                className={twMerge(
                                  "tree-link flex items-center gap-2 rounded-md p-1 pl-4 text-left text-sm cursor-pointer",
                                  "hover:bg-white hover:bg-[linear-gradient(90deg,#80808020_1px,transparent_1px),linear-gradient(180deg,#80808020_1px,transparent_1px)] hover:bg-size-[5px_5px] mask-size-[50%] hover:animate-[rotatedGrid_6s_linear_infinite]",
                                  "bg-white"
                                )}
                              >
                                <Span className="text-gray-600 hover:text-gray-800 font-medium">
                                  {child.title}
                                </Span>
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </Div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </SidebarMenuItem>
          ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
