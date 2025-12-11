'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "What file format should I upload?",
            a: "We accept print-ready PDF files. For best results, ensure your PDF is high resolution (300 DPI) with proper bleed settings. Our team reviews every file before printing."
        },
        {
            q: "How fast can you print my books?",
            a: "Standard production is 5 business days. Rush orders can be completed in as little as 2 business days. Shipping time is additional based on your location."
        },
        {
            q: "What's the minimum order quantity?",
            a: "Our minimum order is 10 books. The more you print, the lower the cost per unit. Use our Book Configurator to see volume pricing."
        },
        {
            q: "Do you provide ISBN numbers?",
            a: "Yes! We offer ISBN registration services. You can add this option during configuration. We'll also place the barcode on your cover."
        },
        {
            q: "What binding options are available?",
            a: "We offer perfect binding (paperback), spiral coil binding, saddle stitch (stapled booklets), and case-bound hardcover options."
        },
        {
            q: "Can I get a sample before printing my full order?",
            a: "Absolutely. You can order a printed proof copy to review before we print your full order. This ensures everything looks perfect."
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-4 block">FAQ</span>
                    <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                        Common Questions
                    </h2>
                </motion.div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                            >
                                <span className="font-medium text-gray-900">{faq.q}</span>
                                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: 'auto' }}
                                        exit={{ height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5 text-gray-500 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
