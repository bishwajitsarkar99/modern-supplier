import React, { ElementType, ReactNode, createElement } from 'react'
import { twMerge } from 'tailwind-merge'

interface LeftResizerProps {
    as? : ElementType
    className? : string
    children? : ReactNode
    [key: string] : any    
}
export const LeftResizer = (props: LeftResizerProps) => {
    const {className, children, as: Component="div", ...rest} = props;
    return createElement(Component, {
        className: twMerge(
            "width-resizer left-resizer",
            className
        ),
        ...rest
    }, children)
}

interface RightResizerProps {
    as? : ElementType
    className? : string
    children? : ReactNode
    [key: string] : any    
}
export const RightResizer = (props: RightResizerProps) => {
    const {className, children, as: Component="div", ...rest} = props;
    return createElement(Component, {
        className: twMerge(
            "width-resizer right-resizer",
            className
        ),
        ...rest
    }, children)
}

interface TopResizerProps {
    as? : ElementType
    className? : string
    children? : ReactNode
    [key: string] : any    
}
export const TopResizer = (props: TopResizerProps) => {
    const {className, children, as: Component="div", ...rest} = props;
    return createElement(Component, {
        className: twMerge(
            "height-resizer top-resizer",
            className
        ),
        ...rest
    }, children)
}

interface BottomResizerProps {
    as? : ElementType
    className? : string
    children? : ReactNode
    [key: string] : any    
}
export const BottomResizer = (props: BottomResizerProps) => {
    const {className, children, as: Component="div", ...rest} = props;
    return createElement(Component, {
        className: twMerge(
            "height-resizer bottom-resizer",
            className
        ),
        ...rest
    }, children)
}

export default {
    LeftResizer,
    RightResizer,
    TopResizer,
    BottomResizer
};
