'use client';

import { motion } from 'framer-motion';
import { Shield, Leaf, Globe, Award } from 'lucide-react';

export function WhyUs() {
    return (
        <section className="py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-semibold uppercase tracking-widest text-teal-400 mb-4 block">About 4OVER4</span>
                        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                            Trusted Since 1999
                        </h2>
                        <p className="text-gray-400 leading-relaxed text-lg mb-8">
                            For over 25 years, 4OVER4.com has been America's trusted printing partner. From independent authors to major publishers, we've printed millions of books with the same commitment to quality.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            Our state-of-the-art facilities in the United States ensure fast turnaround, competitive pricing, and exceptional print quality on every order.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: <Shield className="w-5 h-5" />, text: "Quality Certified" },
                                { icon: <Leaf className="w-5 h-5" />, text: "Eco-Friendly Options" },
                                { icon: <Globe className="w-5 h-5" />, text: "US-Based Production" },
                                { icon: <Award className="w-5 h-5" />, text: "25+ Years Experience" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm">
                                    <div className="text-teal-400">{item.icon}</div>
                                    <span className="text-gray-300">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-8xl font-bold text-white/20 mb-2">25+</div>
                                <div className="text-xl text-white/60 uppercase tracking-widest">Years</div>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 p-6 rounded-2xl shadow-2xl">
                            <div className="text-3xl font-bold text-teal-600">4OVER4</div>
                            <div className="text-sm text-gray-500">America's Best Printer</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
