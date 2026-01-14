"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-primary text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Agricultural fields and oil refinery collage"
                    fill
                    className="object-cover opacity-40 mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-[0.03] bg-[radial-gradient(circle,theme(colors.white)_1px,transparent_1px)] bg-[size:40px_40px]"
                />
            </div>

            <div className="container relative z-10 px-4 md:px-6 text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
                        Reflecting <span className="text-secondary">Global</span> Possibilities
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Your premier partner for Agricultural Commodities and Petroleum Energy Services. Connecting the world with sustainable and reliable supply chains.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-secondary text-primary font-bold hover:bg-white transition-colors"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                        >
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
