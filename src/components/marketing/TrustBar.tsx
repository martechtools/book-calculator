'use client';

import { motion } from 'framer-motion';
import { Star, MapPin, Calendar, Users } from 'lucide-react';

export function TrustBar() {
    const stats = [
        { icon: <Users className="w-5 h-5" />, value: "50,000+", label: "Books Printed" },
        { icon: <Star className="w-5 h-5" />, value: "4.9★", label: "Customer Rating" },
        { icon: <MapPin className="w-5 h-5" />, value: "USA", label: "Based Production" },
        { icon: <Calendar className="w-5 h-5" />, value: "Since 1999", label: "Trusted Partner" },
    ];

    return (
        <div className="bg-gray-50 border-y border-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <div className="p-2.5 bg-white rounded-xl border border-gray-100 text-teal-600">
                                {stat.icon}
                            </div>
                            <div>
                                <div className="text-xl font-semibold text-gray-900">{stat.value}</div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
