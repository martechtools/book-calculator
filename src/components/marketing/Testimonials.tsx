'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
    const testimonials = [
        {
            quote: "The quality exceeded my expectations. My photo book looks absolutely stunning, and the paper quality is incredible.",
            author: "Sarah M.",
            role: "Independent Author",
            rating: 5
        },
        {
            quote: "Fast turnaround and excellent customer service. I've printed over 500 books with 4OVER4 and never been disappointed.",
            author: "James K.",
            role: "Self-Publisher",
            rating: 5
        },
        {
            quote: "The Book Configurator made it so easy to get an instant quote. No hidden fees, exactly what I expected to pay.",
            author: "Michelle T.",
            role: "Cookbook Author",
            rating: 5
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-4 block">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                        What Authors Say
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-teal-100" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(t.rating)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-6 italic">"{t.quote}"</p>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold">
                                    {t.author[0]}
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{t.author}</div>
                                    <div className="text-sm text-gray-500">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
