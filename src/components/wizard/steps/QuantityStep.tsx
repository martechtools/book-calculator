'use client';

import { useBookStore } from '@/lib/store';
import { FREE_BOOKS_THRESHOLD, FREE_BOOKS_BONUS, MIN_QUANTITY } from '@/lib/constants';
import { StepLayout } from '../StepLayout';
import { Input } from '@/components/ui/input';
import { Package, Gift, TrendingDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function QuantityStep() {
    const { quantity, setQuantity } = useBookStore();

    const presets = [25, 50, 100, 250, 500, 1000];
    const hasFreeBooks = quantity >= FREE_BOOKS_THRESHOLD;

    const Preview = (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="relative mb-6">
                <Package className="w-20 h-20 text-gray-900 stroke-1" />
                {hasFreeBooks && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1.5 shadow-md"
                    >
                        <Gift className="w-4 h-4" />
                    </motion.div>
                )}
            </div>

            <h3 className="text-3xl font-light text-gray-900 mb-1">{quantity}</h3>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Books Printed</p>

            {hasFreeBooks && (
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Gift className="w-4 h-4" />
                    <span>+{FREE_BOOKS_BONUS} Free Copies</span>
                </div>
            )}
        </div>
    );

    return (
        <StepLayout
            title="Quantity"
            description="How many copies would you like to print? Volume discounts apply."
            preview={Preview}
        >
            <div className="space-y-8 max-w-xl">
                {/* Input & Slider */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <Input
                            type="number"
                            min={MIN_QUANTITY}
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(MIN_QUANTITY, parseInt(e.target.value) || 0))}
                            className="text-3xl h-20 w-32 text-center bg-white border-gray-200 focus:border-gray-900 focus:ring-0 font-light"
                        />
                        <div className="flex-1 space-y-4">
                            <input
                                type="range"
                                min={MIN_QUANTITY}
                                max={2000}
                                step={1}
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
                            />
                            <div className="flex justify-between text-xs text-gray-400">
                                <span>{MIN_QUANTITY}</span>
                                <span>2000+</span>
                            </div>
                        </div>
                    </div>

                    {/* Presets */}
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {presets.map(amt => (
                            <button
                                key={amt}
                                onClick={() => setQuantity(amt)}
                                className={`py-2 px-1 rounded-sm text-sm border transition-all ${quantity === amt
                                        ? 'bg-gray-900 text-white border-gray-900'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                {amt}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Volume Discount Info */}
                <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-sm">
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-blue-100 rounded-full text-blue-600 mt-1">
                            <TrendingDown className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-blue-900 mb-1">Volume Discounts Active</h4>
                            <p className="text-sm text-blue-700 leading-relaxed">
                                Printing more reduces the cost per book significantly. <br />
                                <span className="font-medium mt-1 block">
                                    Current Tier: {quantity >= 500 ? 'High Volume' : quantity >= 250 ? 'Mid Volume' : quantity >= 100 ? 'Standard' : 'Short Run'}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </StepLayout>
    );
}
