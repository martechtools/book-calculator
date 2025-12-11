'use client';

import { useBookStore } from '@/lib/store';
import { BINDINGS, COIL_COLORS } from '@/lib/constants';
import { SelectableCard } from '@/components/ui/SelectableCard';
import { StepLayout } from '../StepLayout';
import { Book, Notebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function BindingStep() {
    const { binding, setBinding, coilColor, setCoilColor } = useBookStore();

    const selectedBinding = BINDINGS.find(b => b.id === binding);

    // Dynamic Preview Content
    const Preview = (
        <div className="flex flex-col items-center justify-center text-gray-400">
            {binding === 'spiral' ? (
                <Notebook className="w-24 h-24 stroke-1 mb-4 text-gray-900" />
            ) : (
                <Book className="w-24 h-24 stroke-1 mb-4 text-gray-900" />
            )}
            <p className="text-sm font-medium text-gray-900">{selectedBinding?.name || 'Select Binding'}</p>
            <p className="text-xs text-gray-500 mt-1 text-center max-w-[200px]">
                {selectedBinding?.description}
            </p>
        </div>
    );

    return (
        <StepLayout
            title="Choose Your Binding"
            description="Select the binding style that best fits your project. This affects durability, appearance, and page count limits."
            preview={Preview}
        >
            <div className="grid grid-cols-1 gap-3">
                {BINDINGS.map((type) => {
                    const isSelected = binding === type.id;
                    return (
                        <SelectableCard
                            key={type.id}
                            selected={isSelected}
                            onClick={() => setBinding(type.id as 'perfect' | 'spiral' | 'saddle')}
                            title={type.name}
                            subtitle={type.subtitle}
                            description={type.description}
                            price={type.pricePerBook}
                            showCheck={true}
                        />
                    );
                })}
            </div>

            {/* Coil Color Selection (Conditional) */}
            <AnimatePresence>
                {binding === 'spiral' && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden mt-6 pt-6 border-t border-gray-100"
                    >
                        <h4 className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wide">Select Coil Color</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {COIL_COLORS.slice(0, 8).map((color) => (
                                <button
                                    key={color.id}
                                    onClick={() => setCoilColor(color.id)}
                                    className={`relative p-3 rounded-sm border text-left transition-all cursor-pointer ${coilColor === color.id
                                            ? 'border-gray-900 bg-gray-50 ring-1 ring-gray-900'
                                            : 'border-gray-200 hover:border-gray-400'
                                        }`}
                                >
                                    <div className="w-full h-8 rounded-sm mb-2 border border-gray-100 shadow-sm" style={{ backgroundColor: color.id === 'clear' ? 'transparent' : color.id }} />
                                    <span className={`text-xs font-medium block ${coilColor === color.id ? 'text-gray-900' : 'text-gray-600'}`}>
                                        {color.name}
                                    </span>
                                    {!color.inStock && (
                                        <span className="text-[10px] text-orange-600">+{color.extraDays} days</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </StepLayout>
    );
}
