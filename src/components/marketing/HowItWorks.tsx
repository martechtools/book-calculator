'use client';

import { motion } from 'framer-motion';
import { Settings, Upload, Package } from 'lucide-react';

export function HowItWorks() {
    const steps = [
        {
            icon: <Settings className="w-8 h-8" />,
            step: "01",
            title: "Configure",
            description: "Use our Book Configurator to customize binding, paper, size, and finishes. Get instant pricing."
        },
        {
            icon: <Upload className="w-8 h-8" />,
            step: "02",
            title: "Upload",
            description: "Submit your print-ready PDF. Our team reviews every file for quality assurance."
        },
        {
            icon: <Package className="w-8 h-8" />,
            step: "03",
            title: "Receive",
            description: "Premium books delivered to your door. Production in as fast as 2 business days."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-4 block">Simple Process</span>
                    <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                        How It Works
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="relative text-center group"
                        >
                            {/* Connector Line */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-teal-200 to-transparent" />
                            )}

                            <div className="relative inline-flex mb-6">
                                <div className="p-5 bg-teal-50 rounded-2xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
                                    {step.icon}
                                </div>
                                <span className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                    {step.step}
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
