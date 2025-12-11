'use client';

import { motion } from 'framer-motion';
import { Layers, Zap, Award, Barcode, Maximize, RefreshCw } from 'lucide-react';

export function Features() {
    const features = [
        {
            icon: <Layers className="w-6 h-6" />,
            title: "Premium Paper Options",
            description: "Choose from 10+ paper stocks including silk, gloss, matte, and uncoated options."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "2-Day Production",
            description: "Rush orders produced in as little as 2 business days. Standard orders in 5 days."
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Hardcover & Softcover",
            description: "Perfect binding, spiral, saddle stitch, and case-bound hardcover options."
        },
        {
            icon: <Barcode className="w-6 h-6" />,
            title: "ISBN Services",
            description: "We can provide ISBN numbers and barcode placement for retail distribution."
        },
        {
            icon: <Maximize className="w-6 h-6" />,
            title: "Full Bleed Printing",
            description: "Edge-to-edge printing for stunning photo books and art publications."
        },
        {
            icon: <RefreshCw className="w-6 h-6" />,
            title: "Quality Guarantee",
            description: "100% satisfaction guaranteed. We'll reprint any order that doesn't meet standards."
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
                    <span className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-4 block">Why Choose Us</span>
                    <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                        Features & Benefits
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-xl border border-gray-100 hover:border-teal-100 hover:bg-teal-50/30 transition-all group"
                        >
                            <div className="inline-flex p-3 bg-teal-50 rounded-xl text-teal-600 mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
