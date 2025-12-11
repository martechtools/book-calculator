'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Calculator } from 'lucide-react';

export function PricingPreview() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex p-4 bg-teal-50 rounded-2xl text-teal-600 mb-6">
                        <Calculator className="w-8 h-8" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight mb-4">
                        Get Your Instant Quote
                    </h2>

                    <p className="text-xl text-gray-500 mb-4">
                        Books starting at <span className="font-semibold text-teal-600">$2.50</span> per copy
                    </p>

                    <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                        Use our Book Configurator to customize every detail and get transparent, instant pricing. No hidden fees.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/calculator">
                            <Button className="h-14 px-12 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-lg group cursor-pointer">
                                Start Configuration
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>

                    <p className="text-sm text-gray-400 mt-6">
                        No account required. Configure and save your quote in minutes.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
