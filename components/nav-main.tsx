"use client"

import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react"

import { motion} from "framer-motion";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { useSidebar } from "@/components/ui/sidebar"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Div from "./div/div"
import Span from "./span/span"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuHeader,
  DropdownMenuArrow
} from '@/components/dropdown-menu/dropdown-sidebar-menu'
import {
  LeftResizer,
  RightResizer,
  TopResizer,
  BottomResizer
} from '@/components/resizer/resizer'

import { useMenuCardResize } from "@/hooks/useMenuCardResize";

export function NavMain({
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
  const isIcon = state === "collapsed" && !isMobile  

  const {
    cardRef,
    leftRef,
    rightRef,
    topRef,
    bottomRef,
    svgRectRef,
  } = useMenuCardResize({ cardId: "menu-card-1" });

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              {isIcon ? (
                // COLLAPSED MODE: icon-only top-level button
                <DropdownMenu>
                  <SidebarMenuButton id="dropbtn" className="justify-center p-2">
                    {item.icon && <item.icon className="size-4 text-gray-500" />}
                  </SidebarMenuButton>
                  <DropdownMenuContent ref={cardRef} className="lg:ml-8.5 lg:-mt-8 xl:ml-8.5 xl:-mt-8" id="productSidebarMenu">
                    <DropdownMenuHeader>
                      <Div className="flex justify-center items-center ms-2.5">
                        {item.icon && <item.icon className="size-4 text-gray-500" />}
                        <Div className="ms-1">{item.title}</Div>
                      </Div>
                    </DropdownMenuHeader>
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
                                "tree-link flex justify-between items-center gap-2 rounded-md p-1 pl-4 text-left text-sm cursor-pointer",
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
                    <LeftResizer ref={leftRef} />
                    <RightResizer ref={rightRef} />
                    <TopResizer ref={topRef} />
                    <BottomResizer ref={bottomRef} />
                    <svg className="connector" width="100%" height="100%">
                      <rect ref={svgRectRef} className="connectorPath" x="0" y="0" rx="3" ry="3" />
                    </svg>
                    <DropdownMenuArrow />
                  </DropdownMenuContent>
                </DropdownMenu>
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
                                  "tree-link flex justify-between items-center gap-2 rounded-md p-1 pl-4 text-left text-sm cursor-pointer",
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
      </SidebarGroupContent>
    </SidebarGroup>
  )
};
