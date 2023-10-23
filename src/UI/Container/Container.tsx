import { FC, HTMLAttributes, ReactNode } from "react";
import "./Container.css"

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export const Container: FC<ContainerProps> = (props) => {
    const { children } = props

    return (
        <div className="container">
            {children}
        </div>
    )
}