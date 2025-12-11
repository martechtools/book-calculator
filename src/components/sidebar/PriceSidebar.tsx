'use client';

import { useBookStore } from '@/lib/store';
import { calculatePricing, calculateProductionDays, formatCurrency } from '@/lib/pricing';
import { FREE_BOOKS_THRESHOLD, FREE_BOOKS_BONUS } from '@/lib/constants';
import { motion } from 'framer-motion';

export function PriceSidebar() {
    const store = useBookStore();
    const pricing = calculatePricing(store);
    const productionDays = calculateProductionDays(store);

    const hasFreeBooks = store.quantity >= FREE_BOOKS_THRESHOLD;

    return (
        <div className="flex items-center justify-between">
            {/* Price */}
            <div>
                <motion.div
                    key={pricing.subtotal}
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-medium text-gray-900"
                >
                    {formatCurrency(pricing.subtotal)}
                    <span className="text-xs align-super text-gray-500 ml-0.5">*</span>
                </motion.div>
                <p className="text-xs text-gray-500 underline cursor-pointer hover:text-gray-700">
                    Est. payment
                </p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6">
                <div className="text-right">
                    <div className="text-xl font-light text-gray-900">
                        {store.quantity + (hasFreeBooks ? FREE_BOOKS_BONUS : 0)}
                        <span className="text-sm text-gray-500 ml-1">books</span>
                    </div>
                    <p className="text-xs text-gray-500">Total quantity</p>
                </div>

                <div className="text-right">
                    <div className="text-xl font-light text-gray-900">
                        {productionDays === 0 ? '< 1' : productionDays}
                        <span className="text-sm text-gray-500 ml-1">days</span>
                    </div>
                    <p className="text-xs text-gray-500 underline cursor-pointer hover:text-gray-700">
                        Production time
                    </p>
                </div>
            </div>
        </div>
    );
}
