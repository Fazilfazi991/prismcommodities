"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Agricultural", href: "/agricultural-commodities" },
    { name: "Petroleum", href: "/petroleum-services" },
    { 
        name: "Metals", 
        href: "#",
        subItems: [
            { name: "Nonferrous", href: "/metals/nonferrous" },
        ]
    },
    { name: "Global Footprint", href: "/global-footprint" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-20 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="relative h-16 w-16 overflow-hidden">
                            <Image
                                src="https://img1.wsimg.com/isteam/ip/7739499c-43c9-4c7b-8ad0-4d243c17964d/198AE2CB-968D-4878-973A-94DEB7709B77.jpeg/:/rs=w:137,h:161,cg:true,m/cr=w:137,h:161/qt=q:100/ll"
                                alt="Prism Commodities Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            item.subItems ? (
                                <div key={item.name} className="relative group">
                                    <button className="flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                                        {item.name}
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    </button>
                                    <div className="absolute left-0 top-full hidden pt-2 group-hover:block w-48">
                                        <div className="rounded-md border bg-background shadow-md p-2">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.href}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </Link>
                            )
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b bg-background"
                    >
                        <div className="container px-4 py-4 space-y-4">
                            {navItems.map((item) => (
                                item.subItems ? (
                                    <div key={item.name} className="space-y-3">
                                        <div className="text-base font-medium text-foreground">
                                            {item.name}
                                        </div>
                                        <div className="pl-4 space-y-3 border-l-2 border-muted">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.href}
                                                    href={subItem.href}
                                                    className="block text-base font-medium text-foreground/80 hover:text-primary"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block text-base font-medium text-foreground hover:text-primary"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
