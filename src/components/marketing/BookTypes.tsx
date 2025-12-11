'use client';

import { motion } from 'framer-motion';
import { BookOpen, Image, FileText, ChefHat, Baby, Palette } from 'lucide-react';

export function BookTypes() {
    const types = [
        { icon: <BookOpen className="w-7 h-7" />, name: "Novels", desc: "Fiction & non-fiction paperbacks" },
        { icon: <Image className="w-7 h-7" />, name: "Photo Books", desc: "Premium photo albums" },
        { icon: <Palette className="w-7 h-7" />, name: "Art Books", desc: "Portfolio & exhibition catalogs" },
        { icon: <FileText className="w-7 h-7" />, name: "Manuals", desc: "Training & technical guides" },
        { icon: <ChefHat className="w-7 h-7" />, name: "Cookbooks", desc: "Recipe collections" },
        { icon: <Baby className="w-7 h-7" />, name: "Children's Books", desc: "Picture books & stories" },
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
                    <span className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-4 block">What We Print</span>
                    <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                        Every Type of Book
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {types.map((type, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white p-6 rounded-xl border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all group cursor-pointer text-center"
                        >
                            <div className="inline-flex p-3 bg-gray-50 rounded-xl text-gray-600 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors mb-4">
                                {type.icon}
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-1">{type.name}</h3>
                            <p className="text-xs text-gray-500">{type.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
