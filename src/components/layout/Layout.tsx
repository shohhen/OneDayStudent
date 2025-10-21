import Header from './Header'
import {ReactNode} from "react";

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative">
            <div className="shape-blob one"></div>
            <div className="shape-blob two"></div>
            <Header />
            <main className="w-full z-10">{children}</main>
        </div>
    )
}