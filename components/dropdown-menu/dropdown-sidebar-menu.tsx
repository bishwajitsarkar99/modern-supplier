import React, { ElementType, ReactNode, createElement } from 'react'
import { twMerge } from 'tailwind-merge'

interface DropdownSidebarMenuProps {
    as? : ElementType
    className? : string
    children? : ReactNode
    [key: string] : any
}

export const DropdownMenu = (props: DropdownSidebarMenuProps) => {

    const {className, children, as: Component="div", ...rest} = props;

    return createElement(Component, {
        className: twMerge(
            "dropdown menubar-component",
            className
        ),
        ...rest 
    }, children)
}

interface DropdownMenuTriggerProps {
    as? : ElementType
    className? : string
    children? : ReactNode
    [key: string] : any
}

export const DropdownMenuTrigger = (props: DropdownMenuTriggerProps) => {

    const {className, children, as: Component="button", ...rest} = props;

    return createElement(Component, {
        className: twMerge(
            "",
            className
        ),
        type: Component === "button" ? "button" : undefined,
        ...rest 
    }, children)
}

interface DropdownMenuContentProps {
    as? : ElementType
    className? : string
    children? : ReactNode
    [key: string] : any
}

export const DropdownMenuContent = (props: DropdownMenuContentProps) => {

    const {className, children, as: Component="div", ...rest} = props;

    return createElement(Component, {
        className: twMerge(
            "dropdown-content dropdown-menu-component menu-card",
            className
        ),
        ...rest
    }, children)
}

interface DropdownMenuHeaderProps {
    as? : ElementType
    className? : string
    children? : ReactNode
    [key: string] : any
}

export const DropdownMenuHeader = (props: DropdownMenuHeaderProps) => {
    const {className, children, as: Component="div", ...rest} = props;

    return createElement(Component, {
        className: twMerge(
            "menu-card-header",
            className
        ),
        ...rest, 

    },  
        <>
            {children}
            <span className="ms-2" />
        </>
    )}

interface DropdownMenuArrowProps {
    as? : ElementType
    className? : string
    children? : ReactNode
    [key: string] : any
}

export const DropdownMenuArrow = (props: DropdownMenuArrowProps) => {
    const {className, children, as: Component="div", ...rest} = props;

    return createElement(Component, {
        className: twMerge(
            "sub-menu-card-arrow",
            className
        ),
        ...rest
    }, children)
}

export default {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuHeader,
    DropdownMenuArrow
}


{/* <div className={twMerge(
    "dropdown menubar-component"
)}>
    <a id="dropbtn">
        {children}
    </a>
    <div className={twMerge(
        "dropdown-content dropdown-menu-component menu-card"
    )} id="productSidebarMenu">

        <div className={twMerge(
            "menu-card-header"
        )}>
            <span className="ms-2">{children}</span>
        </div>
        <ul className={twMerge("menu-btn-group")}>
            <li className={twMerge("child-line-row")}>
                {children}
            </li>
        </ul>
    </div>
    <span className={twMerge("menu-card-arrow")}></span>
</div> */}
