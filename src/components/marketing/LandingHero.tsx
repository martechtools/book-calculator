'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export function LandingHero() {
    return (
        <div className="relative overflow-hidden bg-white">
            {/* Ambient Background */}
            <div className="absolute top-0 inset-x-0 h-[800px] pointer-events-none overflow-hidden">
                <div className="absolute top-[-200px] right-[-100px] w-[800px] h-[800px] bg-teal-50/50 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-[100px]" />
            </div>

            {/* Hero Content */}
            <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 border border-teal-100 rounded-full mb-8">
                        <Sparkles className="w-4 h-4 text-teal-600" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">Powered by 4OVER4.com, America's Best Printer</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-gray-900 leading-[1.1] mb-8">
                        Crafting books with <br />
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400">
                            exceptional detail.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-12 font-light">
                        Experience premium book printing powered by 4OVER4. From art books to novels, we bring your vision to life with materials that demand to be touched.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/calculator">
                            <Button className="h-14 px-12 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-lg group cursor-pointer">
                                Start Configuration
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="h-14 px-8 rounded-full border-gray-200 hover:bg-gray-50 text-gray-900 text-lg cursor-pointer">
                                Contact Sales
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 border-t border-gray-100 pt-16"
                >
                    {[
                        {
                            icon: <BookOpen className="w-6 h-6" />,
                            title: "Premium Materials",
                            desc: "Curated selection of fine papers and covers from around the world."
                        },
                        {
                            icon: <Clock className="w-6 h-6" />,
                            title: "Fast Turnaround",
                            desc: "Production in as little as 2 business days without compromising quality."
                        },
                        {
                            icon: <ShieldCheck className="w-6 h-6" />,
                            title: "Quality Guarantee",
                            desc: "Every book is inspected by hand before shipping. Satisfaction guaranteed."
                        }
                    ].map((feature, i) => (
                        <div key={i} className="group cursor-default">
                            <div className="mb-4 inline-flex p-3 bg-gray-50 rounded-2xl group-hover:bg-teal-50 transition-colors text-gray-900 group-hover:text-teal-600">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
