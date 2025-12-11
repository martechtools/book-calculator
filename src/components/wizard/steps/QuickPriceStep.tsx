'use client';

import { useBookStore } from '@/lib/store';
import { calculatePricing, calculateProductionDays, formatCurrency } from '@/lib/pricing';
import { StepLayout } from '../StepLayout';
import { CheckCircle2, Clock, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

export function QuickPriceStep() {
    const store = useBookStore();
    const { quantity } = store;
    const { pricePerBook, totalPrice, savings } = calculatePricing(store);
    const productionDays = calculateProductionDays(store);

    const Preview = (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Selections Valid</h3>
            <p className="text-xs text-gray-500">Ready to proceed to customization.</p>
        </div>
    );

    return (
        <StepLayout
            title="Review Initial Quote"
            description="Here represents the base cost for your configuration. Next, we'll choose paper types and cover details."
            preview={Preview}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                {/* Unit Price Card */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white border border-gray-200 p-8 rounded-sm text-center flex flex-col items-center justify-center min-h-[200px]"
                >
                    <p className="text-gray-500 text-sm uppercase tracking-widest font-medium mb-2">Unit Price</p>
                    <div className="text-5xl font-light text-gray-900 mb-2">
                        {formatCurrency(pricePerBook)}
                    </div>
                    <p className="text-sm text-gray-400">per book</p>
                </motion.div>

                {/* Total Price Card */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gray-900 text-white p-8 rounded-sm text-center flex flex-col items-center justify-center min-h-[200px]"
                >
                    <p className="text-gray-400 text-sm uppercase tracking-widest font-medium mb-2">Estimated Total</p>
                    <div className="text-5xl font-light text-white mb-2">
                        {formatCurrency(totalPrice)}
                    </div>
                    {savings > 0 && (
                        <p className="text-sm text-green-400">
                            Savings applied!
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Timeline Info */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-8 bg-gray-50 border border-gray-100 p-6 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6"
            >
                <div className="flex items-center gap-4">
                    <Clock className="w-6 h-6 text-gray-400" />
                    <div>
                        <h4 className="font-medium text-gray-900">Standard Turnaround</h4>
                        <p className="text-sm text-gray-500">{productionDays} business days for production</p>
                    </div>
                </div>
                <div className="h-8 w-px bg-gray-200 hidden sm:block" />
                <div className="flex items-center gap-4">
                    <Truck className="w-6 h-6 text-gray-400" />
                    <div>
                        <h4 className="font-medium text-gray-900">Shipping</h4>
                        <p className="text-sm text-gray-500">Calculated at final checkout</p>
                    </div>
                </div>
            </motion.div>
        </StepLayout>
    );
}
